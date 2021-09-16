import { Component, NgModule } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    
    edad:number = 45;
    nombre?:string = 'Iron Man';

    obtenerNombre():string{
        
        return `Nombre: ${this.nombre} , edad: ${this.edad}`;
    }


    cambiarNombre():void{
        this.nombre = "Spiderman";
    }

    cambiarEdad(){
        this.edad=25;
    }

}