import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../models/User";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import { LoginService } from '../Service/LoginService/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  ngOnInit() {
  }

  constructor(private router: Router, private formBuilder: FormBuilder, private loginService : LoginService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^[^\s]+$/)]],
    });
  }

  onRegister() {
    this.router.navigate(['/register']);
  }

  onLogin() {
    this.submitted = true;
    if(!this.loginForm.valid) {
      return;
     }else{
      let user : User = {
        username : this.loginForm.value.username,
        password : this.loginForm.value.password
      }
      let  result = this.loginService.login(user);
      if (result) {
        this.router.navigate(['/mainpage'])
      } else {
        alert("Username or password is invalid!")
      }
      
    }
  }
}
