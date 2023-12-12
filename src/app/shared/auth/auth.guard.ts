import {inject, Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";

export const authGuard: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        let authService = inject(AuthService);
        if (authService.loggedIn()){
            return true;
        }
        else{
            inject(Router).navigate(['/login'])
            return false;
        }
    };
