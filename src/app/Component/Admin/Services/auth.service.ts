import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl + 'Account/';

  constructor( private http:HttpClient) { }

  login(user: IUser) {
    return this.http.post(this.baseUrl + 'adminLogin', user);
}
}
