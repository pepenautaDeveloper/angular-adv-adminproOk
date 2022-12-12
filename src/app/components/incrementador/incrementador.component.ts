import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {

 

 @Input('valor') progreso: number = 40;



  /* get getPorcentaje() {
    return `${ this.progreso }%`;   
  } */

  cambiarValor ( valor: number ) {

    if ( this.progreso + valor > 100 ) {
      return;
      }
      if ( this.progreso + valor < 0 ) {
      return;
      }
      this.progreso = this.progreso + valor;
      }

      

}
