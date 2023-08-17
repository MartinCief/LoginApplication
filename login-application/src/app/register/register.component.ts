import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Register} from "../models/User";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {RegisterService} from "../Service/RegisterService/register.service";
import { matchpassword } from './matchpassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  registerForm: FormGroup;
  submitted = false;
  usernameAlreadyExists = false;
  ngOnInit() {
  }

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private registerService : RegisterService) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[^\s\d]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[^\s\d]+$/)]],
      username: ['', [Validators.required, Validators.pattern(/^[^\s\d]+$/)]],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-~.;(){}|/*@#$%^&+=!])(?!.*\s).{8,32}$/),]],
      repassword: [null, [Validators.required, Validators.pattern(/^[^\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],

    },
    {
      validators:matchpassword
    }
    );
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
  userNameRequiredError(){
    return this.registerForm.get('username')?.errors?.['required']
  }
  userNamePatternError(){
    return this.registerForm.get('username')?.errors
  }



  onCancel(){
    this.router.navigate(['']);
  }
  onRegister(){
    this.submitted = true;
    if(!this.registerForm.valid) {
      return;
    }else {

      let register: Register = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        password: this.registerForm.value.password,
        username: this.registerForm.value.username,
        email : this.registerForm.value.email
      }
      this.registerService.register(register).subscribe(result => {
        if (result) {
          this.router.navigate(['/mainpage']);
        }
        if (result.message === "")
          this.usernameAlreadyExists = true;
      }, error => {
        alert("An error occurred while registering.");
      });
    }
  }
}
