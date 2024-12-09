import { Component, OnInit } from '@angular/core';
import { PostServicesService } from '../../../services/post-services.service';
import { Publicacion } from '../../../models/publicacion.model';
import { Tema } from '../../../models/tema.model';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {

  temas: Tema[] = [];  
  publicacion: Publicacion[] = [];
  publicacionesFiltradas: Publicacion[] = [];
  nuevaPublicacion: string = '';
  temaSeleccionado: string = '';
  filtroTema: string = '';

  constructor(private postService: PostServicesService) { }

  ngOnInit(): void {
    this.obtenerPosts();
    this.obtenerTemas();  
  }

  // Obtener las publicaciones
  obtenerPosts(): void {
    this.postService.obtenerPost().subscribe({
      next: (data: Publicacion[]) => {
        this.publicacion = data;
        this.publicacionesFiltradas = [...this.publicacion];
      },
      error: (error: any) => console.log(error),
      complete: () => {
        console.log("Se completó exitosamente");
      }
    });
  }

  // Obtener los temas
  obtenerTemas(): void {
    this.postService.obtenerTemas().subscribe({
      next: (data: Tema[]) => {  
        this.temas = data;
        console.log(this.temas);
      },
      error: (error: any) => console.log(error)
    });
  }

  // Filtrar publicaciones por tema
  filtrarPublicaciones(): void {
    this.publicacionesFiltradas = this.filtroTema
      ? this.publicacion.filter((p: Publicacion) => p.temaNombre === this.filtroTema)
      : [...this.publicacion];
  }

  // Crear una nueva publicación
  crearPublicacion() {
    if (this.nuevaPublicacion.trim() === '' || this.temaSeleccionado === '') {
      alert('Por favor, escribe algo y selecciona un tema antes de publicar.');
      return;
    }


    this.filtrarPublicaciones();
    this.nuevaPublicacion = '';
    this.temaSeleccionado = '';
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
