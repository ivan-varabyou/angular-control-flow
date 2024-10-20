import { Component } from '@angular/core';
import { Section3Component } from "../section3/section3.component";

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [Section3Component],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.scss'
})
export class Section1Component {
  name = 'app-section1';
  theme = 'theme1';

  ngOnInit() {
    console.log('ngOnInit', this.name);
  }
}
