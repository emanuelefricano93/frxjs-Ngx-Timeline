import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { NgxDateObj, NgxDateObjMap } from '../models/NgxDateObj';

@Pipe({ name: 'ngxdate', pure: false })
export class NgxDatePipe implements PipeTransform {

  EN = 'en';
  dateObjMap: NgxDateObjMap = {
    'en': {
      code: 'en-US',
      fullDate: 'MM/dd/yyyy h:mm a',
      monthYear: 'MMMM yyyy',
      hoursMinutes: 'hh:mm a'
    }, 'it': {
      code: 'it-IT',
      fullDate: 'dd/MM/yyyy H:mm',
      monthYear: 'MMMM yyyy',
      hoursMinutes: 'HH:mm'
    }
  };

  constructor() {
  }

  transform(date: Date | string, full?: boolean, monthYear?: boolean, langCode?: string): string {
    let transformedDate = null;
    if (date) {
      const objDate = this.getDateObj(langCode);
      transformedDate = new DatePipe(objDate.code).transform(new Date(date), this.dateFormat(full, monthYear, objDate));
    }
    return transformedDate;
  }

  private dateFormat(full: boolean, monthYear: boolean, objDate: NgxDateObj): string {
    return full ? objDate.fullDate : monthYear ? objDate.monthYear : objDate.hoursMinutes;
  }

  private getDateObj(langCode: string) {
    const code = langCode || this.EN;
    const objDate = this.dateObjMap[code] || this.dateObjMap[this.EN];
    return objDate;
  }
}
