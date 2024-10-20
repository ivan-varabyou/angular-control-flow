import { Component } from '@angular/core';
import { Section4Component } from "../section4/section4.component";

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [Section4Component],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss'
})
export class Section2Component {
  name = 'app-section2';

  ngOnInit() {
    console.log('ngOnInit', this.name);
  }
}
