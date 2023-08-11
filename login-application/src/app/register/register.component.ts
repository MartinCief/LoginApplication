import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../models/Register';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  registerForm: FormGroup;
  submitted = false;
  ngOnInit() {
  }

  constructor(private router: Router ,private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[^\s\d]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[^\s\d]+$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?!.*\s).{8,32}$/),]],
      repassword: ['', [Validators.required, Validators.pattern(/^[^\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],

    });
  }

  firstNameRequiredError() {
    return this.registerForm.get('firstName')?.errors?.['required']
  }

  firstNamePatternError() {
    return this.registerForm.get('firstName')?.errors
  }

  lastNameRequiredError() {
    return this.registerForm.get('lastName')?.errors?.['required']
  }

  lastNamePatternError() {
    return this.registerForm.get('lastName')?.errors
  }


  onCancel(){
    this.router.navigate(['']);
  }
  onRegister(){
    this.submitted = true;
    if(!this.registerForm.valid) {
      return;
    }else{
      alert("Register works!");
    }
  }
}
