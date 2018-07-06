import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { IonicPageModule } from 'ionic-angular';
import { SildesComponent } from './sildes/sildes';
@NgModule({
	declarations: [
		NavbarComponent,
		SildesComponent
	],
	imports: [
		IonicPageModule.forChild([])
	],
	exports: [
		NavbarComponent,
		SildesComponent
	]
})
export class ComponentsModule { }
