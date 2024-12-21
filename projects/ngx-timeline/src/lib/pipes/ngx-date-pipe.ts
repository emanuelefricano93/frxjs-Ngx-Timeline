import {DatePipe} from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';

import {dateConfigMap, defaultSupportedLanguageCode, fieldConfigDate, NgxConfigDate, NgxDateFormat, SupportedLanguageCode} from '../models';

@Pipe({
  name: 'ngxdate',
})
export class NgxDatePipe implements PipeTransform {
  transform(date: Date | string, dateFormat?: NgxDateFormat | string, langCode?: SupportedLanguageCode): string | null {
    const configDate = this.getDateConfig(langCode);
    let dateFormatString = 'yyyy';
    if (dateFormat === undefined) {
      console.warn('frxjs-ngx-timeline: no date format defined.');
    } else if (dateFormat in NgxDateFormat) {
      dateFormatString = this.dateFormat(dateFormat as NgxDateFormat, configDate);
    } else if (typeof dateFormat === 'string') {
      dateFormatString = dateFormat;
    }
    return new DatePipe(configDate.code).transform(new Date(date), dateFormatString);
  }

  private dateFormat(dateFormat: NgxDateFormat, configDate: NgxConfigDate): string {
    return configDate[fieldConfigDate[dateFormat]];
  }

  private getDateConfig(langCode?: SupportedLanguageCode): NgxConfigDate {
    const code: SupportedLanguageCode = langCode ?? defaultSupportedLanguageCode;
    return dateConfigMap[code];
  }
}
