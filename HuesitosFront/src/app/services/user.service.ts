import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private userURL = "http://localhost:8080/api/admin";

  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.userURL}` + '/readAllUsers');
  }


  getPetsOfUser(id: number): Observable<Pet[]>{
    return this.http.get<Pet[]>(`${this.userURL}/${id}` + '/readPets');
  }
}
