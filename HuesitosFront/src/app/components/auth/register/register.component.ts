import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{


  isLogged = false;
  isLoginFail = false;
  loginUser: LoginUser;
  username: string;
  password: string;
  email: string;
  phone: string;
  rol: string;
  errMsg: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
      if(this.tokenService.getToken()){
        this.isLogged = true;
        this.isLoginFail = false;
        //TODO definir rol;
      }
      this.rol = 'Rol';
      console.log(this.rol);
  }

  

}

