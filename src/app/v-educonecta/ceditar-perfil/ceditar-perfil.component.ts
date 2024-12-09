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

      
    
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private usuarioInfo : UsuarioInfoService) {
    this.usuario = this.usuarioInfo.usuarioDatos;
  }

  onChangePassword(changePasswordForm: NgForm) {
    if (changePasswordForm.valid) {
      const currentPassword = changePasswordForm.value.currentPassword;
      const newPassword = changePasswordForm.value.newPassword;
      const confirmPassword = changePasswordForm.value.confirmPassword;

      if (newPassword !== confirmPassword) {
        this.errorMessage = 'Las contraseñas no coinciden.';
        return;
      }

      this.authService.changePassword(currentPassword, newPassword, confirmPassword).subscribe(
        (response) => {
          this.successMessage = 'Contraseña cambiada con éxito.';
          this.errorMessage = '';
          changePasswordForm.reset();
        },
        (error) => {
          console.error('Error al cambiar contraseña:', error);
          this.errorMessage = 'Error al cambiar contraseña. Intenta de nuevo.';
        }
      );
    }
  }
}
