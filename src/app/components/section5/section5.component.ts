import { Component } from '@angular/core';

@Component({
  selector: 'app-section5',
  standalone: true,
  imports: [],
  templateUrl: './section5.component.html',
  styleUrl: './section5.component.scss'
})
export class Section5Component {
  name = 'app-section5';

  ngOnInit() {
    console.log('ngOnInit', this.name);
  }
}
