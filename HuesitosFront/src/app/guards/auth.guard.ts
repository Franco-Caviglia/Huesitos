import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";

import { TokenService } from "../services/token.service";
import { Token } from "@angular/compiler";


//Esto verifica que el usuario este autenticado, no toma en cuenta el rol que posee;
export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(TokenService);
    
    if(authService.getToken()){
        return true;
    } else {
        return false;
    }
    
}