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
}
