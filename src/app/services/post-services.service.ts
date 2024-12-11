import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  private getAuthHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('token');
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }
    return headers;
  }

  registrarPost(post: Post): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post<any>(this.apiUrlCrearPost, post, { headers });
  }

  agregarComentario(comentario: ComentarioPost): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post<any>(this.apiUrlComentar, comentario, { headers });
  }

  obtenerPost(): Observable<Publicacion[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Publicacion[]>(this.apiUrlPost, { headers });
  }

  obtenerTemas(): Observable<Tema[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Tema[]>(this.apiUrlTemas, { headers });
  }
}
