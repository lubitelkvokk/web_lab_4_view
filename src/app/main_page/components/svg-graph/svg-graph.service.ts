import {Injectable} from '@angular/core';
import {Hit} from "../../models/Hit";
import {HitResultService} from "../../services/hit-result.service";
import {BehaviorSubject, Observable} from "rxjs";

const HITS = "hits";

@Injectable({
  providedIn: 'root'
})
export class SvgGraphService {
  private hitsSubject: BehaviorSubject<Hit[]> = new BehaviorSubject<Hit[]>([]);
  hits$: Observable<Hit[]> = this.hitsSubject.asObservable();

  constructor(private hitResultService: HitResultService) {
    const data = localStorage.getItem(HITS);
    if (data) {
      this.hitsSubject.next(JSON.parse(data));
    } else {
      this.hitsSubject.next([]);
      localStorage.setItem(HITS, JSON.stringify([]));
    }
  }

  public addHit(hit: Hit) {
    let r = parseFloat(localStorage.getItem("r"));
    hit.r = r;
    const updatedHits = [...this.hitsSubject.value, hit];
    this.hitsSubject.next(updatedHits);

    let convertedHit = new Hit((hit.x - 150) / 120 * r, (150 - hit.y) / 120 * r);
    convertedHit.r = r;

    this.hitResultService.sendHit(convertedHit).subscribe((data) => {
      if (data.code === 401) {
        confirm("token lifetime has expired");
      }
    });
    localStorage.setItem(HITS, JSON.stringify(updatedHits));
  }

  public addHitWithoutConverting(hit: Hit) {
    hit.r = parseFloat(localStorage.getItem("r"));
    let convertedHit = new Hit(150 + hit.x * 120, 150 - hit.y * 120);
    convertedHit.r = hit.r;
    const updatedHits = [...this.hitsSubject.value, convertedHit];
    this.hitsSubject.next(updatedHits);
    this.hitResultService.sendHit(hit).subscribe((data) => {
      if (data.code === 401) {
        confirm("token lifetime has expired");
      }
    });
    localStorage.setItem(HITS, JSON.stringify(updatedHits));
  }

  public getHits(): Observable<Hit[]> {
    return this.hitsSubject.asObservable();
  }

  clearHits() {
    this.hitsSubject.next([]);
    localStorage.setItem(HITS, JSON.stringify([]));
  }

  redrawHits(newR: number) {

    console.log(this.hitsSubject.value);
    const updatedHits = this.hitsSubject.value.map(hit => {
      // previous values
      let x = (hit.x - 150) * hit.r / newR;
      let y = (150 - hit.y) * hit.r / newR;

      // translate on window coordinates
      x = 150 + x;
      y = 150 - y;

      return {...hit, x, y, r: newR};
    });

    this.hitsSubject.next(updatedHits);
  }
}
