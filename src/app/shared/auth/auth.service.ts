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

  isAuth = false;

  constructor(private http: HttpClient) {
  }

  login(model: User) {
    return this.http.post(this.authUrl, model, {responseType: 'text'}).pipe(
      map((data)=>{
        this.isAuth = true;
        return new Response(200, data);
      }),
      catchError((err) => {
        this.isAuth = false;
        return [new Response(404, err.error)];
      })
    );
      // .subscribe({
      //   next: (data: any) => {
      //     this.isAuth = true;
      //     return new Response(200, data);
      //   },
      //   error: (error) => {
      //     this.isAuth = false;
      //     return new Response(error.code, error.error);
      //   }
      // });
  }


  register(model: any) {

  }

  loggedIn() {

  }
}
