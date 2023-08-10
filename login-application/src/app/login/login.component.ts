import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() {
  }
  loginForm = new FormGroup({
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  })

 login() {

    if (!this.loginForm.valid) {
      return;
    }
    const loginInfo = {
      username : this.loginForm.value.username,
      password : this.loginForm.value.password
    }

 }

}
