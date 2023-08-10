import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../models/User";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private router: Router) { }

  onRegister(){
    this.router.navigate(['/register']);
  }
  onLogin() {
    this.router.navigate(['/login']);
  }


}
