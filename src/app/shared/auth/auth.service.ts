import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from "../../models/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authUrl = "http://localhost:5000/api/user/";

  constructor(private http: HttpClient) {}

  login(model: any) {

  }

  register(model: any) {

  }

  resetPassword(model: any) {

  }

  confirmEmail(model: any) {

  }

  changePassword(model: any) {

  }

  loggedIn() {

  }
}
