import { Component, OnInit } from '@angular/core';
import { Pets } from 'src/app/models/pets';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{


  listPets: Pets[];
  pet: Pets = new Pets();

  constructor(){}


  ngOnInit(): void {
    
  }

}
