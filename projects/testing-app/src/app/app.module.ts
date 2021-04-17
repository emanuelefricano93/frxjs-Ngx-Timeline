import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxTimelineModule } from 'ngx-timeline';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
