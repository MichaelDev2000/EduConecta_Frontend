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
export class GruposComponent implements AfterViewInit { // Implementa AfterViewInit

  @ViewChild('modalCrearGrupo') modalCrearGrupo!: ElementRef;  // Usa "!" para indicar que se inicializa más tarde

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

  ngAfterViewInit(): void {
    console.log(this.modalCrearGrupo);
  }

  crearGrupo(): void {
    this.grupoService.crearGrupo(this.nuevoGrupo).subscribe({
      next: (response) => {
        console.log('Grupo creado:', response);
        this.obtenerGrupos();
        this.limpiarFormulario();
        this.cerrarModal(); 
      },
      error: (error: any) => {
        console.error('Error al crear el grupo:', error);
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

  cerrarModal(): void {
    this.modalCrearGrupo.nativeElement.classList.add('hidden');
  }
}
