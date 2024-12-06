import { Component } from '@angular/core';

@Component({
  selector: 'app-ceditar-perfil',
  templateUrl: './ceditar-perfil.component.html',
  styleUrl: './ceditar-perfil.component.css'
})
export class CeditarPerfilComponent {

  perfil = [
    {
      nombre: 'Pepito Pérez',
      foto: 'https://randomuser.me/api/portraits/men/1.jpg',
      rol: 'estudante',
      biografia:`Ubicación:Bogotá,Colombia \n\ncorreo:pepitoperez604@gmail.com \nhola buenas tardes`,
    }
    
  ];
}
