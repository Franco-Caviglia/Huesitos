import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{


  isLogged = false;
  isLoginFail = false;
  loginUser: LoginUser;
  username: string;
  password: string;
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

  onLoginAdmin(): void {
    this.loginUser = new LoginUser(this.username, this.password);
    this.authService.loginAdmin(this.loginUser).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;
        
        this.tokenService.setToken(data.token);
      }, err => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsg = err.error.errMsg;
      }
    );
  }

  onLoginCustomer(): void {
    this.loginUser = new LoginUser(this.username, this.password);
    this.authService.loginCustomer(this.loginUser).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;
        
        this.tokenService.setToken(data.token);
        this.router.navigate(['home']);
      }, err => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsg = err.error.errMsg;
      }
    );
  }

}
