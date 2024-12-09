import { Component } from '@angular/core';
import { Tema } from '../../../models/tema.model';
import { PostServicesService } from '../../../services/post-services.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrl: './grupos.component.css'
})
export class GruposComponent {

  Temas: Tema[] = [];
  constructor(private postService: PostServicesService) { }

  ngOnInit(): void {
    this.obtenerTemas();
  }

  obtenerTemas(): void {
    this.postService.obtenerTemas().subscribe({
      next: (data: Tema[]) => {
        this.Temas = data;
        console.log(this.Temas);
      },
      error: (error: any) => console.log(error)
    });
  }


}


