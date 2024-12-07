import { Component } from '@angular/core';

@Component({
  selector: 'app-cheadermain',
  templateUrl: './cheadermain.component.html',
  styleUrl: './cheadermain.component.css'
})
export class CheadermainComponent {
  //menu perfil
  menuAbierto = false;

  menu(): void{
    this.menuAbierto = !this.menuAbierto;
  }
}
