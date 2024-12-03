import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent {
  // Lista de publicaciones
  publicaciones = [
    {
      usuario: 'Juan Pérez',
      usuarioImagen: 'https://randomuser.me/api/portraits/men/1.jpg',
      fecha: new Date(),
      contenido: 'Este es un ejemplo de una publicación interesante.',
    },
    {
      usuario: 'María López',
      usuarioImagen: 'https://randomuser.me/api/portraits/women/1.jpg',
      fecha: new Date(),
      contenido: 'Me encanta compartir cosas aquí con todos ustedes.',
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

    const nueva = {
      usuario: 'Tú', // Puedes adaptarlo según la lógica de tu aplicación
      usuarioImagen: 'https://randomuser.me/api/portraits/lego/1.jpg', // Imagen genérica
      fecha: new Date(),
      contenido: this.nuevaPublicacion,
    };

    this.publicaciones.unshift(nueva); // Añade la publicación al inicio del array
    this.nuevaPublicacion = ''; // Limpia el campo de texto
  }
}
