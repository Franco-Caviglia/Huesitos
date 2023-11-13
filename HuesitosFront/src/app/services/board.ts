import { Injectable } from '@angular/core';
import { URL_BACK } from '../environment/board_environment/URL';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { ShiftApi, ShiftApiResults } from '../models/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService { 

  private urlEndPoint: string = URL_BACK;

  constructor(private http: HttpClient) { }

  getShiftAll():Observable<ShiftApiResults[]>{
  return this.http.get<ShiftApi>(URL_BACK + '/readAllShifts').pipe(map((apiResult)=>apiResult.results)) 
  }

}