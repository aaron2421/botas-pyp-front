import { Component, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./style.scss']
})
export class UsuariosComponent{
  @Input() cssClass: '';

  constructor(private modalService: NgbModal) { }
  
  // Modal
  openLarge(content) {
    this.modalService.open(content, {
        size: 'lg'
    });
  }
  
  // Agregar funcionalidad guardar
  guardar(){
    alert("Guardado");
  }

  cancelEdit(){
    // this.obtenerDatosGeneralesEdit();
    var x = document.getElementById('editUser');
    var y = document.getElementById('defUsuarios');
    if (y.style.display === "none") {
      y.style.display = "flex";
      x.style.display = "none";
    } else {
      y.style.display = "none";
    }
  
    // this.clearFields();
  }

  cancelCreate(){
    var x = document.getElementById('createUser');
    var y = document.getElementById('defUsuarios');
    if (y.style.display === "none") {
      y.style.display = "flex";
      x.style.display = "none";
    } else {
      y.style.display = "none";
    }
  
    // this.clearFields();
  }

  toggleEdit(){
    var x = document.getElementById('editUser');
    var y = document.getElementById('defUsuarios');
    if (x.style.display === "none") {
      x.style.display = "inline";
      y.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

  toggleCreate(){
    var x = document.getElementById('createUser');
    var y = document.getElementById('defUsuarios');
    if (x.style.display === "none") {
      x.style.display = "inline";
      y.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

  obtenerDatosGenerales(){
    var index, sinfo, s;

    var nombre = <HTMLInputElement> document.getElementById('nombre');
    var apellido = <HTMLInputElement> document.getElementById('apellido');
    var correo = <HTMLInputElement> document.getElementById('correo');
    var celular = <HTMLInputElement> document.getElementById('celular');
    var username = <HTMLInputElement> document.getElementById('username');
    var contra = <HTMLInputElement> document.getElementById('contra');
    var confirm_contra = <HTMLInputElement> document.getElementById('confirm_contra');
    // Selects
    var pt2 = document.getElementById('pt2');
    s = <HTMLSelectElement> pt2.getElementsByClassName("form-select");
    
    for (index = 0; index < s.length; ++index) {
      // index 0 -> editRol
      // index 1 -> editPlaza
      // index 2 -> editEstatus
      sinfo = s[index].value;
      console.log(s[index][sinfo].text)
    }
  }

  obtenerDatosGeneralesEdit(){
    var index, sinfo, s;

    var editNombre = <HTMLInputElement> document.getElementById('editNombre');
    var editApellido = <HTMLInputElement> document.getElementById('editApellido');
    var editCorreo = <HTMLInputElement> document.getElementById('editCorreo');
    var editCelular = <HTMLInputElement> document.getElementById('editCelular');
    var editUsername = <HTMLInputElement> document.getElementById('editUsername');
    var editContra = <HTMLInputElement> document.getElementById('editContra');
    var editConfirm_contra = <HTMLInputElement> document.getElementById('editConfirm_contra');
    // Selects
    var pt2 = document.getElementById('pt2');
    s = <HTMLSelectElement> pt2.getElementsByClassName("form-select");
    
    for (index = 0; index < s.length; ++index) {
      // index 0 -> editRol
      // index 1 -> editPlaza
      // index 2 -> editEstatus
      sinfo = s[index].value;
      console.log(s[index][sinfo].text)
    }
    
    // console.log(editNombre.value);
    // console.log(editApellido.value);
    // console.log(editCorreo.value);
    // console.log(editCelular.value);
    // console.log(editRol);
    // console.log(editPlaza);
    // console.log(editEstatus);
    // console.log(editUsername.value);
    // console.log(editContra.value);
    // console.log(editConfirm_contra.value);
  }

  agregarProceso(){
    // Contenedor donde se van a insertar los elementos
    var procesos = document.getElementById('procesos');

    //Contenedor principal 
    var containerProcesos = document.createElement('div');
    containerProcesos.className = "proceso";
    containerProcesos.style.display = "flex";
    containerProcesos.style.alignItems = "flex-end";
    containerProcesos.style.width = "60%";
    containerProcesos.style.margin = "2% 0% 1% 5% ";

    // Div de proceso (contiene label y select)
    var divProceso = document.createElement('div');
    divProceso.style.width = "60%";
    divProceso.style.marginRight = "20px";
    // label proceso
    var labelProceso = document.createElement('h5');
    labelProceso.innerText = 'Proceso';
    // select proceso
    var selectProceso = document.createElement('select');
    selectProceso.style.width = "100%";
    selectProceso.style.height = "30px";
    // opciones del select
    var opt1 = document.createElement('option');
    var opt2 = document.createElement('option');
    var opt3 = document.createElement('option');
    opt1.innerText = "";
    opt2.innerText = "Proceso 1";
    opt3.innerText = "Proceso 2";
    // Guardar opciones en select
    selectProceso.appendChild(opt1);
    selectProceso.appendChild(opt2);
    selectProceso.appendChild(opt3);
    // Guardar label y select en divProceso
    divProceso.appendChild(labelProceso);
    divProceso.appendChild(selectProceso);

    // Div de pago (contiene label e input)
    var divPago = document.createElement('div');
    divPago.style.width = "20%";
    divPago.style.marginRight = "40px";
    // label pago
    var labelPago = document.createElement('h5');
    labelPago.innerText = 'Pago';
    // input pago
    var inputPago = document.createElement('input');
    inputPago.style.width = "100%";
    inputPago.style.height = "30px";
    // Guardar label e input en divPago
    divPago.appendChild(labelPago);
    divPago.appendChild(inputPago);

    //button
    var delComision = document.createElement('button');
    delComision.innerText = "X";
    delComision.classList.add("btn");
    delComision.classList.add("btn-danger");
    delComision.style.padding = "0px";
    delComision.style.width = "30px";
    delComision.style.height = "30px";
    delComision.style.fontSize = "20px";
    delComision.style.textAlign = "center";
    delComision.onclick = () => {
    containerProcesos.style.display = "none";
    }

    // Guardar divProceso, divPago y boton en contenedor principal
    containerProcesos.appendChild(divProceso);
    containerProcesos.appendChild(divPago);
    containerProcesos.appendChild(delComision);

    // Guardar el elemento completo en el div procesos
    procesos.appendChild(containerProcesos);
  }

  agregarProcesoEdit(){
    // Contenedor donde se van a insertar los elementos
    var procesos = document.getElementById('editProcesos');

    //Contenedor principal 
    var containerProcesos = document.createElement('div');
    containerProcesos.className = "editProceso";
    containerProcesos.style.display = "flex";
    containerProcesos.style.alignItems = "flex-end";
    containerProcesos.style.width = "60%";
    containerProcesos.style.margin = "2% 0% 1% 5% ";

    // Div de proceso (contiene label y select)
    var divProceso = document.createElement('div');
    divProceso.style.width = "60%";
    divProceso.style.marginRight = "20px";
    // label proceso
    var labelProceso = document.createElement('h5');
    labelProceso.innerText = 'Proceso';
    // select proceso
    var selectProceso = document.createElement('select');
    selectProceso.style.width = "100%";
    selectProceso.style.height = "30px";
    // opciones del select
    var opt1 = document.createElement('option');
    var opt2 = document.createElement('option');
    var opt3 = document.createElement('option');
    opt1.innerText = "";
    opt2.innerText = "Proceso 1";
    opt3.innerText = "Proceso 2";
    // Guardar opciones en select
    selectProceso.appendChild(opt1);
    selectProceso.appendChild(opt2);
    selectProceso.appendChild(opt3);
    // Guardar label y select en divProceso
    divProceso.appendChild(labelProceso);
    divProceso.appendChild(selectProceso);

    // Div de pago (contiene label e input)
    var divPago = document.createElement('div');
    divPago.style.width = "20%";
    divPago.style.marginRight = "40px";
    // label pago
    var labelPago = document.createElement('h5');
    labelPago.innerText = 'Pago';
    // input pago
    var inputPago = document.createElement('input');
    inputPago.style.width = "100%";
    inputPago.style.height = "30px";
    // Guardar label e input en divPago
    divPago.appendChild(labelPago);
    divPago.appendChild(inputPago);

    //button
    var delComision = document.createElement('button');
    delComision.innerText = "X";
    delComision.classList.add("btn");
    delComision.classList.add("btn-danger");
    delComision.style.padding = "0px";
    delComision.style.width = "30px";
    delComision.style.height = "30px";
    delComision.style.fontSize = "20px";
    delComision.style.textAlign = "center";
    delComision.onclick = () => {
    containerProcesos.style.display = "none";
    }

    // Guardar divProceso, divPago y boton en contenedor principal
    containerProcesos.appendChild(divProceso);
    containerProcesos.appendChild(divPago);
    containerProcesos.appendChild(delComision);

    // Guardar el elemento completo en el div procesos
    procesos.appendChild(containerProcesos);
  }

  obtenerInfoProcesos() {
    var container, index, pr;
    var infoSelect, infoInput;
  
    container = document.getElementById('editUser');
    // Obtener la informacion de procesos creados en segunda etapa
    pr = container.getElementsByClassName("proceso");
    for (index = 0; index < pr.length; ++index) {
      infoSelect = pr[index].getElementsByTagName("select")[0];
      infoInput = pr[index].getElementsByTagName("input")[0];
      // Obtener informacion de select
      console.log(infoSelect.value);
      // Obtener informacion de input
      console.log(infoInput.value);
    }
  }

  obtenerInfoProcesosEdit(){
    var container, index, pr;
    var infoSelect, infoInput;
  
    container = document.getElementById('editUser');
    // Obtener la informacion de procesos creados en segunda etapa
    pr = container.getElementsByClassName("editProceso");
    for (index = 0; index < pr.length; ++index) {
      infoSelect = pr[index].getElementsByTagName("select")[0];
      infoInput = pr[index].getElementsByTagName("input")[0];
      // Obtener informacion de select
      console.log(infoSelect.value);
      // Obtener informacion de input
      console.log(infoInput.value);
    }
  }

  agregarComision(){
    // Contenedor donde se van a insertar los elementos
    var procesos = document.getElementById('comisiones');

    //Contenedor principal 
    var containerComisiones = document.createElement('div');
    containerComisiones.className = "comision";
    containerComisiones.style.display = "flex";
    containerComisiones.style.alignItems = "flex-end";
    containerComisiones.style.width = "60%";
    containerComisiones.style.margin = "2% 0% 1% 5% ";

    // Div de proceso (contiene label y select)
    var divProceso = document.createElement('div');
    divProceso.style.width = "60%";
    divProceso.style.marginRight = "20px";
    // label proceso
    var labelProceso = document.createElement('h5');
    labelProceso.innerText = 'Comision';
    // select proceso
    var selectProceso = document.createElement('select');
    selectProceso.style.width = "100%";
    selectProceso.style.height = "30px";
    // opciones del select
    var opt1 = document.createElement('option');
    var opt2 = document.createElement('option');
    var opt3 = document.createElement('option');
    opt1.innerText = "";
    opt2.innerText = "Comision 1";
    opt3.innerText = "Comision 2";
    // Guardar opciones en select
    selectProceso.appendChild(opt1);
    selectProceso.appendChild(opt2);
    selectProceso.appendChild(opt3);
    // Guardar label y select en divProceso
    divProceso.appendChild(labelProceso);
    divProceso.appendChild(selectProceso);

    /*
    // Div de pago (contiene label e input)
    var divPago = document.createElement('div');
    divPago.style.width = "20%";
    divPago.style.marginRight = "40px";
    // label pago
    var labelPago = document.createElement('h5');
    labelPago.innerText = 'Pago';
    // input pago
    var inputPago = document.createElement('input');
    inputPago.style.width = "100%";
    inputPago.style.height = "30px";
    // Guardar label e input en divPago
    divPago.appendChild(labelPago);
    divPago.appendChild(inputPago);
    */

    //button
    var delComision = document.createElement('button');
    delComision.innerText = "X";
    delComision.classList.add("btn");
    delComision.classList.add("btn-danger");
    delComision.style.padding = "0px";
    delComision.style.width = "30px";
    delComision.style.height = "30px";
    delComision.style.fontSize = "20px";
    delComision.style.textAlign = "center";
    delComision.onclick = () => {
    containerComisiones.style.display = "none";
    }

    // Guardar divProceso, divPago y boton en contenedor principal
    containerComisiones.appendChild(divProceso);
    // containerComisiones.appendChild(divPago);
    containerComisiones.appendChild(delComision);

    // Guardar el elemento completo en el div procesos
    procesos.appendChild(containerComisiones);
  }

  agregarComisionEdit(){
    // Contenedor donde se van a insertar los elementos
    var procesos = document.getElementById('editComisiones');

    //Contenedor principal 
    var containerComisiones = document.createElement('div');
    containerComisiones.className = "editComision";
    containerComisiones.style.display = "flex";
    containerComisiones.style.alignItems = "flex-end";
    containerComisiones.style.width = "60%";
    containerComisiones.style.margin = "2% 0% 1% 5% ";

    // Div de proceso (contiene label y select)
    var divProceso = document.createElement('div');
    divProceso.style.width = "60%";
    divProceso.style.marginRight = "20px";
    // label proceso
    var labelProceso = document.createElement('h5');
    labelProceso.innerText = 'Comision';
    // select proceso
    var selectProceso = document.createElement('select');
    selectProceso.style.width = "100%";
    selectProceso.style.height = "30px";
    // opciones del select
    var opt1 = document.createElement('option');
    var opt2 = document.createElement('option');
    var opt3 = document.createElement('option');
    opt1.innerText = "";
    opt2.innerText = "Comision 1";
    opt3.innerText = "Comision 2";
    // Guardar opciones en select
    selectProceso.appendChild(opt1);
    selectProceso.appendChild(opt2);
    selectProceso.appendChild(opt3);
    // Guardar label y select en divProceso
    divProceso.appendChild(labelProceso);
    divProceso.appendChild(selectProceso);

    /*
    // Div de pago (contiene label e input)
    var divPago = document.createElement('div');
    divPago.style.width = "20%";
    divPago.style.marginRight = "40px";
    // label pago
    var labelPago = document.createElement('h5');
    labelPago.innerText = 'Pago';
    // input pago
    var inputPago = document.createElement('input');
    inputPago.style.width = "100%";
    inputPago.style.height = "30px";
    // Guardar label e input en divPago
    divPago.appendChild(labelPago);
    divPago.appendChild(inputPago);
    */

    //button
    var delComision = document.createElement('button');
    delComision.innerText = "X";
    delComision.classList.add("btn");
    delComision.classList.add("btn-danger");
    delComision.style.padding = "0px";
    delComision.style.width = "30px";
    delComision.style.height = "30px";
    delComision.style.fontSize = "20px";
    delComision.style.textAlign = "center";
    delComision.onclick = () => {
    containerComisiones.style.display = "none";
    }

    // Guardar divProceso, divPago y boton en contenedor principal
    containerComisiones.appendChild(divProceso);
    // containerComisiones.appendChild(divPago);
    containerComisiones.appendChild(delComision);

    // Guardar el elemento completo en el div procesos
    procesos.appendChild(containerComisiones);
  }

  obtenerInfoComisiones(){
    var container, index, pr;
    var infoSelect;
  
    container = document.getElementById('editUser');
    // Obtener la informacion de comisiones creados en tercera etapa
    pr = container.getElementsByClassName("comision");
    for (index = 0; index < pr.length; ++index) {
      infoSelect = pr[index].getElementsByTagName("select")[0];
      // Obtener informacion de select
      console.log(infoSelect.value);
    }
  }

  obtenerInfoComisionesEdit(){
    var container, index, pr;
    var infoSelect;
  
    container = document.getElementById('editUser');
    // Obtener la informacion de comisiones creados en tercera etapa
    pr = container.getElementsByClassName("editComision");
    for (index = 0; index < pr.length; ++index) {
      infoSelect = pr[index].getElementsByTagName("select")[0];
      // Obtener informacion de select
      console.log(infoSelect.value);
    }
  }
  
  // A ver si lo uso o no
  clearFields(){
    var index, containerInfoGral, inputs;
    containerInfoGral = document.getElementById('editUser');
    // Obtener la informacion de procesos creados en segunda etapa
    inputs = containerInfoGral.getElementsByTagName('input');

    for (index = 0; index < inputs.length; ++index) {
      if(inputs[index].type =="text"){
        inputs[index].value = '';
      }else if (inputs[index].type =="email"){
        inputs[index].value = '';
      }else if (inputs[index].type =="number"){
        inputs[index].value = '';
      }
    }
  }

  // Agregar funcionalidad eliminar
  eliminar(){
    alert("Usuario eliminado");
  }
}