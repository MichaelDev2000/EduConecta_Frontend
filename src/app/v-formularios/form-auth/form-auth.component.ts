import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.css']
})
export class FormAuthComponent {
  activeForm: string = 'login';
  errorMessage = '';
  message: string = '';
  alertType: string = '';
  alertMessage: string = '';
  ErrorAuthGoogle: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  showLoginForm() {
    this.activeForm = 'login';
  }

  showRegisterForm() {
    this.activeForm = 'register';
  }

  showForgotPasswordForm() {
    this.activeForm = 'forgotPassword';
  }

  onLogin(loginForm: NgForm) {
    if (loginForm.valid) {
      const email = loginForm.value.email;
      const password = loginForm.value.password;

      this.authService.login(email, password).subscribe(
        (response) => {
          console.log('Login exitoso', response);
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.usuario));
          this.router.navigate(['/educonecta']);  
          alert('Inicio de sesión exitoso');
        },
        (error) => {
          console.error('Error al iniciar sesión', error);
          this.errorMessage = 'Credenciales inválidas. Inténtalo de nuevo.';
        }
      );
    }
  }

  user = {
    usuNombres: '',
    usuApellidos: '',
    usuCorreo: '',
    usuContrasena: '',
    usuBiografia: '',
    usuStatus: 1,
  };

  register() {
    if (!this.user.usuNombres || !this.user.usuApellidos || !this.user.usuCorreo || !this.user.usuContrasena || !this.user.usuBiografia) {
      this.alertType = 'warning';
      this.alertMessage = 'Todos los campos son obligatorios.';
      return;
    }

    this.authService.register(this.user).subscribe({
      next: (response) => {
        console.log(this.user);
        console.log(response.ok);
        if (response.status === 201) {
          this.alertType = 'success';
          this.alertMessage = 'El usuario ha sido creado satisfactoriamente.';
          this.router.navigate(['/educonecta']); 
        } else if (response.status === 409) { 
          this.alertType = 'error';
          this.alertMessage = 'El usuario ya existe.';
        }
      },
      error: (error) => {
        console.error('Error en el registro:', error);
        this.alertType = 'error';
        if (error.status === 0) {
          this.alertMessage = 'No se pudo conectar al servidor.';
        } else {
          this.alertMessage = `Error inesperado: ${error.statusText}`;
        }
      }
    });
  }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle().then((result) => {
      this.router.navigate(['/educonecta']);  
    }).catch((error) => {
      console.error("error al autenticar: ", error);
    });
  }
}