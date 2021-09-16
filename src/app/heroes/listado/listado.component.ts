import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes:string[] =["Iron Man","Wolverine","Profesor X","Doctor Strange"];
  heroeEliminado:any="";

  borrarHeroe(){
    this.heroeEliminado = this.heroes.pop();
    console.log("Heroes borado: " +this.heroeEliminado);
    this.imprimirHeroeEliminado(this.heroeEliminado);
  }

  imprimirHeroeEliminado(valorEliminado:string):void{
    this.heroeEliminado = valorEliminado;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
