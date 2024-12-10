import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://localhost:8080/login';
  private apiUrlRegister = 'http://localhost:8080/ApiUsers/registrar';
  private apiUrlChangePassword = 'http://localhost:8080/ApiUsers/updatePassUsuario';
  private apiUrlChangeInfo = 'http://localhost:8080/ApiUsers/updateInfoUsuario';
  private readonly TOKEN_KEY = 'token';
  private readonly USER_INFO_KEY = 'user';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<HttpResponse<any>> {
    return this.http.post(this.apiUrlRegister, user,{ observe: 'response' });
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
