import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import {ContentModule} from "../content/content.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ContentModule,
    ListComponent,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
