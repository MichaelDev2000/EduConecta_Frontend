import { Component } from '@angular/core';

@Component({
  selector: 'app-cgrupos',
  templateUrl: './cgrupos.component.html',
  styleUrls: ['./cgrupos.component.css']
})
export class CgruposComponent {
  nuevaPublicacion: string = '';
  temaSeleccionado: string = '';
  publicaciones: any[] = [];
  miembrosDelGrupo: any[] = [
    { nombre: 'Miembro 1', estado: 'En línea', imagen: 'image-placeholder.png' },
    { nombre: 'Miembro 2', estado: 'En línea', imagen: 'image-placeholder.png' },
    { nombre: 'Miembro 3', estado: 'Desconectado', imagen: 'image-placeholder.png' },
    { nombre: 'Miembro 3', estado: 'Desconectado', imagen: 'image-placeholder.png' }
  ];

  // Método para agregar publicaciones
  crearPublicacion() {
    if (this.nuevaPublicacion && this.temaSeleccionado) {
      const nuevaPub = {
        usuarioImagen: 'default-avatar.png',
        usuarioNombre: 'Nuevo Usuario',
        contenido: this.nuevaPublicacion,
        creadoEn: new Date(),
        temaNombre: this.temaSeleccionado,
        grupoNombre: 'Grupo de Ejemplo',
        grupoDescripcion: 'Descripción del grupo de ejemplo.',
        haDadoLike: false,
        numeroLikes: 0,
        comentarios: [],
        mostrarComentarios: false,
        nuevoComentario: ''
      };
      this.publicaciones.push(nuevaPub);
      this.nuevaPublicacion = '';
      this.temaSeleccionado = '';
    }
  }

  // Método para dar "me gusta" o quitarlo
  darMeGusta(publicacion: any) {
    publicacion.haDadoLike = !publicacion.haDadoLike;
    publicacion.numeroLikes += publicacion.haDadoLike ? 1 : -1;
  }

  // Mostrar/ocultar comentarios
  mostrarComentarios(publicacion: any) {
    publicacion.mostrarComentarios = !publicacion.mostrarComentarios;
  }
}
