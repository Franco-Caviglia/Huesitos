import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/register-user';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { LoginUser } from '../models/login-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authUrl = 'http://localhost:8080/auth/';

  constructor(private http: HttpClient) { }

  public registerAdmin(registerAdmin: RegisterUser): Observable<any>{
    return this.http.post<any>(`${this.authUrl}` + `registerAdmin`, registerAdmin);
  }

  public login(login: LoginUser): Observable<JwtDto>{
    return this.http.post<JwtDto>(`${this.authUrl}` + `login`, login);
  }

  public registerCustomer(registerUser: RegisterUser): Observable<any>{
    return this.http.post<any>(`${this.authUrl}` + `registerUser`, registerUser);
  }
}
