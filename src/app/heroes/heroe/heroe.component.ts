import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['heroe.component.css']
})
export class HeroesComponent {
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return this.nombre;
    }

    cambiarNombre(): void{
        this.nombre = "Spiderman";
    }

    cambiarEdad(): void{
        this.edad = 20;
    }

}