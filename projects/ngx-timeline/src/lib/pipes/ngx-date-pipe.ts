import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { NgxConfigDate, NgxDateObjMap, NgxDateFormat, supportedLanguageCodes, fieldConfigDate, dateConfigMap } from '../models';

@Pipe({ name: 'ngxdate', pure: false })
export class NgxDatePipe implements PipeTransform {

  constructor() {
  }

  transform(date: Date | string, dateFormat?: string, langCode?: string): string {
    let transformedDate = null;
    if (date) {
      const objDate = this.getDateConfig(langCode);
      transformedDate = new DatePipe(objDate.code).transform(new Date(date), this.dateFormat(dateFormat, objDate));
    }
    return transformedDate;
  }

  private dateFormat(dateFormat: string, configDate: NgxConfigDate): string {
    return configDate[fieldConfigDate[dateFormat]];
  }

  private getDateConfig(langCode: string): NgxConfigDate {
    const code = langCode || supportedLanguageCodes[0];
    const configDate = dateConfigMap[code] || dateConfigMap[supportedLanguageCodes[0]];
    return configDate;
  }
}
