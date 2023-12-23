import {Component, OnInit} from '@angular/core';
import {HitResultService} from "../../services/hit-result.service";

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrl: './result-table.component.css'
})
export class ResultTableComponent implements OnInit {

  previousHits = []
  page_number: number = 1;
  private page_size: number;

  constructor(private hitService: HitResultService) {
  }

  setPageNumber(page_number: number) {
    this.page_number = page_number;
  }

  setPageSize(page_size: number) {
    this.page_size = page_size;
  }

  ngOnInit(): void {

    this.adjustPageSize();

    if (localStorage.getItem("previousHits")) {
      this.previousHits = JSON.parse(localStorage.getItem("previousHits"));
    } else {
      this.getHits();
    }
  }

  getHits() {
    this.hitService.getHits(this.page_number, this.page_size).subscribe((response) => {
      if (response.code === 200) {
        localStorage.setItem("previousHits", response.message);
        this.previousHits = JSON.parse(response.message);
      }
    });
  }

  adjustPageSize(): void {
    const windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      // Настройки для маленьких экранов
      this.setPageSize(5);
    } else if (windowWidth < 992) {
      // Настройки для средних экранов
      this.setPageSize(10);
    } else {
      // Настройки для больших экранов
      this.setPageSize(15);
    }
  }


  protected readonly Math = Math;
}
