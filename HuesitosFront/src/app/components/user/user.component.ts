import { Component, OnInit } from '@angular/core';

import { PetRequest } from 'src/app/models/petRequest';
import { User } from 'src/app/models/user';
import { PetService } from 'src/app/services/pet.service';

import { User } from 'src/app/models/user';

import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

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


  getUsers(){
    this.userService.getUsers().subscribe(dato => {
      this.listUsers = dato;
    })
  }

  userSelected:number;

  selectedUser(user: number): void{
    console.log(user);
    this.userSelected = user;
    console.log('usuario elegido:', this.userSelected);
    this.petsView = !this.petsView;
  }


  addPetView: boolean = false;

  openAddPetView():void {
    this.addPetView = !this.addPetView;
  }

  pet:PetRequest = new PetRequest();

  addPet():void{
    
     this.petService.addPetToUserId(this.userSelected,this.pet).subscribe(dato=>{
      this.pet = dato ;
    })
  }

}
