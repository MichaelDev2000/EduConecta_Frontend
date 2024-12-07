import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { VEduconectaComponent } from '../v-educonecta.component';
import { UsuarioInfoService } from '../../services/usuario-info.service';


@Component({
  selector: 'app-cheadermain',
  templateUrl: './cheadermain.component.html',
  styleUrl: './cheadermain.component.css'
})
export class CheadermainComponent {

  usuario: any;

  constructor(private authService: AuthService, private router: Router, private userInfo: UsuarioInfoService) {
    this.usuario = this.userInfo.usuarioDatos;
  }



  menuAbierto = false;

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  menu(): void {
    this.menuAbierto = !this.menuAbierto;
  }
}
