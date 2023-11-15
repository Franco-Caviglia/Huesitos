import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { PetService } from 'src/app/services/pet.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

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

  constructor(private userService: UserService, private petService: PetService){}


  ngOnInit(): void {
    if(this.userId != undefined){
      this.getPets();
    }
  }

  getPets(){
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

  deletePet(petId: number){
    this.selectedPet = petId;
    
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
        this.petService.deletePetById(petId).subscribe(dato => {
          console.log(dato); 
          this.getPets();
        })
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'La mascota ha sido eliminada',
          showConfirmButton: false,
          heightAuto: false,
          timer: 1000
        });
      } else {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Cancelado',
          showConfirmButton: false,
          heightAuto: false,
          timer: 1000
        });
      }
    });
  }
}
