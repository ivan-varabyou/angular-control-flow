import { Component } from '@angular/core';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.scss'
})
export class Section3Component {
  name = 'app-section3';

  ngOnInit() {
    console.log('ngOnInit', this.name);
  }
}
