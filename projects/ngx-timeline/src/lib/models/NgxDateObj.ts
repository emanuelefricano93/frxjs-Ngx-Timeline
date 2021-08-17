export interface NgxConfigDate {
  code: string;
  dayMonthYear: string;
  fullDate: string;
  hoursMinutes: string;
  monthYear: string;
  year: string;
}

export interface NgxDateObjMap {
  [key: string]: NgxConfigDate;
}

export enum NgxDateFormat {
  DAY_MONTH_YEAR  = 'DAY_MONTH_YEAR',
  FULL_DATE  = 'FULL_DATE',
  MONTH_YEAR  = 'MONTH_YEAR',
  HOURS_MINUTES = 'HOURS_MINUTES',
  YEAR  = 'YEAR'
}

