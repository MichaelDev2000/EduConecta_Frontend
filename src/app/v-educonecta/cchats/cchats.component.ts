import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Asegúrate de importar el Router
import { UsuarioInfoService } from '../../services/usuario-info.service';

@Component({
  selector: 'app-cchats',
  templateUrl: './cchats.component.html',
  styleUrls: ['./cchats.component.css']
})
export class CchatsComponent implements OnInit {
  amigos: any[] = [];  // Lista de amigos
  amigoSeleccionado: any = null;
  nuevoMensaje: string = '';

  constructor(
    private usuarioInfoService: UsuarioInfoService,
    private router: Router  // Inyectar Router
  ) { }

  ngOnInit() {
    const usuarioId = JSON.parse(localStorage.getItem('user') || '{}').usuarioId;
    this.usuarioInfoService.listarAmigos(usuarioId).subscribe(
      (data) => {
        this.amigos = data;  // Asigna los amigos obtenidos
      },
      (error) => {
        console.error('Error al obtener amigos:', error);
      }
    );
  }

  // Cambiar esta función para navegar a la ruta del chat con el amigo seleccionado
  seleccionarAmigo(amigo: any) {
    this.amigoSeleccionado = amigo;
    this.router.navigate([`/educonecta/chat/${amigo.usuarioId}`]);  // Navegar al chat del amigo
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
}
