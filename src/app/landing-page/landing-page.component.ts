import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  username: string = "";
  pswd: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  setUsername(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
  }

  setPswd(event: Event){
    this.pswd = (<HTMLInputElement>event.target).value;
  }

  iniciarSesion(){
    if (this.username === 'Aaron' && this.pswd === '12345') {
      alert('sesion iniciada');
    } else if (this.username === ""  && this.pswd === ""){
      alert('los campos no pueden estar vacios');
    } else {
      alert('Te equivocaste');
    }
  }

}
