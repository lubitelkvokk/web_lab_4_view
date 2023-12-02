import {Injectable, OnDestroy} from '@angular/core';
import {Hit} from "../../models/Hit";


const HITS = "hits"

@Injectable({
  providedIn: 'root'
})

export class SvgGraphService  {


  private hits: Hit[] = [];

  constructor() {
    const data = localStorage.getItem(HITS);
    if (data){
      this.hits = JSON.parse(localStorage.getItem(HITS));
    }
    else{
      localStorage.setItem(HITS, JSON.stringify([]));
    }

  }

  public addHit(hit: Hit) {
    this.hits.push(hit);
    localStorage.setItem(HITS, JSON.stringify(this.hits));
  }

  public getHits(): Hit[] {
    return this.hits;
  }


  clearHits(){
    this.hits = [];
    localStorage.setItem(HITS, JSON.stringify([]));
  }

}
