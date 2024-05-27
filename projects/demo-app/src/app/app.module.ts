import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxTimelineModule } from 'ngx-timeline';
import { TestComponent } from './test/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxTimelineModule,
    TestComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
