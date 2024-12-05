import { Component } from '@angular/core';

@Component({
  selector: 'app-amistades',
  templateUrl: './amistades.component.html',
  styleUrls: ['./amistades.component.css'],
})
export class AmistadesComponent {
  // Lista de amigos
  amigos = [
    {
      nombre: 'Juan Pérez',
      foto: 'https://randomuser.me/api/portraits/men/1.jpg',
      enLinea: true,
      bio: '¡Siempre dispuesto a ayudar!',
    },
    
    // Puedes agregar más amigos aquí
  ];

  // Función para abrir el chat con un amigo
  abrirChat(amigo: any) {
    console.log('Abriendo chat con:', amigo.nombre);
    // Aquí puedes redirigir a otra página de chat o abrir un modal de chat
    // Por ejemplo: this.router.navigate(['/chat', amigo.id]);
  }
}
