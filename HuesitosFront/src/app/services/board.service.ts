import { Injectable,OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Router } from '@angular/router'; 
import { Shift } from '../models/board';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BoardService  { 

  private baseURL='http://localhost:8080/api/admin/readAllShifts';
  constructor(private http :HttpClient) {}

getBoard(): Observable<Shift[]> {
  return this.http.get<Shift[]>(`${this.baseURL}`);
}
 eliminarCliente(id: number):Observable <Object> {
return this.http.delete(`${this.baseURL}/${id}`);

 }
}


