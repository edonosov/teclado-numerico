import { Component } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  imports: [],
  templateUrl: './tablamultiplicar.html',
  styleUrl: './tablamultiplicar.css',
})
export class tablamultiplicar{

  resultados:string[] = [];
  numero : number = 5;


imprimirtablam(){
   let numero = this.numero ;
   let multiplicar = 0;
   let resultado1;

  for(let index =0; index <=0; index++){
    multiplicar= 5*index;
    resultado1 = "·" + numero + "x" + index + "=" + multiplicar + "·";
    this.resultados.push(resultado1);
  }
}
}