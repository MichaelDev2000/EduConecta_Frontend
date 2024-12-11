import { Component, OnInit } from '@angular/core';
import { PostServicesService } from '../../../services/post-services.service';
import { Publicacion } from '../../../models/publicacion.model';
import { Tema } from '../../../models/tema.model';
import { UsuarioInfoService } from '../../../services/usuario-info.service';
import { Post } from '../../../models/post.model';
import { ComentarioPost } from '../../../models/comentarioPost.model';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {

  idUsuario = '';
  temas: Tema[] = [];
  publicacion: Publicacion[] = [];
  publicacionesFiltradas: Publicacion[] = [];
  nuevaPublicacion: string = '';
  temaSeleccionado: string = '';
  filtroTema: string = '';
  contenidoComent = '';

  constructor(private postService: PostServicesService, private userInfo: UsuarioInfoService) {
    this.idUsuario = this.userInfo.usuarioDatos.usuId;
  }

  ngOnInit(): void {
    this.obtenerPosts();
    this.obtenerTemas();
  }



  comentarPost(publicacion: Publicacion): void {
    if (!this.contenidoComent.trim()) {
      alert('El comentario no puede estar vacío.');
      return;
    }

    const comentario: ComentarioPost = {
      comentContenido: this.contenidoComent,
      usuario: { usuarioId: this.idUsuario },
      publicacione: { postId: publicacion.postId },
    };


    this.postService.agregarComentario(comentario).subscribe(
      (response) => {
        this.obtenerPosts();
        this.contenidoComent = '';
      },
      (error) => {
        this.obtenerPosts();
        this.contenidoComent = '';
      }
    );
  }


  crearPublicacion(): void {
    if (!this.nuevaPublicacion || !this.temaSeleccionado) {
      alert('Por favor, completa el contenido y selecciona un tema.');
      return;
    }

    const nuevaPost: Post = {
      postContenido: this.nuevaPublicacion,
      temaId: { temaId: this.temaSeleccionado },
      usuarioId: { usuarioId: this.idUsuario },
    };

    this.postService.registrarPost(nuevaPost).subscribe({
      next: () => {
        alert('Publicación creada con éxito.');
        this.nuevaPublicacion = '';
        this.temaSeleccionado = '';
        this.obtenerPosts();
      },
      error: (error) => {
        if (error.status === 201) {
          this.nuevaPublicacion = '';
          this.temaSeleccionado = '';
        }
        this.obtenerPosts();
      },
    });
  }




  obtenerPosts(): void {
    this.postService.obtenerPost().subscribe({
      next: (data: Publicacion[]) => {
        this.publicacion = data;
        this.publicacionesFiltradas = [...this.publicacion];
      },
      error: (error: any) => console.log(error),
      complete: () => {
      }
    });
  }


  obtenerTemas(): void {
    this.postService.obtenerTemas().subscribe({
      next: (data: Tema[]) => {
        this.temas = data;
      },
      error: (error: any) => console.log(error)
    });
  }


  filtrarPublicaciones(): void {
    this.publicacionesFiltradas = this.filtroTema
      ? this.publicacion.filter((p: Publicacion) => p.temaNombre === this.filtroTema)
      : [...this.publicacion];
  }


  darMeGusta(publicacion: Publicacion) {
    if (publicacion.haDadoLike) {
      publicacion.numeroLikes--;
    } else {
      publicacion.numeroLikes++;
    }
    publicacion.haDadoLike = !publicacion.haDadoLike;
  }

  mostrarComentarios(publicacion: Publicacion): void {
    publicacion.mostrarComentarios = !publicacion.mostrarComentarios;
  }

}
