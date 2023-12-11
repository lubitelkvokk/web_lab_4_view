import {Injectable, OnDestroy} from '@angular/core';
import {Hit} from "../../models/Hit";
import {HitResultService} from "../../services/hit-result.service";


const HITS = "hits"

@Injectable({
  providedIn: 'root'
})

export class SvgGraphService {


  private hits: Hit[] = [];

  constructor(private hitResultService: HitResultService) {
    const data = localStorage.getItem(HITS);
    if (data) {
      this.hits = JSON.parse(localStorage.getItem(HITS));
    } else {
      localStorage.setItem(HITS, JSON.stringify([]));
    }

  }

  public addHit(hit: Hit) {
    this.hits.push(hit);
    let r = parseFloat(localStorage.getItem("r"));
    let convertedHit = new Hit((hit.x - 150) / 120 * r, (150 - hit.y) / 120 * r);
    convertedHit.r = r;
    console.log(convertedHit);
    this.hitResultService.sendHit(convertedHit).subscribe((data) => {
      console.log(data);
    });
    localStorage.setItem(HITS, JSON.stringify(this.hits));
  }

  public getHits(): Hit[] {
    return this.hits;
  }


  clearHits() {
    this.hits = [];
    localStorage.setItem(HITS, JSON.stringify([]));
  }

}
