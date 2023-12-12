import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    const potentialToken = localStorage.getItem("token");
    if (potentialToken !== null){
      this.auth.setToken(potentialToken);
    }
    else{
      this.auth.setToken("");
    }
  }

}
