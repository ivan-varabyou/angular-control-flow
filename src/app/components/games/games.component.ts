import { Component } from '@angular/core';
import {LoggerService} from '../../services/logger.service';
import {SharedComponent} from '../shared/shared.component';
import { Section3Component } from "../section3/section3.component";
import { Section4Component } from "../section4/section4.component";
import { Section5Component } from "../section5/section5.component";

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [SharedComponent, Section3Component, Section4Component, Section5Component],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('GamesComponent constructor');
  }
}
