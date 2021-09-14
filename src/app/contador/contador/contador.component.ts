import { Component } from "@angular/core";

@Component({
    selector: 'contador-component',
    template: `
    <h1>{{titulo}}</h1>

    <h3>La Base es: <input type="number" class="base" (change)="obtieneBase()" value="0"></h3>
    
    <button (click)="sumarUno()">Sumar base +</button>
    <h3>{{numero}}</h3>
    <button (click)="restarUno()">Restar base -</button>
    `
})
export class ContadorComponent{
    
    titulo:string = 'Contador App';
    numero:number = 0;
    base:number = 0;
  
    obtieneBase(){
      let elemento:any = document.getElementsByClassName('base');
      this.base =  parseInt(elemento[0].value);
    }
    
    sumarUno() {
  
      this.numero = this.numero + this.base;
    }
  
    restarUno() {
      this.numero = this.numero - this.base;
    }

}