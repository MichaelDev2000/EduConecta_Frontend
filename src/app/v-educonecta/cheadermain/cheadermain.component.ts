import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UsuarioInfoService } from '../../services/usuario-info.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cheadermain',
  templateUrl: './cheadermain.component.html',
  styleUrls: ['./cheadermain.component.css']
})
export class CheadermainComponent implements OnInit {

  usuario: any;
  usuarios: any[] = []; // Lista de usuarios
  filteredUsuarios: any[] = []; // Lista filtrada de usuarios
  searchText: string = ''; // Texto de búsqueda

  constructor(
    private authService: AuthService,
    private router: Router,
    private userInfo: UsuarioInfoService,
    private http: HttpClient
  ) {
    this.usuario = this.userInfo.usuarioDatos;
  }

  ngOnInit(): void {
    this.getUsuarios(); // Obtén la lista de usuarios al cargar el componente
  }

  // Función para obtener todos los usuarios de la API
  getUsuarios(): void {
    this.http.get<any[]>('http://localhost:8080/ApiUsers/usuarios').subscribe((data) => {
      this.usuarios = data;
      this.filteredUsuarios = data; 
    });
  }

  onSearch(): void {
    if (this.searchText.trim() === '') {
      this.filteredUsuarios = this.usuarios;
    } else {
      this.filteredUsuarios = this.usuarios.filter(usuario =>
        usuario.usuNombre.toLowerCase().includes(this.searchText.toLowerCase()) ||
        usuario.usuApellidos.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
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
