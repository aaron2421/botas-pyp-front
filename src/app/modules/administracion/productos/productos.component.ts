import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./style.scss']
})
export class ProductosComponent{
  @Input() cssClass: '';
  constructor() { }

  toggle(){
    var x = document.getElementById('filters');
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }
}
