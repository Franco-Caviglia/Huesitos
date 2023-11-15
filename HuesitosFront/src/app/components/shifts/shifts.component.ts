import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shift } from 'src/app/models/shift';

import { PetService } from 'src/app/services/pet.service';
import Swal from 'sweetalert2';

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


  markShifAsComplete(shiftId: number):void{
    this.petService.markShiftAsComplete(shiftId, this.shift).subscribe(dato => {
      console.log(dato);
      this.obtenerShift()
    })
  }

  deleteShift(shiftId:number):void{
      Swal.fire({
        title: '¿Estas seguro?',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        width:'500px',
        background: '#fff',
        position: 'top',
        heightAuto: false,
        showCancelButton: true
      }).then((result) => {
        if (result.isConfirmed){
          this.petService.deleteShift(shiftId).subscribe(
            dato => {
            console.log(dato);
          }
          )
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El turno ha sido eliminado',
            showConfirmButton: false,
            heightAuto: false,
            timer: 1400,
          }).then((result) =>{
            window.location.reload();
          }
          );
          
        } else {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Cancelado',
            showConfirmButton: false,
            heightAuto: false,
            timer: 1400
          });
        }
        
      });
      
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


    orderAs: boolean = false;
    orderDesc: boolean = false;


    order(): void{
      if(this.orderAs == true && this.orderDesc == false){
        this.orderAsc();
        this.orderAs = false;
        
      } else if (this.orderAs == false && this.orderDesc == true){
        this.orderDes();
        this.orderDesc = false;
        this.orderAs = true;

      } else if (this.orderAs == false && this.orderDesc == false){
        this.orderAsc();

        this.orderDesc = true;
      };
    }

    orderAsc():void {

      this.shifts.sort(function(a, b) {
        if(a.status > b.status){
          return 1;
        }
        if(a.status < b.status) {
          return -1;
        }
        return 0;
      })
      

    }

    orderDes():void { 

      this.shifts.sort(function(a, b) {
        if(a.status > b.status){
          return -1;
        }
        if(a.status < b.status) {
          return 1;
        }
        return 0;
      })
      
    }

  }
  

