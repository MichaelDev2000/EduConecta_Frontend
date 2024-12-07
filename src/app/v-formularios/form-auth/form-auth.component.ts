import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrl: './form-auth.component.css'
})
export class FormAuthComponent {
  activeForm: string = 'login';
  errorMessage = '';


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

          // Guardar el token y el usuario en localStorage
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.usuario)); // Convertir el objeto a JSON

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

}
