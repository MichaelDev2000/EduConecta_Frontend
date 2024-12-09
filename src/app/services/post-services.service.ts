import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacion } from '../models/publicacion.model';
import { Tema } from '../models/tema.model';

@Injectable({
  providedIn: 'root'
})
export class PostServicesService {

  private apiUrlPost = "http://localhost:8080/ApiPost/ListarPostOrdenados";
  private apiUrlTemas = "http://localhost:8080/apiTemasAcademicos/listarTemas";

  constructor(private http:HttpClient) { }

  public obtenerPost(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(this.apiUrlPost); 
  }

  public obtenerTemas():Observable<Tema[]>{
    return this.http.get<Tema[]>(this.apiUrlTemas);
  }
}
