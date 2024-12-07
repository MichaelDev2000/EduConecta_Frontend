import { Component } from '@angular/core';
import { UsuarioInfoService } from '../../services/usuario-info.service';

@Component({
  selector: 'app-cperfil',
  templateUrl: './cperfil.component.html',
  styleUrl: './cperfil.component.css'
})
export class CperfilComponent {

  usuario:any;

    constructor(private usuarioInfo : UsuarioInfoService ){
      this.usuario = this.usuarioInfo.usuarioDatos;
    }
    
    
}
