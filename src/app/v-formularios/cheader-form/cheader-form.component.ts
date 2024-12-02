import { Component } from '@angular/core';

@Component({
  selector: 'app-cheader-form',
  templateUrl: './cheader-form.component.html',
  styleUrl: './cheader-form.component.css'
})
export class CheaderFormComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
