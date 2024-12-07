import { Component } from '@angular/core';

@Component({
  selector: 'app-cheadermain',
  templateUrl: './cheadermain.component.html',
  styleUrl: './cheadermain.component.css'
})
export class CheadermainComponent {
  menuAbierto = false;

  menu(): void{
    this.menuAbierto = !this.menuAbierto;
  }
}
