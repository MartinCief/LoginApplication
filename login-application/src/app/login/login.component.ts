import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../models/User";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
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

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  isValid: boolean = true;
  isEmpty : boolean = false;

  onRegister() {
    this.router.navigate(['/register']);
  }

  onLogin() {
    this.submitted = true;


  }
}
