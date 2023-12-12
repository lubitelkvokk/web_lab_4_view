import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../shared/auth/auth.service";
import {User} from "../../../models/user";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit, OnDestroy{

  form: FormGroup;
  user: User;
  server_message: string = "";


  aSub: Subscription;
  constructor(private authService: AuthService, private router: Router) {
    this.user = new User;
  }

  submitForm() {
    this.register();
  }

  register() {
    this.aSub = this.authService.register(this.user)
      .subscribe({
        next: (data) => {
          if (data.code === 200){
            this.server_message = "";
            this.router.navigate(['login'])
          }
          else{
            this.server_message = data.message;
          }
        }
      });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  ngOnDestroy(): void {
    if (this.aSub){
      this.aSub.unsubscribe();
    }
  }
}
