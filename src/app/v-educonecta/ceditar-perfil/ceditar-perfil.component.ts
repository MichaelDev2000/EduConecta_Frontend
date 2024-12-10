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
  UsuarioId:string = '';
  errorMessage: string = '';
  successMessage: string = '';
  

  constructor(private authService: AuthService, private usuarioInfo : UsuarioInfoService, private userInfo: UsuarioInfoService) {
    this.usuario = this.usuarioInfo.usuarioDatos;
    this.UsuarioId = this.userInfo.usuarioDatos.usuId;
  }

  onChangePassword(changePasswordForm: NgForm) {
    if (changePasswordForm.valid) {
      const userId = this.UsuarioId;
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
  onSaveChanges(changeInfoForm: NgForm): void {
    if (changeInfoForm.valid) {
      const  usuNombres = changeInfoForm.value.usuNombres;
      const  usuApellidos = changeInfoForm.value.usuApellidos;
      const  usuBiografia = changeInfoForm.value.usuBiografia;

      this.authService.updateUserInfo(this.UsuarioId, usuNombres, usuApellidos, usuBiografia).subscribe(
          (response:any) => {
            console.log('Información actualizada:', response);
            alert('Información actualizada con éxito.');
          },
          (error:any) => {
            console.log(this.UsuarioId, usuNombres, usuApellidos, usuBiografia);
            console.error('Error al actualizar información:', error);
            alert('Hubo un error al actualizar la información.');
          }
        );
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
