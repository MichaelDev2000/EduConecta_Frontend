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

  constructor(private authService: AuthService, private router: Router) {}

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
    } else {
      this.errorMessage = 'Por favor completa todos los campos correctamente.';
    }
  }

  onRegister(registerForm: NgForm) {
    if (registerForm.valid) {
      const formData = registerForm.value;
      console.log('Formulario de Registro:', formData);
      // Aquí iría la lógica para el registro, como hacer una solicitud HTTP al backend
    } else {
      this.errorMessage = 'Por favor completa todos los campos correctamente.';
    }
  }

  onForgotPassword(forgotPasswordForm: NgForm) {
    if (forgotPasswordForm.valid) {
      console.log('Formulario de Recuperación de Contraseña:', forgotPasswordForm.value);
      // Aquí iría la lógica para la recuperación de contraseña
    } else {
      this.errorMessage = 'Por favor completa el campo de correo correctamente.';
    }
  }
}
