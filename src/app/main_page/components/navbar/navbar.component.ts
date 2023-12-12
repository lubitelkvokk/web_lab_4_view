import {Component} from '@angular/core';
import {SvgGraphService} from "../svg-graph/svg-graph.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  // TODO because svgGraphService doesn't destroy after logOut
  constructor(private svgGraphService: SvgGraphService) {
  }

  logOut(){
    this.svgGraphService.clearHits();
    localStorage.clear();
  }

}
