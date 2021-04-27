import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tipo-materia-prima',
  templateUrl: './tipo-materia-prima.component.html',
  styleUrls: ['./style.scss']
})
export class TipoMateriaPrimaComponent implements OnInit {
  @Input() cssClass: '';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openLarge(content) {
    this.modalService.open(content, {
        size: 'md'
    });
  }
  
  // Agregar funcion de guardar
  guardar(){
    alert('guardado');
  }

  // Agregar funcion de editar
  editar(){
    alert('editado');
  }

  // Agregar funcion de eliminar
  eliminar(){
    alert('eliminado');
  }

}
