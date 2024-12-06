import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent {
  publicaciones = [
    {
      usuario: 'Juan Pérez',
      usuarioImagen: 'https://randomuser.me/api/portraits/men/1.jpg',
      fecha: new Date(),
      contenido: 'Este es un ejemplo de una publicación interesante.',
      tema: 'Matemáticas',
      likes: 5,
      haDadoLike: false,
      comentarios: [],
      mostrarComentarios: false,
      nuevoComentario: '',
    },
    {
      usuario: 'María López',
      usuarioImagen: 'https://randomuser.me/api/portraits/women/1.jpg',
      fecha: new Date(),
      contenido: 'Me encanta compartir cosas aquí con todos ustedes.',
      tema: 'Ciencias',
      likes: 3,
      haDadoLike: false,
      comentarios: [{ usuario: 'Ana', texto: '¡Qué interesante!' }],
      mostrarComentarios: false,
      nuevoComentario: '',
    },
  ];

  nuevaPublicacion: string = '';
  temaSeleccionado: string = '';
  filtroTema: string = '';
  temas: string[] = ['Matemáticas', 'Ciencias', 'Sociales', 'Tecnología'];
  publicacionesFiltradas = [...this.publicaciones];

  crearPublicacion() {
    if (this.nuevaPublicacion.trim() === '' || this.temaSeleccionado === '') {
      alert('Por favor, escribe algo y selecciona un tema antes de publicar.');
      return;
    }

    const nueva = {
      usuario: 'Tú',
      usuarioImagen: 'https://randomuser.me/api/portraits/lego/1.jpg',
      fecha: new Date(),
      contenido: this.nuevaPublicacion,
      tema: this.temaSeleccionado,
      likes: 0,
      haDadoLike: false,
      comentarios: [],
      mostrarComentarios: false,
      nuevoComentario: '',
    };

    this.publicaciones.unshift(nueva);
    this.filtrarPublicaciones();
    this.nuevaPublicacion = '';
    this.temaSeleccionado = '';
  }

  filtrarPublicaciones() {
    this.publicacionesFiltradas = this.filtroTema
      ? this.publicaciones.filter((p) => p.tema === this.filtroTema)
      : [...this.publicaciones];
  }

  darMeGusta(publicacion: any) {
    if (publicacion.haDadoLike) {
      publicacion.likes--;
    } else {
      publicacion.likes++;
    }
    publicacion.haDadoLike = !publicacion.haDadoLike;
  }

  mostrarComentarios(publicacion: any) {
    publicacion.mostrarComentarios = !publicacion.mostrarComentarios;
  }

  agregarComentario(publicacion: any) {
    if (publicacion.nuevoComentario.trim() !== '') {
      publicacion.comentarios.push({
        usuario: 'Tú',
        texto: publicacion.nuevoComentario,
      });
      publicacion.nuevoComentario = '';
    }
  }
}
