import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';



@Injectable({
  providedIn: 'root'
})
//Esta clase esta de guia;
export class ProdGuardService{

  realRol: string;

  constructor(private tokenService: TokenService, private router: Router) { }


  canActivate(route: ActivatedRoute, state: RouterStateSnapshot): boolean {
    
    const roles = this.tokenService.getAuthorities();
    this.realRol = 'USER';
    roles.forEach(rol => {
      if(rol === 'ADMINISTRATOR'){
        this.realRol = 'ADMINISTRATOR';
      }

    });
    if(!this.tokenService.getToken() || roles.indexOf(this.realRol) === -1){
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }

}

