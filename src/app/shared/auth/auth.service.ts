import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../models/user";
import {catchError, map} from "rxjs";
import {Response} from "../../models/response";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;',
  }),
  // Добавляем режим 'no-cors'
  mode: 'no-cors'
};

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authUrl = "http://localhost:8080/web_app_lab_4_war_exploded/api/user";

  constructor(private http: HttpClient) {

  }

  login(model: User) {
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
}
