import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavbarProvider } from '../../providers/navbar/navbar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public _nav: NavbarProvider) {
  }

  ionViewDidLoad(){
    this._nav.title = "Trang Tru";
    this._nav.color = "primary";
  }
}
