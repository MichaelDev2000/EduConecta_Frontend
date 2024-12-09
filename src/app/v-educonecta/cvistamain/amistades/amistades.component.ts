import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amistades',
  templateUrl: './amistades.component.html',
  styleUrls: ['./amistades.component.css'],
})
export class AmistadesComponent {
constructor(private router: Router){}
// Lista de amigos
  irAUsuario(id: string) {
    this.router.navigate([`/educonecta/usuario/${id}`]);
  }
}
