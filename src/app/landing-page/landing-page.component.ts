import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { environment } from './../../environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  SIGN_IN_URL = `${environment.apiEndpoint}/auth/login`;

  username: string = '';
  pswd: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  iniciarSesion() {
    this.http
      .post(this.SIGN_IN_URL, {
        email: this.username,
        password: this.pswd,
      })
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error: any) => {
          console.log(error.error.msg);
        },
      });
  }
}
