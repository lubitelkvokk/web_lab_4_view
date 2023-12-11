import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.loggedIn()) {

      // Добавляем новый заголовок Authorization к существующим заголовкам
      let authReq = req.clone({
        setHeaders: {
          Authorization: this.auth.getToken()
        }
      });
      console.log(authReq.headers);
      // authReq.headers = authReq.headers.set("Authorization", this.auth.getToken())
      return next.handle(authReq);
    }

    return next.handle(req);
  }

  // intercept(req: HttpRequest<any>, next: HttpHandler):
  //   Observable<HttpEvent<any>> {
  //   return next.handle(req);
  // }
}
