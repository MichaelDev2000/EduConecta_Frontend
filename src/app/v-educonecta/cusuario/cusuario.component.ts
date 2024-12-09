import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cusuario',
  templateUrl: './cusuario.component.html',
  styleUrl: './cusuario.component.css'
})
export class CusuarioComponent {
  usuarioId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.usuarioId = params.get('id');
      if (this.usuarioId) {
        this.obtenerUsuario(this.usuarioId);
      }
    });
  }

  obtenerUsuario(id: string) {
    console.log(`Consultando usuario con id: ${id}`);
  }

}
