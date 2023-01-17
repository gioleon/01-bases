import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-mainPage',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  personaje: Personaje = {
    nombre: '',
  };

  agregarNuevoPersonaje(event: Personaje) {
    this.dbzService.agregarPersonaje(event);
  }

  constructor(private dbzService: DbzService) {}
}
