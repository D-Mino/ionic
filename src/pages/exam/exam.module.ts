import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamPage } from './exam';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ExamPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamPage),
    ComponentsModule
  ],
})
export class ExamPageModule {}
