import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from "@angular/common/http";
import {UiComponent} from "./ui/components/ui/ui.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        HttpClientModule,
        FontAwesomeModule,
        SharedModule,
    ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    },
  ],
  bootstrap: [AppComponent],
  exports: [
    UiComponent
  ]
})
export class AppModule { }
