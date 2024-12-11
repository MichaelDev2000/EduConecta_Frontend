import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { crearGrupo } from '../models/crearGrupo.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GruposServicesService {
  headers = new HttpHeaders();
  private ApiGruposGet = "http://localhost:8080/ApiGrupos/ListaGrupos";
  private ApiGruposPost = "http://localhost:8080/ApiGrupos/registrar";


  constructor(private http: HttpClient) { }

  obtenerGrupos(): Observable<any>{
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.get(this.ApiGruposGet,{ headers: headers });
  }

  crearGrupo(grupoPost:crearGrupo):Observable<any>{
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.http.post(this.ApiGruposPost,grupoPost,{ headers: headers });
  }

}
