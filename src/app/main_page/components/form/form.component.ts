import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  x: number;
  y: number;
  r: number;
  x_range: number[] = [-3, -2, -1, 0, 1, 2, 3];
  r_range: number[] = [-3, -2, -1, 0, 1, 2, 3, 4, 5];

}
