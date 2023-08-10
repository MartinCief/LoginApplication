import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../models/User";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private router: Router) { }

  isValid : boolean = true;
  loginForm  = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required])
  });

  onRegister(){
    this.router.navigate(['/register']);
  }
  onLogin() {
    if (!this.loginForm.valid) {
      this.isValid = false;
      return;
    }

    this.router.navigate(['/login']);
  }


}
