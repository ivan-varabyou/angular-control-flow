import { Component } from '@angular/core';
import {LoggerService} from '../../services/logger.service';
import {SharedComponent} from '../shared/shared.component';
import { Section1Component } from "../section1/section1.component";
import { Section2Component } from "../section2/section2.component";
import { Section4Component } from "../section4/section4.component";
import { Section3Component } from "../section3/section3.component";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedComponent, Section1Component, Section2Component, Section4Component, Section3Component, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = 'app-home';
  theme = 'theme2';
  constructor(private logger: LoggerService) {
    this.logger.log('log from home');
  }
}
