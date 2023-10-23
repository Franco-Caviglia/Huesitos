import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { RegisterUser } from 'src/app/models/register-user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  isRegister = false;
  isRegisterFail = false;
  registerUser: RegisterUser;
  username: string;
  password: string;
  email: string;
  phone: string;
  rol: string;
  errMsg: string;
  isLogged = false;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
      if(this.tokenService.getToken()){
        this.isLogged = true;
        //TODO definir rol;
        
      }
      this.rol = 'admin';
  }

  //metodo para registrar un administrador;
  onRegisterAdmin(): void {
    this.registerUser = new RegisterUser(this.username,  this.email, this.password, this.phone);
    this.authService.registerAdmin(this.registerUser).subscribe(
      data => {
        this.isRegister = true;
        this.isRegisterFail = false;


        this.router.navigate(['login']);
      }, err => {
        this.isRegister = false;
        this.isRegisterFail = true;
      }
    );
  }

  //metodo para registrar un usuario comun;
  onRegisterCustomer(): void {
    this.registerUser = new RegisterUser(this.username, this.password, this.email, this.phone);
    this.authService.registerCustomer(this.registerUser).subscribe(
      data => {
        this.isRegister = true;
        this.isRegisterFail = false;


        this.router.navigate(['login']);
      }, err => {
        this.isRegister = false;
        this.isRegisterFail = true;
      
      }
    );
  }
  

}

