import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavbarProvider } from '../../providers/navbar/navbar';
import { ExamPage } from '../exam/exam';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(
    public _navCtrl: NavController,
    public _navParams: NavParams,
    public _nav: NavbarProvider
  ) {
  }

  ionViewDidLoad() {
    this._nav.title = 'Thi Trắc nghiệm';
    this._nav.color = "secondary";
  }

  start() {
    this._navCtrl.push(ExamPage);
  }
}
