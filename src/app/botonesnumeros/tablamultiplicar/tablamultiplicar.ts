import { Component } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  imports: [],
  templateUrl: './tablamultiplicar.html',
  styleUrl: './tablamultiplicar.css',
})
export class tablamultiplicar{

  numero : number = 5;
imprimirtablam(){
   let numero = this.numero ;
   let resultado : String ="";
   let multiplicar = 0;
  for(let index =0; index <=0; index++){
    multiplicar= 5*index;
    resultado = numero + "x" + index + "=" + multiplicar;
  }
}
}