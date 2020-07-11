import {Router} from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email = '';

  constructor(private router: Router) {
    this.email = localStorage.getItem('email');
  }

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['sign-in']);
  }
}
