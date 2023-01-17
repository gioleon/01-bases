import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() personaje: Personaje = {
    nombre: '',
  };

  constructor(private dbzService: DbzService){}

  // Evento para emitir el valor enviado desde el formulario
  // @Output() OnNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.personaje.nombre.trim().length === 0) {
      return;
    } else {
      if (this.personaje.poder == undefined) {
        this.personaje.poder = 0;
      }
    }

    this.dbzService.agregarPersonaje(this.personaje);


    // Enviando el de los datos pasados desde el formulario
    // hacia el padre
    //this.OnNewCharacter.emit(this.personaje);

    this.personaje = {
      nombre: '',
    };
  }
}
