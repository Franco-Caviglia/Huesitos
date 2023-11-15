import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';
import { Observable } from 'rxjs';

import { ShiftRequest } from '../models/ShiftRequest';
import { Shift } from '../models/shift';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private userURL = "http://localhost:8080/api/admin";

  constructor(private http:HttpClient) { }


  getShifts(): Observable<Shift[]>{
    return this.http.get<Shift[]>(`${this.userURL}` + '/readAllShifts');
  }

  getPetByUserId(id:number): Observable<Pet>{
    return this.http.get<Pet>(`${this.userURL}/${id}` + '/readPet');
  }


  addShiftForPet(petId:number, shift: ShiftRequest): Observable<Object>{
    return this.http.post(`${this.userURL}/${petId}` + '/addShiftToPet', shift);
  }

  deleteShift(id:number, shift: Shift): Observable<Object>{
    return this.http.put(`${this.userURL}/${id}` + '/deleteShifts', shift);
  }
}
