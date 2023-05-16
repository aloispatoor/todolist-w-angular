import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import {ContentModule} from "../content/content.module";



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentModule,
    ListComponent,
  ]
})
export class SharedModule { }
