import { Component } from '@angular/core';

@Component({
  selector: 'app-cheader',
  templateUrl: './cheader.component.html',
  styleUrl: './cheader.component.css'
})
export class CheaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
