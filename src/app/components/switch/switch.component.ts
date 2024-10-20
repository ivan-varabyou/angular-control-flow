import { Component } from '@angular/core';
import { Section1Component } from "../section1/section1.component";
import { Section2Component } from "../section2/section2.component";
import {FormsModule} from '@angular/forms';
import { Section3Component } from "../section3/section3.component";

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [Section1Component, Section2Component, FormsModule, Section3Component],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  name = 'app-switch';
  theme = 'theme1';
}
