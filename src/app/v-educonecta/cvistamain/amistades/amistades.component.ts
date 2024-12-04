import { Component } from '@angular/core';

@Component({
  selector: 'app-amistades',
  templateUrl: './amistades.component.html',
  styleUrl: './amistades.component.css'
})
export class AmistadesComponent {
  amigos = [
    {
      nombre: 'Juan Pérez',
      foto: 'https://via.placeholder.com/150',
      enLinea: true,
      bio: 'Amante de la tecnología y los videojuegos. 📱🎮'
    },
    {
      nombre: 'María López',
      foto: 'https://via.placeholder.com/150',
      enLinea: false,
      bio: 'Me encanta leer y escribir poesía. 📚🖋️'
    },
    {
      nombre: 'Carlos García',
      foto: 'https://via.placeholder.com/150',
      enLinea: true,
      bio: 'Aficionado al fútbol y los deportes. ⚽🏀'
    },
  ];
}
