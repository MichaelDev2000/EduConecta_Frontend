import { Component } from '@angular/core';

@Component({
  selector: 'app-cusuario',
  templateUrl: './cusuario.component.html',
  styleUrl: './cusuario.component.css'
})
export class CusuarioComponent {

  perfil = [
    {
      nombre: 'Rosa Melano',
      foto: 'https://randomuser.me/api/portraits/men/1.jpg',
      rol: 'Mentor',
      biografia:`Ubicación:Bogotá,Colombia \n\ncorreo:rosamelano604@gmail.com \nhola buenas tardes`,
    }
    
  ];
}
