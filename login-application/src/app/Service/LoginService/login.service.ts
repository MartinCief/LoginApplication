import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from '../HttpService/http.service';
import { User } from 'src/app/models/User';
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpService: HttpService, private router: Router, ) {
   
  }

   login(user: User): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this._httpService.loginUser(user).subscribe({
        next: (result) => {
          console.log(result);
          observer.next(result.valueOf());
          observer.complete();
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            console.log(error);
          }
          observer.next(false);
          observer.complete();
        }
      });
    });
  }
}
