import { Component, OnInit } from '@angular/core';

import { PetRequest } from 'src/app/models/petRequest';
import { User } from 'src/app/models/user';
import { PetService } from 'src/app/services/pet.service';

import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  listUsers: User[];
  user: User = new User();

  petsView: boolean = false;


  constructor(private userService: UserService, private petService:PetService){}


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(dato => {
      this.listUsers = dato;
    })
  }


  userSelected:number;

  selectedUserViewPetsList(user_id: number): void{
    console.log(user_id);
    this.userSelected = user_id;
    console.log('usuario elegido:', this.userSelected);
    this.petsView = !this.petsView;
  }

  selectedUserAddPet(user_id: number): void{
    console.log(user_id);
    this.userSelected = user_id;
    console.log('usuario elegido:', this.userSelected);
    this.addPetView = !this.addPetView;
  }


  addPetView: boolean = false;

  pet:PetRequest = new PetRequest();

  addPet():void{
    console.log(this.userSelected, this.pet);

   
      this.petService.addPetToUserId(this.userSelected,this.pet).subscribe(dato=>{
       this.pet = dato ;
       Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mascota agregada con exito',
        showConfirmButton: false,
        heightAuto: false,
        timer: 1400,
      })
      this.addPetView = false;
     });
  }

}
