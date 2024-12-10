import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UsuarioInfoService } from '../../services/usuario-info.service';


@Component({
  selector: 'app-cheadermain',
  templateUrl: './cheadermain.component.html',
  styleUrls: ['./cheadermain.component.css']
})
export class CheadermainComponent implements OnInit {
  showUsuarios = false; // Controla si se muestra el menú de usuarios

  usuario: any;
  usuarios: any[] = [];
  filteredUsuarios: any[] = [];
  searchText: string = '';

  // Referencia para el input de búsqueda y el contenedor del menú de usuarios
  inputElement: HTMLElement | null = null;
  menuElement: HTMLElement | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userInfo: UsuarioInfoService
  ) {
    this.usuario = this.userInfo.usuarioDatos;
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  // Para manejar la apertura y cierre del menú
  toggleUsuarios(): void {
    this.showUsuarios = !this.showUsuarios;
  }

  // Función para obtener todos los usuarios de la API
  getUsuarios(): void {
    this.userInfo.listarUsuario().subscribe((data) => {
      this.usuarios = data;
      this.filteredUsuarios = data;
    });
  }

  onSearch(): void {
    if (this.searchText.trim() === '') {
      this.filteredUsuarios = this.usuarios;
    } else {
      console.log(this.searchText.toLowerCase());
      this.filteredUsuarios = this.usuarios.filter(usuario =>
        (usuario.usuNombres && usuario.usuNombres.toLowerCase().includes(this.searchText.toLowerCase())) ||
        (usuario.usuApellidos && usuario.usuApellidos.toLowerCase().includes(this.searchText.toLowerCase()))
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

  // Detectar clics fuera del menú o del input
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const usuariosMenu = document.getElementById('usuariosMenu');
    const inputElement = document.getElementById('searchInput');

    // Si el clic está fuera del menú y fuera del input, cerrar el menú
    if (usuariosMenu && !usuariosMenu.contains(event.target as Node) && inputElement && !inputElement.contains(event.target as Node)) {
      this.showUsuarios = false;
    }
  }

  irAUsuario(id: string) {
    this.router.navigate([`/educonecta/usuario/${id}`]);
  }
}
