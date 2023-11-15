import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit{


  @Input() userId:number;


  offcanvasView: boolean = false;

  listPets: Pet[];
  pet: Pet = new Pet();

  constructor(private userService: UserService){}


  ngOnInit(): void {
    if(this.userId != undefined){
      this.getPets(this.userId);
    }
  }

  getPets(id: number){
    this.userService.getPetsOfUser(this.userId).subscribe(dato => {
      this.listPets = dato;
      console.log(this.listPets);
    })
  }

  ngOnChanges(changes: SimpleChange){
    console.log('changes', changes);
  }


  selectedPet: number;
  

  petSelected(petId: number): void{
    console.log(petId);
    this.selectedPet = petId;
    console.log('Mascota elegida:', this.selectedPet);
    this.offcanvasView = !this.offcanvasView;
  }
  //TODO metodo para agregar turnos;
}
