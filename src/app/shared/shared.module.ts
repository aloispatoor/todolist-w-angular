import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import {ContentModule} from "../content/content.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { IconEditComponent } from './components/icons/icon-edit/icon-edit.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { IconDeleteComponent } from './components/icons/icon-delete/icon-delete.component';
import { IconCheckComponent } from './components/icons/icon-check/icon-check.component';



@NgModule({
  declarations: [
    ListComponent,
    IconEditComponent,
    IconDeleteComponent,
    IconCheckComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports: [
    ContentModule,
    ListComponent,
    ReactiveFormsModule,
    IconCheckComponent,
    IconEditComponent,
    IconDeleteComponent
  ]
})
export class SharedModule { }
