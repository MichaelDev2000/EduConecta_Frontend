import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';  // Agrega AfterViewInit
import { Tema } from '../../../models/tema.model';
import { PostServicesService } from '../../../services/post-services.service';
import { GruposServicesService } from '../../../services/grupos-services.service';
import { crearGrupo } from '../../../models/crearGrupo.model';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent  { // Implementa AfterViewInit



  Temas: Tema[] = [];
  nuevoGrupo: crearGrupo = {
    grupoNombre: '',
    grupoDescripcion: '',
    temaId: {
      temaId: ''
    }
  };
  grupos: any;

  constructor(private postService: PostServicesService, private grupoService: GruposServicesService) { }

  ngOnInit(): void {
    this.obtenerTemas();
    this.obtenerGrupos();
  }


  crearGrupo(): void {
    this.grupoService.crearGrupo(this.nuevoGrupo).subscribe({
      next: (response) => {
        this.obtenerGrupos();
        this.limpiarFormulario(); 
      },
      error: (error: any) => {
        this.obtenerGrupos();
        this.limpiarFormulario(); 
      }
    });
  }

  limpiarFormulario(): void {
    this.nuevoGrupo = {
      grupoNombre: '',
      grupoDescripcion: '',
      temaId: {
        temaId: ''
      }
    };
  }

  obtenerGrupos(): void {
    this.grupoService.obtenerGrupos().subscribe({
      next: (data) => {
        console.log(data);
        this.grupos = data;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  obtenerTemas(): void {
    this.postService.obtenerTemas().subscribe({
      next: (data: Tema[]) => {
        this.Temas = data;
      },
      error: (error: any) => console.log(error)
    });
  }

}
