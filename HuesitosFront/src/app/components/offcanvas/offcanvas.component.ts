import { Component, Input, OnInit } from '@angular/core';
import { ShiftRequest } from 'src/app/models/ShiftRequest';
import { Shift } from 'src/app/models/board';
import { Pet } from 'src/app/models/pet';
import { PetsComponent } from '../user/pets/pets.component';
import { PetService } from 'src/app/services/pet.service';


@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent implements OnInit{


  constructor(private petService: PetService){}


  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  timeOptions: string[] = [];


  ngOnInit() {
    this.generateTimeOptions();
    this.getPet();
  }

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

  @Input() petId: number;

  pet: Pet = new Pet();

  shift: ShiftRequest = new ShiftRequest();


  getPet():void {
    this.petService.getPetByUserId(this.petId).subscribe(dato => {
      this.pet = dato;
    })
  }

  addShift():void{
    this.petService.addShiftForPet(this.petId, this.shift).subscribe(dato => {
      console.log(dato);
    })
  }


}

