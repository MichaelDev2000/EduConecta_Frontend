import { Component } from '@angular/core';

@Component({
  selector: 'app-cperfil',
  templateUrl: './cperfil.component.html',
  styleUrl: './cperfil.component.css'
})
export class CperfilComponent {
    // Lista de perfil
    perfil = [
      {
        nombre: 'Pepito Pérez',
        foto: 'https://randomuser.me/api/portraits/men/1.jpg',
        rol: 'estudante',
        biografia:`Ubicación:Bogotá,Colombia \n\ncorreo:pepitoperez604@gmail.com \nhola buenas tardes`,
      }
      
      // Puedes agregar más amigos aquí
    ];
    
  
    // Función para abrir el chat con un amigo
    abrirChat(amigo: any) {
      console.log('Abriendo chat con:', amigo.nombre);
      // Aquí puedes redirigir a otra página de chat o abrir un modal de chat
      // Por ejemplo: this.router.navigate(['/chat', amigo.id]);
    }
}
