import { Component } from '@angular/core';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrl: './form-auth.component.css'
})
export class FormAuthComponent {
  activeForm: string = 'login'; // Determina el formulario activo

  showLoginForm() {
    this.activeForm = 'login';
  }

  showRegisterForm() {
    this.activeForm = 'register';
  }

  showForgotPasswordForm() {
    this.activeForm = 'forgotPassword';
  }
}
