import {NgModule} from '@angular/core';
import {NgxTimelineComponent} from './components/ngx-timeline.component';
import {NgxTimelineEventComponent}
  from './components/ngx-timeline-event/ngx-timeline-event.component';
import {CommonModule, registerLocaleData} from '@angular/common';
import {NgxDatePipe} from './pipes/ngx-date-pipe';
import localeIt from '@angular/common/locales/it';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeEs from '@angular/common/locales/es';
import localeSl from '@angular/common/locales/sl';
import localeTr from '@angular/common/locales/tr';
import localePt from '@angular/common/locales/pt';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeIt);
registerLocaleData(localeFr);
registerLocaleData(localeDe);
registerLocaleData(localeEs);
registerLocaleData(localeSl);
registerLocaleData(localeTr);
registerLocaleData(localePt);
registerLocaleData(localeRu);

@NgModule({
  declarations: [NgxTimelineComponent, NgxTimelineEventComponent, NgxDatePipe],
  imports: [CommonModule],
  exports: [NgxTimelineComponent, NgxDatePipe],
})
export class NgxTimelineModule { }
