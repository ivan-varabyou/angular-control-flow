import { Component } from '@angular/core';
import { Section1Component } from "../section1/section1.component";
import { Section2Component } from "../section2/section2.component";
import { Section3Component } from "../section3/section3.component";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-elseif',
  standalone: true,
  imports: [Section1Component, Section2Component, Section3Component, FormsModule],
  templateUrl: './elseif.component.html',
  styleUrl: './elseif.component.scss'
})
export class ElseifComponent {
  theme = 'theme1';
  name = 'app-elseif';
}
