import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { NgxConfigDate, NgxDateObjMap } from '../models/NgxDateObj';

@Pipe({ name: 'ngxdate', pure: false })
export class NgxDatePipe implements PipeTransform {

  EN = 'en';
  dateConfigMap: NgxDateObjMap = {
    en: {
      code: 'en-US',
      fullDate: 'MM/dd/yyyy h:mm a',
      monthYear: 'MMMM yyyy',
      hoursMinutes: 'hh:mm a'
    }, it: {
      code: 'it-IT',
      fullDate: 'dd/MM/yyyy H:mm',
      monthYear: 'MMMM yyyy',
      hoursMinutes: 'HH:mm'
    }
  };

  constructor() {
  }

  transform(date: Date | string, monthYear?: boolean, langCode?: string): string {
    let transformedDate = null;
    if (date) {
      const objDate = this.getDateConfig(langCode);
      transformedDate = new DatePipe(objDate.code).transform(new Date(date), this.dateFormat(monthYear, objDate));
    }
    return transformedDate;
  }

  private dateFormat(monthYear: boolean, configDate: NgxConfigDate): string {
    return monthYear ? configDate.monthYear : configDate.hoursMinutes;
  }

  private getDateConfig(langCode: string) {
    const code = langCode || this.EN;
    const configDate = this.dateConfigMap[code] || this.dateConfigMap[this.EN];
    return configDate;
  }
}
