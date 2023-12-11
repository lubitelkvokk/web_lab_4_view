import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "../header/header.component";
import {ContentComponent} from "../content/content.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit, OnDestroy {


  ngOnInit(): void {
    localStorage.setItem("r", "1");
  }

  ngOnDestroy(): void {
    localStorage.removeItem("r");
  }


}
