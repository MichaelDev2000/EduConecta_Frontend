import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../config/firebase.config';
import { GoogleAuthResponse } from '../models/googleResponse.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private firebaseTokenInMemory: string | null = null;

  private apiUrl = 'http://localhost:8080/login';
  private apiUrlGoogleAuth = 'http://localhost:8080/auth/google';
  private apiUrlRegister = 'http://localhost:8080/ApiUsers/registrar';
  private apiUrlChangePassword = 'http://localhost:8080/ApiUsers/updatePassUsuario';
  private apiUrlChangeInfo = 'http://localhost:8080/ApiUsers/updateInfoUsuario';
  private readonly TOKEN_KEY = 'token';
  private readonly USER_INFO_KEY = 'user';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<HttpResponse<any>> {
    return this.http.post(this.apiUrlRegister, user, { observe: 'response' });
  }



  async loginWithGoogle(): Promise<any> {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      this.firebaseTokenInMemory = idToken;
  
      const url = `${this.apiUrlGoogleAuth}?idToken=${encodeURIComponent(idToken)}`;
  
      const response: GoogleAuthResponse | undefined = await this.http.post<GoogleAuthResponse>(url, {}).toPromise();
  
      if (response) {
        const token = response.token;
        const userInfo = response.usuario;
  
        localStorage.setItem(this.TOKEN_KEY, token);
        localStorage.setItem(this.USER_INFO_KEY, JSON.stringify(userInfo));
  
        return result;
      } else {
        throw new Error('No se recibió una respuesta válida del backend');
      }
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
      throw error;
    }
  }
  

  login(email: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('Correo', email);
    body.set('Contraseña', password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post(this.apiUrl, body.toString(), { headers });
  }
  updatePassword(userId: string, newPassword: string, oldPassword: string): Observable<any> {
    const url = `${this.apiUrlChangePassword}?UserId=${encodeURIComponent(userId)}&PassNew=${encodeURIComponent(newPassword)}&PassOld=${encodeURIComponent(oldPassword)}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.patch(url, {}, { headers });
  }
  updateUserInfo(UsuarioId: string, Nombres: string, Apellidos: string, Biografia: string): Observable<any> {
    // Construimos la URL con los parámetros
    const url = `${this.apiUrlChangeInfo}?UsuarioId=${encodeURIComponent(UsuarioId)}&Nombres=${encodeURIComponent(Nombres)}&Apellidos=${encodeURIComponent(Apellidos)}&Biografia=${encodeURIComponent(Biografia)}`;

    // Configuramos los headers si son necesarios
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Realizamos la petición con HTTP PATCH
    return this.http.patch(url, {}, { headers });
  }

  getToken(): string | null {
    const tokenUser = localStorage.getItem(this.TOKEN_KEY);
    return tokenUser;
  }


  getUserInfo(): any {
    const userInfo = localStorage.getItem(this.USER_INFO_KEY);
    return userInfo ? JSON.parse(userInfo) : null;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_INFO_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
