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

  addPetToUserId(user_id:number, pet:PetRequest): Observable<any>{
    return this.http.post(`${this.userURL}/${user_id}` + '/addPet', pet);
  }
  
  deletePetById(petId: number): Observable<Object>{
    return this.http.delete(`${this.userURL}/${petId}` + '/deletePet');
  }

  //======================SHIFTS======================
  addShiftForPet(petId:number, shift: ShiftRequest): Observable<Object>{
      return this.http.post(`${this.userURL}/${petId}` + '/addShiftToPet', shift);
    }

  markShiftAsComplete(shift_id: number, shift: Shift ): Observable<Object>{
    return this.http.put(`${this.userURL}/${shift_id}`+'/markCompleteShifts', shift)
  }
  
  

  deleteShift(id:number): Observable<Object>{
    return this.http.delete(`${this.userURL}/${id}` + '/deleteShifts');
  }
}
