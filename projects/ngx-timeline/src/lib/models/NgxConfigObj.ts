export const supportedLanguageCodes = ['en', 'it', 'fr', 'de', 'es', 'sl', 'tr', 'pl', 'pt', 'ru', 'no'] as const;
export type SupportedLanguageCode = typeof supportedLanguageCodes[number];
export const defaultSupportedLanguageCode: SupportedLanguageCode = supportedLanguageCodes[0];

export interface NgxConfigDate {
  code: string;
  dayMonthYear: string;
  fullDate: string;
  hoursMinutes: string;
  monthYear: string;
  year: string;
}

export const dateConfigMap: Record<SupportedLanguageCode, NgxConfigDate> = {
  en: {
    code: 'en-US',
    fullDate: 'MM/dd/yyyy h:mm a',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'hh:mm a',
  },
  it: {
    code: 'it-IT',
    fullDate: 'dd/MM/yyyy H:mm',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'HH:mm',
  },
  fr: {
    code: 'fr-FR',
    fullDate: 'dd/MM/yyyy H:mm',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'HH:mm',
  },
  de: {
    code: 'de',
    fullDate: 'dd/MM/yyyy H:mm',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'HH:mm',
  },
  es: {
    code: 'es',
    fullDate: 'dd/MM/yyyy H:mm',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'HH:mm',
  },
  sl: {
    code: 'sl-SL',
    fullDate: 'dd/MM/yyyy H:mm',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'HH:mm',
  },
  tr: {
    code: 'tr',
    fullDate: 'dd/MM/yyyy H:mm',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'HH:mm',
  },
  pl: {
    code: 'pl',
    fullDate: 'dd/MM/yyyy H:mm',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'HH:mm',
  },
  pt: {
    code: 'pt',
    fullDate: 'dd/MM/yyyy H:mm',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'HH:mm',
  },
  ru: {
    code: 'ru-RU',
    fullDate: 'dd/MM/yyyy H:mm',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'HH:mm',
  },
  no: {
    code: 'nb-NO',
    fullDate: 'dd/MM/yyyy H:mm',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'HH:mm',
  },
};

export enum NgxDateFormat {
  DAY_MONTH_YEAR = 'DAY_MONTH_YEAR',
  FULL_DATE = 'FULL_DATE',
  HOURS_MINUTES = 'HOURS_MINUTES',
  MONTH_YEAR = 'MONTH_YEAR',
  YEAR = 'YEAR',
}

export const fieldConfigDate: Record<NgxDateFormat, keyof NgxConfigDate> = {
  DAY_MONTH_YEAR: 'dayMonthYear',
  FULL_DATE: 'fullDate',
  HOURS_MINUTES: 'hoursMinutes',
  MONTH_YEAR: 'monthYear',
  YEAR: 'year',
};

/**
 * Enum used to set the group event logic
 */
export enum NgxTimelineEventGroup {
  YEAR = 'YEAR',
  MONTH_YEAR = 'MONTH_YEAR',
  DAY_MONTH_YEAR = 'DAY_MONTH_YEAR',
}

export const fieldsToAddEventGroup: Record<NgxTimelineEventGroup, string[]> = {
  YEAR: ['getFullYear'],
  MONTH_YEAR: ['getFullYear', 'getMonth'],
  DAY_MONTH_YEAR: ['getFullYear', 'getMonth', 'getDate'],
};

export const periodKeyDateFormat: Record<NgxTimelineEventGroup, NgxDateFormat> = {
  YEAR: NgxDateFormat.YEAR,
  MONTH_YEAR: NgxDateFormat.MONTH_YEAR,
  DAY_MONTH_YEAR: NgxDateFormat.DAY_MONTH_YEAR,
};

/**
 * Enum used to set the group event logic.
 */
export enum NgxTimelineOrientation {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
}

/**
 * Enum used to set the change side event logic.
 */
export enum NgxTimelineEventChangeSide {
  ALL = 'ALL',
  ALL_IN_GROUP = 'ALL_IN_GROUP',
  ON_DIFFERENT_DAY_IN_GROUP = 'ON_DIFFERENT_DAY_IN_GROUP',
  ON_DIFFERENT_HMS_IN_GROUP = 'ON_DIFFERENT_HMS_IN_GROUP',
  ON_DIFFERENT_MONTH_IN_GROUP = 'ON_DIFFERENT_MONTH_IN_GROUP',
}

export const fieldsToCheckEventChangeSideInGroup: Partial<Record<NgxTimelineEventChangeSide, string[]>> = {
  ON_DIFFERENT_DAY_IN_GROUP: ['getFullYear', 'getMonth', 'getDate'],
  ON_DIFFERENT_MONTH_IN_GROUP: ['getFullYear', 'getMonth'],
  ON_DIFFERENT_HMS_IN_GROUP: ['getFullYear', 'getMonth', 'getDate', 'getHours', 'getMinutes', 'getSeconds'],
};
