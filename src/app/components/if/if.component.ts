import { Component, createComponent, EnvironmentInjector, inject, Injector } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Section1Component } from "../section1/section1.component";
import { Section2Component } from "../section2/section2.component";

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [FormsModule, Section1Component, Section2Component],
  templateUrl: './if.component.html',
  styleUrl: './if.component.scss'
})
export class IfComponent {

  injector = inject(EnvironmentInjector);
  name: string = 'app-if';
  theme: string = 'theme1';


}
