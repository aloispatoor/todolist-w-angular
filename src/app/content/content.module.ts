import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    TemplateComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ],
  exports: [
    TemplateComponent,
  ]
})
export class ContentModule { }
