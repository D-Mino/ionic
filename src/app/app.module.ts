import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { NotePageModule } from '../pages/note/note.module';
import { AboutPageModule } from '../pages/about/about.module';
import { ComponentsModule } from '../components/components.module';
import { NavbarProvider } from '../providers/navbar/navbar';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AboutPageModule,
    LoginPageModule,
    NotePageModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NavbarProvider
  ]
})
export class AppModule {}
