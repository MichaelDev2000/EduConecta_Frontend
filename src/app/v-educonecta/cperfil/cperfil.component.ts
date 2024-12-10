import { Component, OnInit } from '@angular/core';
import { UsuarioInfoService } from '../../services/usuario-info.service';

@Component({
  selector: 'app-cperfil',
  templateUrl: './cperfil.component.html',
  styleUrls: ['./cperfil.component.css']
})
export class CperfilComponent implements OnInit {
  usuario: any; // Información del usuario
  publicaciones: any[] = []; // Lista de publicaciones del usuario

  constructor(private usuarioInfo: UsuarioInfoService) { }

  ngOnInit(): void {
    const usuarioId = this.usuarioInfo.usuarioDatos.usuId; // Obtener el usuarioId desde los datos del servicio

    // Llamar al método 'inforUsuario' para obtener los detalles del usuario
    this.usuarioInfo.inforUsuario(usuarioId).subscribe(data => {
      // Asignar la información del usuario
      this.usuario = {
        nombre: data.usuNombres,
        apellidos: data.usuApellidos,
        correo: data.usuCorreo,
        biografia: data.usuBiografia,
        imagenPerfil: data.usuImgperfil
      };

      // Asignar las publicaciones del usuario
      this.publicaciones = data.publicaciones;
    });
  }
}
