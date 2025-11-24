import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonesnumerosComponente } from './botonesnumeros/botonesnumeros';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BotonesnumerosComponente], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('teclado-numerico');
}