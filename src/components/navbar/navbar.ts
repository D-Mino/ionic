import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {

  @Input('title') title: any;
  @Input('color') color: any;
  text: string;

  constructor() {}

}
