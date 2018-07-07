import { Injectable } from '@angular/core';

/*
  Generated class for the NavbarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NavbarProvider {

  title: string;
  color: string;
  hidden: boolean;
  constructor() {
    this.title = 'Trang Tru';
    this.color = 'primary';
    this.hidden = true;
  }

}
