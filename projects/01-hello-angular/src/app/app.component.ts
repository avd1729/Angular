import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <ol> 
    <li> Interstellar </li>
    <li> Pirates of the Carribean : The curse of Black Pearl </li>
    <li> Avengers : Infinity War </li>
    </ol>
  `,
  styles: ``,
})
export class AppComponent {}
