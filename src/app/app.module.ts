import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { PanelboxComponent } from './panelbox/panelbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    PanelboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
