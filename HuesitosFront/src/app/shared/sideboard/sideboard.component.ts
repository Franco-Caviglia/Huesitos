import { Component, OnInit } from '@angular/core';
import { Route, Router, mapToCanActivate, mapToCanActivateChild } from '@angular/router';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { authGuard } from 'src/app/guards/auth.guard';
import { JwtDto } from 'src/app/models/jwt-dto';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-sideboard',
  templateUrl: './sideboard.component.html',
  styleUrls: ['./sideboard.component.scss']
})
export class SideboardComponent implements OnInit{

  username: string;
  token = true;

  constructor(private tokenService: TokenService, private router: Router){
  }
  
  
  ngOnInit(): void {
    // if(this.tokenService.getToken() != null){
    //   this.token = true;
    //   this.username = this.tokenService.getUsername();
    // } else {
    //   this.router.navigate(['login']);
    // }
  
  }
  
  logOut(){
    sessionStorage.clear();
    this.refresh();
  }

  refresh(){
    window.location.reload();
  }
  
}
