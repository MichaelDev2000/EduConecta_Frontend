import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Ajusta la ruta si es necesario
import { UsuarioInfoService } from '../../../services/usuario-info.service';

@Component({
  selector: 'app-amistades',
  templateUrl: './amistades.component.html',
  styleUrls: ['./amistades.component.css'],
})
export class AmistadesComponent implements OnInit {
  amigos: any[] = []; // Lista de amigos
  loading: boolean = true;

  constructor(private router: Router, private usuarioInfo: UsuarioInfoService) {}

  ngOnInit(): void {
    const usuarioId = this.usuarioInfo.usuarioDatos.usuId;
    this.usuarioInfo.listarAmigos(usuarioId).subscribe({
      next: (data) => {
        this.amigos = data; 
        this.loading = false; 
      },
      error: (err) => {
        console.error('Error al obtener amigos', err);
        this.loading = false;
      }
    });
  }

  irAUsuario(id: string) {
    this.router.navigate([`/educonecta/usuario/${id}`]);
  }
  irAChat(id: string) {
    this.router.navigate([`/educonecta/chat/${id}`]);
  }
}
