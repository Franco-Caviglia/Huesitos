import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shift } from 'src/app/models/board';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})
export class ShiftsComponent implements OnInit {
  
  shifts: Shift[];

  shift : Shift = new Shift();

  constructor(private petService:PetService, private router:Router){}

  ngOnInit(): void {
    this.obtenerShift();
    this.generateTimeOptions();
  }

  //Con este metodo nos suscribimos a ese listado, lo obtenemos y lo inicializamos en el OnInIt;
  obtenerShift(){
    this.petService.getShifts().subscribe(dato => {
      this.shifts = dato;
    })
  }


  


    myFilter = (d: Date | null): boolean => {
      const day = (d || new Date()).getDay();
      // Prevent Saturday and Sunday from being selected.
      return day !== 0 && day !== 6;
    };
    timeOptions: string[] = [];
 
  
    generateTimeOptions() {
      for (let hour = 9; hour <= 17; hour++)  {
        for (let minutes = 0; minutes < 60; minutes += 30) {
          if (hour === 17 && minutes == 0) {
            break;
          }
          const time = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
          this.timeOptions.push(time);
        }
      }
    }
  }
  


