import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuth: boolean;
  constructor() { }

  getIsAuth(){
    return this.isAuth;
  }
}
