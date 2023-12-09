import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public isAuth = false;

  ngInitOn(){
    this.isAuth = false;
  }

  logOut(){
    this.isAuth = false;
  }

  logIn(){
    this.isAuth = true;
  }


}
