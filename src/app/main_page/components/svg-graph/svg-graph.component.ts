import { Component, OnInit } from '@angular/core';
import { SvgGraphService } from "./svg-graph.service";
import { Hit } from "../../models/Hit";
import { Observable } from "rxjs";

@Component({
  selector: 'app-svg-graph',
  templateUrl: './svg-graph.component.html',
  styleUrls: ['./svg-graph.component.css']
})
export class SvgGraphComponent implements OnInit {
  public hits$: Observable<Hit[]>;

  constructor(private svgGraphService: SvgGraphService) { }

  ngOnInit(): void {
    this.hits$ = this.svgGraphService.hits$;
  }

  handleClick($event: MouseEvent) {
    const rect = document.querySelector(".svg-graph").getBoundingClientRect();
    const xRelativeToBlock = $event.clientX - rect.x;
    const yRelativeToBlock = $event.clientY - rect.y;
    const hit: Hit = new Hit(xRelativeToBlock, yRelativeToBlock);
    this.svgGraphService.addHit(hit);
  }

  clearHits() {
    this.svgGraphService.clearHits();
  }

  isHitting(row: Hit) {
    let r = parseFloat(localStorage.getItem("r"));
    let x = (row.x - 150) / 120 * r;
    let y = (150 - row.y) / 120 * r;

    return (
      x * x + y * y <= r * r / 4 && x <= 0 && y > 0 ||
      y < (-x + r / 2) && x >= 0 && y >= 0 ||
      x >= 0 && x <= r / 2 && y <= 0 && y >= -r
    );
  }
}
