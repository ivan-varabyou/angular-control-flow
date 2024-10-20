import { Component } from '@angular/core';

@Component({
  selector: 'app-section4',
  standalone: true,
  imports: [],
  templateUrl: './section4.component.html',
  styleUrl: './section4.component.scss'
})
export class Section4Component {
  name = 'app-section4'

  ngOnInit() {
    console.log('ngOnInit', this.name);
  }
}
