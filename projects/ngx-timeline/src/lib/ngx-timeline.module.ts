import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeIt from '@angular/common/locales/it';
import localePl from '@angular/common/locales/pl';
import localePt from '@angular/common/locales/pt';
import localeRu from '@angular/common/locales/ru';
import localeSl from '@angular/common/locales/sl';
import localeTr from '@angular/common/locales/tr';
import localeNo from '@angular/common/locales/nb';
import localeNb from '@angular/common/locales/nb';
import localeNbExtra from '@angular/common/locales/extra/nb';
import { NgModule } from '@angular/core';

import { NgxTimelineComponent, NgxTimelineEventComponent } from './components';
import { NgxDatePipe } from './pipes';

registerLocaleData(localeDe);
registerLocaleData(localeEs);
registerLocaleData(localeFr);
registerLocaleData(localeIt);
registerLocaleData(localePl);
registerLocaleData(localePt);
registerLocaleData(localeRu);
registerLocaleData(localeSl);
registerLocaleData(localeTr);
registerLocaleData(localeNb, 'no', localeNbExtra);
registerLocaleData(localeNo);

@NgModule({
  imports: [NgxDatePipe, NgxTimelineComponent, NgxTimelineEventComponent],
  declarations: [],
  exports: [NgxDatePipe, NgxTimelineComponent],
})
export class NgxTimelineModule { }
