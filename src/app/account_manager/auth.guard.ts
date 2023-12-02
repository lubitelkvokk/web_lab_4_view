import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "./auth.service";
import {inject} from "@angular/core";
import {WelcomePageComponent} from "../welcome-page/welcome-page.component";


export const authGuard: CanActivateFn = (route,
                                          state) => {
  const authService = inject(AuthService)
  const router = inject(Router)
  if (!authService.getIsAuth()){
    router.navigate([""]);
    return authService.getIsAuth();
  }
  return authService.getIsAuth();

};
