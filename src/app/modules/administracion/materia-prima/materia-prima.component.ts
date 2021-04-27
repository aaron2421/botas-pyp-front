import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-materia-prima',
  templateUrl: './materia-prima.component.html'
})
export class MateriaPrimaComponent {
  @Input() cssClass: '';

  constructor() { }

}
