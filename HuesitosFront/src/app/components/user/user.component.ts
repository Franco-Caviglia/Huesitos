import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { PetRequest } from 'src/app/models/petRequest';
import { User } from 'src/app/models/user';
import { PetService } from 'src/app/services/pet.service';
>>>>>>> Stashed changes
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  isLogged = false;
  username = '';
  isUser = false;
  roles: string[];

<<<<<<< Updated upstream
  constructor(private tokenService: TokenService){}
=======
  listUsers: User[];
  user: User = new User();

  petsView: boolean = false;

  constructor(private userService: UserService, private petService:PetService){}
>>>>>>> Stashed changes


  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.username = this.tokenService.getUsername();
      this.roles = this.tokenService.getAuthorities();

      this.roles.forEach(rol => {
        if(rol === 'USER' || rol === 'ADMINISTRATOR'){
          console.log(rol)
          this.isUser = true;
        }
      });
    } else {
      this.isLogged = false;
      this.username = '';
    }
  }

<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
}
