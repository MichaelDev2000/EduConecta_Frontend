import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/login';
  private readonly TOKEN_KEY = 'token';
  private readonly USER_INFO_KEY = 'userInfo';

  constructor(private http: HttpClient) { }



  login(email: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('Correo', email);
    body.set('Contraseña', password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(this.apiUrl, body.toString(), { headers });
  }


  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
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
