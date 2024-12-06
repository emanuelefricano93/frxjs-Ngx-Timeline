import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeIt from '@angular/common/locales/it';
import localePl from '@angular/common/locales/pl';
import localePt from '@angular/common/locales/pt';
import localeRu from '@angular/common/locales/ru';
import localeSl from '@angular/common/locales/sl';
import localeTr from '@angular/common/locales/tr';
import {NgModule} from '@angular/core';

import {NgxTimelineComponent, NgxTimelineEventComponent} from './components';
import {NgxDatePipe} from './pipes';

registerLocaleData(localeIt);
registerLocaleData(localeFr);
registerLocaleData(localeDe);
registerLocaleData(localeEs);
registerLocaleData(localeSl);
registerLocaleData(localeTr);
registerLocaleData(localePl);
registerLocaleData(localePt);
registerLocaleData(localeRu);

@NgModule({
  declarations: [],
  imports: [NgxDatePipe, NgxTimelineComponent, NgxTimelineEventComponent],
  exports: [NgxDatePipe, NgxTimelineComponent],
})
export class NgxTimelineModule { }
