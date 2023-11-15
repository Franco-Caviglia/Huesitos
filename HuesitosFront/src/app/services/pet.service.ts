import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';
import { Observable } from 'rxjs';

import { ShiftRequest } from '../models/ShiftRequest';
import { Shift } from '../models/shift';

import { PetRequest } from '../models/petRequest';


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

  //========================ACOMODAR==================
  addPetToUserId(user_id:number, pet:PetRequest): Observable<any>{
    return this.http.post(`${this.userURL}/${user_id}` + '/addPet', pet);
  }
  //========================ACOMODAR==================
  
  deletePetById(petId: number): Observable<Object>{
    return this.http.delete(`${this.userURL}/${petId}` + '/deletePet');
  }

  addShiftForPet(petId:number, shift: ShiftRequest): Observable<Object>{
      return this.http.post(`${this.userURL}/${petId}` + '/addShiftToPet', shift);
    }

  

  deleteShift(id:number): Observable<Object>{
    return this.http.delete(`${this.userURL}/${id}` + '/deleteShifts');
  }
}
