import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavbarProvider } from '../../providers/navbar/navbar';

/**
 * Generated class for the NotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _nav: NavbarProvider) {
  }

  ionViewDidLoad() {
    this._nav.title = "Note";
    this._nav.color = "danger";
  }

}
