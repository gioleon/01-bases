import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
    heroes: string[] = ['Spiderman', 'Ironman', 'Hulk'];
    heroeDeleted?: string;

    borrarHeroe(index: number){
      this.heroeDeleted = this.heroes[index];
      this.heroes.splice(index, 1);
    }
}
