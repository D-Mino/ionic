import { Component } from '@angular/core';

/**
 * Generated class for the SildesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sildes',
  templateUrl: 'sildes.html'
})
export class SildesComponent {

  text: string;

  constructor() {
    console.log('Hello SildesComponent Component');
    this.text = 'Hello World';
  }

}
