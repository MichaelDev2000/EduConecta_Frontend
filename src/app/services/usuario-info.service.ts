import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioInfoService {
  
  private apiUserList = "http://localhost:8080/ApiUsers/usuarios";
  private apiUserInfo = "http://localhost:8080/ApiUsers/InfoUsuario";
  private apiPeticionesAmistad = "http://localhost:8080/ApiPeticiones/pendientes";
  private apiAmigos = "http://localhost:8080/ApiAmistad/listarAmigosUsuario";

  readonly userInfo = localStorage.getItem('user');
  parsedUser = this.userInfo ? JSON.parse(this.userInfo) : null;
  usuarioDatos = {
    "usuId": this.parsedUser?.usuarioId,
    "usuCorreo": this.parsedUser?.usuCorreo,
    "usuNombre": this.parsedUser?.usuNombres,
    "usuApellidos": this.parsedUser?.usuApellidos,
    "usuBiografia": this.parsedUser?.usuBiografia,
    "usuImgperfil": this.parsedUser?.usuImgperfil,
  };

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  }

  listarUsuario(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(this.apiUserList, { headers });
  }

  inforUsuario(usuarioId: string): Observable<any> {
    const url = `${this.apiUserInfo}?usuarioId=${usuarioId}`;
    const headers = this.getAuthHeaders(); // Si necesitas autorización para esta llamada también
    return this.http.get(url, { headers });
  }

  obtenerPeticionesAmistad(usuarioId: string): Observable<any> {
    const url = `${this.apiPeticionesAmistad}?idUsuarioDestino=${usuarioId}`;
    const headers = this.getAuthHeaders(); // Si esta llamada también requiere el token
    return this.http.get(url, { headers });
  }

  listarAmigos(usuarioId: string): Observable<any> {
    const url = `${this.apiAmigos}?usuarioId=${usuarioId}`;
    const headers = this.getAuthHeaders(); // Agregar el token en los encabezados
    return this.http.get(url, { headers });
  }
}
