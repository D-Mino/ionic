import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { NotePage } from '../pages/note/note';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  pages: Object[];

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.rootPage = HomePage;

      this.pages = [
        { title: 'Trang Tru', page: HomePage },
        { title: 'About', page: AboutPage },
        { title: 'Login', page: LoginPage },
        { title: 'Note', page: NotePage }
      ]
    });
  }

  openPage(page) {
    this.rootPage = page;
  }
}

