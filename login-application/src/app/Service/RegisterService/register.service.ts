import { Injectable } from '@angular/core';
import {Register, User} from "../../models/User";
import {map, Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {HttpService} from "../HttpService/http.service";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _httpService: HttpService) {
  }

  register(register: Register): Observable<{ success: boolean, message: string }> {
    return this._httpService.registerUser(register).pipe(
      map(response => {
        return {
          success: response.success,
          message: response.message
        };
      })
    );

  }
}
