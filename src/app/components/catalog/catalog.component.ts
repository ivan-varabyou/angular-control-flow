import { Component } from '@angular/core';
import {LoggerService} from '../../services/logger.service';
import {SharedComponent} from '../shared/shared.component';
import { Section1Component } from "../section1/section1.component";
import { Section2Component } from "../section2/section2.component";
import { Section3Component } from "../section3/section3.component";
import { Section4Component } from "../section4/section4.component";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [SharedComponent, Section1Component, Section2Component, FormsModule, Section3Component],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {

  theme: string = 'theme2';
  name = 'app-catalog';
   constructor(private logger: LoggerService) {

   }

  ngOnInit() {
    this.logger.log('log from catalog');
  }
}
