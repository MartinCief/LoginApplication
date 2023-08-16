import { Injectable } from '@angular/core';
import {Register, User} from "../../models/User";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {HttpService} from "../HttpService/http.service";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _httpService: HttpService) {
  }

  register(register: Register): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this._httpService.registerUser(register).subscribe({
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
