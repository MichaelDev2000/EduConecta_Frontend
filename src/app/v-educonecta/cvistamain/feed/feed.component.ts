import { Component } from '@angular/core';

// Define interfaces para la estructura de la publicación y los comentarios
interface Comentario {
  usuario: string;
  texto: string;
}

interface Publicacion {
  usuario: string;
  usuarioImagen: string;
  fecha: Date;
  contenido: string;
  comentarios: Comentario[];
  mostrarFormularioComentario: boolean; // Controla la visibilidad del formulario de comentarios
  nuevoComentario: string; // Almacena el nuevo comentario para la publicación específica
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent {
  // Lista de publicaciones con el tipo correcto
  publicaciones: Publicacion[] = [
    {
      usuario: 'Juan Pérez',
      usuarioImagen: 'https://randomuser.me/api/portraits/men/1.jpg',
      fecha: new Date(),
      contenido: 'Este es un ejemplo de una publicación interesante.',
      comentarios: [],
      mostrarFormularioComentario: false, // Inicialmente no mostrar el formulario
      nuevoComentario: '', // Campo de comentario vacío inicialmente
    },
    
  ];

  // Modelo para la nueva publicación
  nuevaPublicacion: string = '';

  // Función para crear una nueva publicación
  crearPublicacion() {
    if (this.nuevaPublicacion.trim() === '') {
      alert('Por favor, escribe algo antes de publicar.');
      return;
    }

    const nueva: Publicacion = {
      usuario: 'Tú', // Puedes adaptarlo según la lógica de tu aplicación
      usuarioImagen: 'https://randomuser.me/api/portraits/lego/1.jpg', // Imagen genérica
      fecha: new Date(),
      contenido: this.nuevaPublicacion,
      comentarios: [],
      mostrarFormularioComentario: false,
      nuevoComentario: '',
    };

    this.publicaciones.unshift(nueva); // Añade la publicación al inicio del array
    this.nuevaPublicacion = ''; // Limpia el campo de texto
  }

  // Función para agregar un comentario a una publicación
  agregarComentario(publicacion: Publicacion) {
    if (publicacion.nuevoComentario.trim() === '') {
      alert('Por favor, escribe un comentario.');
      return;
    }

    // Agregar comentario a la publicación específica
    publicacion.comentarios.push({
      usuario: 'Tú', // Usuario que comenta
      texto: publicacion.nuevoComentario, // Texto del comentario
    });

    // Limpiar el campo de comentario
    publicacion.nuevoComentario = ''; // Limpiar el campo de comentario después de agregarlo
    publicacion.mostrarFormularioComentario = false; // Ocultar el formulario de comentarios después de enviar
  }

  // Función para mostrar el formulario de comentario
  showCommentInput(publicacion: Publicacion) {
    publicacion.mostrarFormularioComentario = !publicacion.mostrarFormularioComentario; // Alternar la visibilidad del formulario
  }
}
