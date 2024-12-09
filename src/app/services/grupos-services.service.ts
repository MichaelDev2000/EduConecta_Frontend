import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { crearGrupo } from '../models/crearGrupo.model';

@Injectable({
  providedIn: 'root'
})
export class GruposServicesService {
  private ApiGruposGet = "http://localhost:8080/ApiGrupos/ListaGrupos";
  private ApiGruposPost = "http://localhost:8080/ApiGrupos/registrar";

  constructor(private http: HttpClient) { }

  obtenerGrupos(): Observable<any>{
    return this.http.get(this.ApiGruposGet);
  }

  crearGrupo(grupoPost:crearGrupo):Observable<any>{
    return this.http.post(this.ApiGruposPost,grupoPost);
  }

}
