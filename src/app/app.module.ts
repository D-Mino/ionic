import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP } from '@ionic-native/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { NotePageModule } from '../pages/note/note.module';
import { AboutPageModule } from '../pages/about/about.module';
import { ComponentsModule } from '../components/components.module';
import { NavbarProvider } from '../providers/navbar/navbar';
import { ExamPageModule } from '../pages/exam/exam.module';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AboutPageModule,
    LoginPageModule,
    NotePageModule,
    ComponentsModule,
    ExamPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NavbarProvider
  ]
})
export class AppModule {}
