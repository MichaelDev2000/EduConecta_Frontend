import { Component } from '@angular/core';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrl: './grupos.component.css'
})
export class GruposComponent {


  grupos = [
    { id: 1, nombre: 'Grupo 1', descripcion: 'Descripción del grupo 1', imagen: 'grupo1.png' },
    { id: 2, nombre: 'Grupo 2', descripcion: 'Descripción del grupo 2', imagen: 'grupo2.png' },
  ];

  unirseAGrupo(id: number) {
    console.log(`Te has unido al grupo con ID: ${id}`);
  }
}


