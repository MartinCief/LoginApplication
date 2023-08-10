import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../models/User";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private router: Router, private formBuilder : FormBuilder) { }

  isValid : boolean = true;


  loginForm = this.formBuilder.group({
    email : ['', Validators.required, Validators.email],
    password : ['', Validators.required]
  })

  onRegister(){
    this.router.navigate(['/register']);
  }
  onLogin() {

    this.router.navigate(['/login']);
  }


}
