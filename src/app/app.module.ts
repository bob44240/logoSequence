import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrawLogoComponent } from './draw-logo/draw-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawLogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
