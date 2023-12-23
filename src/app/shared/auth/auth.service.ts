import {Injectable, OnInit} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../models/user";
import {catchError, map} from "rxjs";
import {Response} from "../../models/response";


@Injectable({
  providedIn: "root"
})
export class AuthService{
  authUrl = "http://localhost:8080/web-app-lab-4-1.0-SNAPSHOT/api/user";
  // http://localhost:8080/web_app_lab_4_war_exploded/api/user
  constructor(private http: HttpClient) {

  }

  login(model: User) {
    this.checkInitToken();
    return this.http.post(this.authUrl, model, {responseType: 'text'}).pipe(
      map((data) => {
        localStorage.setItem("token", data);
        localStorage.setItem("login", model.login);
        localStorage.setItem("password", model.password);
        return new Response(200, data);
      }),
      catchError((err) => {
        return [new Response(404, err.error)];
      })
    );
  }

  register(model: User){
    this.checkInitToken();
    return this.http.put(this.authUrl, model, {responseType: 'text'}).pipe(
      map((data) => {
        localStorage.setItem("login", model.login);
        localStorage.setItem("password", model.password);
        return new Response(200, data);
      }),
      catchError((err) => {
        return [new Response(404, err.error)];
      })
    );
  }

  setToken(token: string){
    return localStorage.setItem("token", token);
  }

  getToken(){
    return localStorage.getItem("token");
  }


  loggedIn() {
    return localStorage.getItem("token") !== null;
  }

  checkInitToken(): void {
    const potentialToken = localStorage.getItem("token");
    if (potentialToken){
      this.setToken(potentialToken);
    }
    else{
      this.setToken("");
    }
  }
}
