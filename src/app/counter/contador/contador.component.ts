import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <h3>La base del contador es: <strong>{{ base }}</strong></h3>
        <button (click)="acumulate(base)">+ {{ base }}</button>
        <span>{{ number }}</span>
        <button (click)="acumulate(-base)">- {{ base }}</button>
    `
})
export class ContadorComponent {
    public title: string = 'bases';
    public number: number = 0;
    public base: number = 5;
  
    acumulate(value: number){
      this.number += value;
    }
}