import { Component } from '@angular/core';

@Component({
  selector: 'app-cchats',
  templateUrl: './cchats.component.html',
  styleUrls: ['./cchats.component.css']
})
export class CchatsComponent {
  amigos = [
    {
      nombre: 'Alice',
      foto: 'https://placehold.co/100x100/ffa8e4/ffffff.png?text=A',
      enLinea: true,
      bio: 'Amante de los gatos y los libros',
      mensajes: [
        { texto: 'Hola, ¿cómo estás?', propio: false },
        { texto: 'Todo bien, ¿y tú?', propio: true }
      ]
    },
    {
      nombre: 'Martin',
      foto: 'https://placehold.co/100x100/ad922e/ffffff.png?text=M',
      enLinea: false,
      bio: 'Pizza lover. A veces programo.',
      mensajes: [
        { texto: '¿Qué tal el proyecto?', propio: false },
        { texto: 'Avanzando bien. ¿Tú cómo vas?', propio: true }
      ]
    }
  ];

  amigoSeleccionado: any = null;
  nuevoMensaje: string = '';

  seleccionarAmigo(amigo: any) {
    this.amigoSeleccionado = amigo;
  }

  enviarMensaje() {
    if (this.nuevoMensaje.trim() && this.amigoSeleccionado) {
      this.amigoSeleccionado.mensajes.push({
        texto: this.nuevoMensaje,
        propio: true
      });
      this.nuevoMensaje = '';
    }
  }

  agregarAmigos() {
    alert('Función para agregar amigos aún en desarrollo.');
  }
}
