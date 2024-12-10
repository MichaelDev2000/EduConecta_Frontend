import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioInfoService } from '../../services/usuario-info.service';

@Component({
  selector: 'app-cusuario',
  templateUrl: './cusuario.component.html',
  styleUrl: './cusuario.component.css'
})
export class CusuarioComponent {
  usuarioId: string | null = null;
  usuarioData: any;
  publicaciones: any;

  constructor(private route: ActivatedRoute, private usuarioInfoService: UsuarioInfoService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.usuarioId = params.get('id');
      if (this.usuarioId) {
        this.obtenerUsuario(this.usuarioId);
      }
    });
  }

  obtenerUsuario(id: string) {
    this.usuarioInfoService.inforUsuario(id).subscribe(
      (response) => {
        console.log('Datos del usuario:', response);
        this.usuarioData = response;
        this.publicaciones = response.publicaciones;
      },
      (error) => {
        console.error('Error al obtener los datos del usuario', error);
      }
    );
  }
}
