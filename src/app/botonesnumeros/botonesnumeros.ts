import { Component } from '@angular/core';

@Component({
  selector: 'app-botonesnumeros',
  templateUrl: './botonesnumeros.html',
  styleUrl: './botonesnumeros.css'
})
export class BotonesnumerosComponent {
  numeroActual: string = ''
   mostrarFactorial: boolean = false;
  resultadoFactorial: number = 0;

  agregarNumero(numero: number): void {
    this.numeroActual += numero.toString();
  }

  esPar(): boolean {
    if (this.numeroActual === '') return false;
    const numero = parseInt(this.numeroActual);
    return numero % 2 === 0;
  }

  limpiar(): void {
    this.numeroActual = '';
  }

  generarAleatorio(): void {
    // Genera un número aleatorio entre 0 y 99. La justificacion es que me hace mas gracia que haya más espacio para la aleatoriedad ksjjsjs
    const numeroAleatorio = Math.floor(Math.random() * 100);
    this.numeroActual = numeroAleatorio.toString();
  }

  getNumeroActual(): number {
    if (this.numeroActual === '') return 0;
    return parseInt(this.numeroActual);
  }

   sumarUno(): void {
    const numero = this.getNumeroActual();
    this.numeroActual = (numero + 1).toString();
  }

  restarUno(): void {
    const numero = this.getNumeroActual();
    if (numero > 0) {
      this.numeroActual = (numero - 1).toString();
    }
  }

  calcularFactorial(): void {
    const numero = this.getNumeroActual();
    this.resultadoFactorial = this.calcularFactorialNumero(numero);
    this.mostrarFactorial = true;
  }

  calcularFactorialNumero(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }

}