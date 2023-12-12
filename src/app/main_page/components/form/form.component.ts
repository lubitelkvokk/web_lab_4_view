import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HitResultService} from "../../services/hit-result.service";
import {Hit} from "../../models/Hit";
import {SvgGraphService} from "../svg-graph/svg-graph.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  hit: Hit;

  constructor(private hitResultService: HitResultService, private svgGraphService: SvgGraphService) {
    this.hit = new Hit(0, 0);
  }

  x_range: number[] = [-3, -2, -1, 0, 1, 2, 3];
  r_range: number[] = [1, 2, 3, 4, 5];

  rChanging() {
    localStorage.setItem("r", "" + this.hit.r);
    this.svgGraphService.redrawHits(this.hit.r);
    // TODO сделать перерисовку и желательно в другом месте svg-graph.service
  }

  submitForm() {
    // coordinates in pixels
    this.svgGraphService.addHitWithoutConverting(this.hit);

  }

}
