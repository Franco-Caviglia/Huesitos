import { Component, OnInit } from '@angular/core';
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

  constructor(private tokenService: TokenService){}


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

}
