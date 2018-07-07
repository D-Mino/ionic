import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NavbarProvider } from '../../providers/navbar/navbar';
import { Http } from '@angular/http';
/**
 * Generated class for the ExamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exam',
  templateUrl: 'exam.html',
})
export class ExamPage {

  hour: number;
  minut: number;
  second: number;
  time: string;
  stop: boolean;
  interVal: any;

  current: any;
  index: number;
  data: object[];
  answerRadio: any;
  answerCheckbox: any[];
  score: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _nav: NavbarProvider,
    public alertCtrl: AlertController,
    public _http: Http
  ) {

    this.stop = false;
    this.hour = 0;
    this.minut = 40;
    this.second = 0;
    this.data = [];
    this.index = 0;
    this.current = null;
    this.answerCheckbox = [];
    this.answerRadio = null;
    this.score = 0;
  }

  ionViewDidLoad() {
    this.checkTime();
    this.setTime();

    this._nav.title = this.time;
    this._nav.color = "primary";
    this._nav.hidden = false;

    this.interVal = setInterval(() => {
      if (this.stop) {
        clearInterval(this.interVal);
      }

      this.checkTime();
      this.setTime();

      this._nav.title = this.time;
    }, 1000);

    this.readFile();
  }

  readFile() {
    this._http.get('assets/data/exam.json')
      .subscribe(data => {
        this.data = data.json();
        this.current = this.data[this.index];
      });
  }

  writeFile(data) {
  }

  next() {
    if (!this.answerRadio && !this.answerCheckbox.length) {
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Bạn chưa chọn câu trả lời!',
        buttons: ['OK']
      });
      alert.present();

      return;
    }

    if (this.answerRadio && this.answerRadio.status) {
      this.score += 1;
    }

    if (this.answerCheckbox.length > 0) {
      let i = 0;
      this.current.reply.forEach((item: any) => {
        if (item.status) {
          i += 1;
        }
      });

      let j = 0;
      this.answerCheckbox.forEach((item: any) => {
        if (item.status) {
          j += 1;
        }
      });

      if (i !== 0 && i == j) {
        this.score += 1;
      }
    }

    if (this.index === this.data.length - 1) {
      this.stop = true;

      return;
    }

    this.answerRadio = null;
    this.answerCheckbox = [];
    this.index += 1;
    this.current = this.data[this.index];
  }

  finish() {
    this._nav.hidden = true;
    this._nav.title = "Thi Trắc nghiệm";

    clearInterval(this.interVal);

    this.navCtrl.pop();
  }

  updateScore(item, event) {
    if (event.checked) {
      this.answerCheckbox.push(item);
    } else {
      this.answerCheckbox = this.answerCheckbox.filter((i: any) => i.content !== item.content);
    }
  }

  setTime() {
    this.time = (this.hour < 10 ? '0' + this.hour.toString() : this.hour.toString())
      + ":" + (this.minut < 10 ? '0' + this.minut.toString() : this.minut.toString())
      + ":" + (this.second < 10 ? '0' + this.second.toString() : this.second.toString());
  }

  checkTime() {
    if (this.second === 0 && this.minut === 0 && this.hour === 0) {
      this.stop = true;

      return;
    }

    if (this.second > 0) {
      this.second -= 1;

      return;
    }

    if (this.second === 0 && this.minut > 0) {
      this.minut -= 1;
      this.second = 59;

      return;
    }

    if (this.minut === 0 && this.hour > 0) {
      this.hour -= 1;
      this.minut = 59;

      return;
    }

    this.stop = true;

    return;
  }
}
