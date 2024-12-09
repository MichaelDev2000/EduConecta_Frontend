import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { UsuarioInfoService } from '../../services/usuario-info.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ceditar-perfil',
  templateUrl: './ceditar-perfil.component.html',
  styleUrl: './ceditar-perfil.component.css'
})
export class CeditarPerfilComponent {

  usuario:any;
  usuarioid:string = '';

      
    
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private usuarioInfo : UsuarioInfoService, private userInfo: UsuarioInfoService) {
    this.usuario = this.usuarioInfo.usuarioDatos;
    this.usuarioid = this.userInfo.usuarioDatos.usuId;
  }

  onChangePassword(changePasswordForm: NgForm) {
    if (changePasswordForm.valid) {
      const userId = this.usuarioid; // Este valor puede venir de localStorage o algún otro lugar.
      const newPassword = changePasswordForm.value.newPassword;
      const oldPassword = changePasswordForm.value.oldPassword;
  
      this.authService.updatePassword(userId, newPassword, oldPassword).subscribe(
        (response) => {
          console.log('Contraseña actualizada con éxito:', response);
          alert('Contraseña cambiada con éxito.');
        },
        (error) => {
          console.error('Error al cambiar la contraseña:', error);
          alert('Hubo un error al cambiar la contraseña. Inténtalo de nuevo.');
        }
      );
    }
  }
}
