import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";
import {catchError, map} from "rxjs";
import {Response} from "../../models/response";
import {Hit} from "../models/Hit";

@Injectable({
  providedIn: 'root'
})
export class HitResultService {

  hitUrl = "http://localhost:8080/web-app-lab-4-1.0-SNAPSHOT/api/hit";
  // http://localhost:8080/web_app_lab_4_war_exploded/api/hit
  constructor(private http: HttpClient) {
  }

  sendHit(model: Hit) {
    model.time = new Date();
    return this.http.put(this.hitUrl, model, {responseType: 'text'}).pipe(
      map((data) => {
        return new Response(200, data);
      }),
      catchError((err) => {
        return [new Response(404, err.error)];
      })
    );
  }

  getHits(page_number: number, page_size: number) {
    return this.http.get(this.hitUrl + `?pageNumber=${page_number}&pageSize=${page_size}`, {responseType: 'text'}).pipe(
      map((data) => {
        return new Response(200, data);
      }),
      catchError((err) => {
        return [new Response(404, err.error)];
      })
    );
  }

}
