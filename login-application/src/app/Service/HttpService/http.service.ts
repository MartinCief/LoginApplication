import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Register, User} from 'src/app/models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {

  }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

   loginUser(user : User) : Observable<boolean> {
      return this.http.post<boolean>("url", user, {
        headers : this.headers
      })
  }

  registerUser(register : Register) : Observable<{ success: boolean, message: string }> {
     return this.http.post<{success: boolean, message: string}>("url", register, {
       headers : this.headers
     })
  }

}
