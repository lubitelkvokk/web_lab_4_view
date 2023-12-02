import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SvgGraphService} from "./svg-graph.service";
import {Hit} from "../../models/Hit";

@Component({
  selector: 'app-svg-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-graph.component.html',
  styleUrl: './svg-graph.component.css'
})
export class SvgGraphComponent implements OnInit {

  private _svgGraphService: SvgGraphService;
  public hits: Hit[];

  constructor(svgGraphService: SvgGraphService) {
    this._svgGraphService = svgGraphService;
  }

  ngOnInit(): void {
    console.log(this._svgGraphService.getHits());
    this.hits = this._svgGraphService.getHits();
  }

  handleClick($event: MouseEvent) {
    const rect = document.querySelector(".svg-graph").getBoundingClientRect();
    const xRelativeToBlock = $event.clientX - rect.x;
    const yRelativeToBlock = $event.clientY - rect.y;
    let hit: Hit = new Hit(xRelativeToBlock, yRelativeToBlock);
    this._svgGraphService.addHit(hit);
    this.hits.push(hit);
  }

  clearHits() {
    this.hits = [];
    this._svgGraphService.clearHits();
  }
}
