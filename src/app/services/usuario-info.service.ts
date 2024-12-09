import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioInfoService {
  readonly userInfo = localStorage.getItem('user');
  parsedUser = this.userInfo ? JSON.parse(this.userInfo) : null;
  usuarioDatos = {
    "usuId":this.parsedUser.usuarioId,
    "usuCorreo":this.parsedUser.usuCorreo,
    "usuNombre": this.parsedUser.usuNombres,
    "usuApellidos": this.parsedUser.usuApellidos,
    "usuBiografia": this.parsedUser.usuBiografia,
    "usuImgperfil": this.parsedUser.usuImgperfil,
  }
  constructor() { }
}
