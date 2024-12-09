import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacion } from '../models/publicacion.model';
import { Tema } from '../models/tema.model';
import { Post } from '../models/post.model';
import { ComentarioPost } from '../models/comentarioPost.model';

@Injectable({
  providedIn: 'root'
})
export class PostServicesService {

  private apiUrlPost = "http://localhost:8080/ApiPost/ListarPostOrdenados";
  private apiUrlTemas = "http://localhost:8080/apiTemasAcademicos/listarTemas";
  private apiUrlCrearPost = "http://localhost:8080/ApiPost/registrar";
  private apiUrlComentar = "http://localhost:8080/ApiComentarios/registrar";

  constructor(private http: HttpClient) { }

  registrarPost(post: Post): Observable<any> {
    return this.http.post<any>(this.apiUrlCrearPost, post);
  }

  agregarComentario(comentario: ComentarioPost): Observable<any> {
    return this.http.post<any>(this.apiUrlComentar, comentario);
  }

  obtenerPost(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(this.apiUrlPost);
  }

  obtenerTemas(): Observable<Tema[]> {
    return this.http.get<Tema[]>(this.apiUrlTemas);
  }
}
