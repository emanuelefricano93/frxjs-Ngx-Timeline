import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { NgxConfigDate, NgxDateObjMap, NgxDateFormat } from '../models/NgxDateObj';

@Pipe({ name: 'ngxdate', pure: false })
export class NgxDatePipe implements PipeTransform {

  EN = 'en';
  dateConfigMap: NgxDateObjMap = {
    en: {
      code: 'en-US',
      fullDate: 'MM/dd/yyyy h:mm a',
      dayMonthYear: 'dd MMMM yyyy',
      monthYear: 'MMMM yyyy',
      year: 'yyyy',
      hoursMinutes: 'hh:mm a'
    },
    it: {
      code: 'it-IT',
      fullDate: 'dd/MM/yyyy H:mm',
      dayMonthYear: 'dd MMMM yyyy',
      monthYear: 'MMMM yyyy',
      year: 'yyyy',
      hoursMinutes: 'HH:mm'
    },
    fr: {
      code: 'fr-FR',
      fullDate: 'dd/MM/yyyy H:mm',
      dayMonthYear: 'dd MMMM yyyy',
      monthYear: 'MMMM yyyy',
      year: 'yyyy',
      hoursMinutes: 'HH:mm'
    },
    de: {
      code: 'de',
      fullDate: 'dd/MM/yyyy H:mm',
      dayMonthYear: 'dd MMMM yyyy',
      monthYear: 'MMMM yyyy',
      year: 'yyyy',
      hoursMinutes: 'HH:mm'
    },
    es: {
      code: 'es',
      fullDate: 'dd/MM/yyyy H:mm',
      dayMonthYear: 'dd MMMM yyyy',
      monthYear: 'MMMM yyyy',
      year: 'yyyy',
      hoursMinutes: 'HH:mm'
    }
  };

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
    let format = configDate.dayMonthYear;
    if (dateFormat === NgxDateFormat.MONTH_YEAR) {
      format = configDate.monthYear;
    } else if (dateFormat === NgxDateFormat.YEAR) {
      format = configDate.year;
    } else if (dateFormat === NgxDateFormat.HOURS_MINUTES) {
      format = configDate.hoursMinutes;
    } else if (dateFormat === NgxDateFormat.FULL_DATE) {
    format = configDate.fullDate;
  }
    return format;
  }

  private getDateConfig(langCode: string) {
    const code = langCode || this.EN;
    const configDate = this.dateConfigMap[code] || this.dateConfigMap[this.EN];
    return configDate;
  }
}
