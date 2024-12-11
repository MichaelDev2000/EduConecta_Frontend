import { Component, OnInit } from '@angular/core';
import { UsuarioInfoService } from '../../services/usuario-info.service';

@Component({
  selector: 'app-cperfil',
  templateUrl: './cperfil.component.html',
  styleUrls: ['./cperfil.component.css']
})
export class CperfilComponent implements OnInit {
  usuario: any; 
  publicaciones: any[] = []; 

  constructor(private usuarioInfo: UsuarioInfoService) { }

  ngOnInit(): void {
    const usuarioId = this.usuarioInfo.usuarioDatos.usuId; 


    this.usuarioInfo.inforUsuario(usuarioId).subscribe(data => {
      this.usuario = {
        nombre: data.usuNombres,
        apellidos: data.usuApellidos,
        correo: data.usuCorreo,
        biografia: data.usuBiografia,
        imagenPerfil: data.usuImgperfil
      };

      this.publicaciones = data.publicaciones;
    });
  }
}
