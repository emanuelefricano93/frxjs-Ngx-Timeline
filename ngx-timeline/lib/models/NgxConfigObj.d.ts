export declare let supportedLanguageCodes: string[];
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
export declare let dateConfigMap: NgxDateObjMap;
export declare enum NgxDateFormat {
    DAY_MONTH_YEAR = "DAY_MONTH_YEAR",
    FULL_DATE = "FULL_DATE",
    MONTH_YEAR = "MONTH_YEAR",
    HOURS_MINUTES = "HOURS_MINUTES",
    YEAR = "YEAR"
}
export declare let fieldConfigDate: {
    MONTH_YEAR: string;
    YEAR: string;
    HOURS_MINUTES: string;
    FULL_DATE: string;
    DAY_MONTH_YEAR: string;
};
/**
 * Enum used to set the group event logic
 */
export declare enum NgxTimelineEventGroup {
    YEAR = "YEAR",
    MONTH_YEAR = "MONTH_YEAR",
    DAY_MONTH_YEAR = "DAY_MONTH_YEAR"
}
export declare let fieldsToAddEventGroup: {
    YEAR: string[];
    MONTH_YEAR: string[];
    DAY_MONTH_YEAR: string[];
};
export declare let periodKeyDateFormat: {
    YEAR: NgxDateFormat;
    MONTH_YEAR: NgxDateFormat;
    DAY_MONTH_YEAR: NgxDateFormat;
};
/**
 * Enum used to set the change side event logic
 */
export declare enum NgxTimelineEventChangeSideInGroup {
    ALL = "ALL",
    ON_DIFFERENT_HMS = "ON_DIFFERENT_HMS",
    ON_DIFFERENT_DAY = "ON_DIFFERENT_DAY",
    ON_DIFFERENT_MONTH = "ON_DIFFERENT_MONTH"
}
export declare let fieldsToCheckEventChangeSideInGroup: {
    ON_DIFFERENT_MONTH: string[];
    ON_DIFFERENT_DAY: string[];
    ON_DIFFERENT_HMS: string[];
};
//# sourceMappingURL=NgxConfigObj.d.ts.map