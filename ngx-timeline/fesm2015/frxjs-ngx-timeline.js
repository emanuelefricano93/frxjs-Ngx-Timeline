import { Component, Input, Output, Pipe, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DatePipe, registerLocaleData, CommonModule } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeEs from '@angular/common/locales/es';

let supportedLanguageCodes = ['en', 'it', 'fr', 'de', 'es'];
let dateConfigMap = {
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
var NgxDateFormat;
(function (NgxDateFormat) {
    NgxDateFormat["DAY_MONTH_YEAR"] = "DAY_MONTH_YEAR";
    NgxDateFormat["FULL_DATE"] = "FULL_DATE";
    NgxDateFormat["MONTH_YEAR"] = "MONTH_YEAR";
    NgxDateFormat["HOURS_MINUTES"] = "HOURS_MINUTES";
    NgxDateFormat["YEAR"] = "YEAR";
})(NgxDateFormat || (NgxDateFormat = {}));
let fieldConfigDate = {
    MONTH_YEAR: 'monthYear',
    YEAR: 'year',
    HOURS_MINUTES: 'hoursMinutes',
    FULL_DATE: 'fullDate',
    DAY_MONTH_YEAR: 'dayMonthYear'
};
/**
 * Enum used to set the group event logic
 */
var NgxTimelineEventGroup;
(function (NgxTimelineEventGroup) {
    NgxTimelineEventGroup["YEAR"] = "YEAR";
    NgxTimelineEventGroup["MONTH_YEAR"] = "MONTH_YEAR";
    NgxTimelineEventGroup["DAY_MONTH_YEAR"] = "DAY_MONTH_YEAR";
})(NgxTimelineEventGroup || (NgxTimelineEventGroup = {}));
let fieldsToAddEventGroup = {
    YEAR: ['getFullYear'],
    MONTH_YEAR: ['getFullYear', 'getMonth'],
    DAY_MONTH_YEAR: ['getFullYear', 'getMonth', 'getDate']
};
let periodKeyDateFormat = {
    YEAR: NgxDateFormat.YEAR,
    MONTH_YEAR: NgxDateFormat.MONTH_YEAR,
    DAY_MONTH_YEAR: NgxDateFormat.DAY_MONTH_YEAR,
};
/**
 * Enum used to set the change side event logic
 */
var NgxTimelineEventChangeSideInGroup;
(function (NgxTimelineEventChangeSideInGroup) {
    NgxTimelineEventChangeSideInGroup["ALL"] = "ALL";
    NgxTimelineEventChangeSideInGroup["ON_DIFFERENT_HMS"] = "ON_DIFFERENT_HMS";
    NgxTimelineEventChangeSideInGroup["ON_DIFFERENT_DAY"] = "ON_DIFFERENT_DAY";
    NgxTimelineEventChangeSideInGroup["ON_DIFFERENT_MONTH"] = "ON_DIFFERENT_MONTH";
})(NgxTimelineEventChangeSideInGroup || (NgxTimelineEventChangeSideInGroup = {}));
let fieldsToCheckEventChangeSideInGroup = {
    ON_DIFFERENT_MONTH: ['getFullYear', 'getMonth'],
    ON_DIFFERENT_DAY: ['getFullYear', 'getMonth', 'getDate'],
    ON_DIFFERENT_HMS: ['getFullYear', 'getMonth', 'getDate', 'getHours', 'getMinutes', 'getSeconds']
};

var NgxTimelineItemPosition;
(function (NgxTimelineItemPosition) {
    NgxTimelineItemPosition["ON_LEFT"] = "ON_LEFT";
    NgxTimelineItemPosition["ON_RIGHT"] = "ON_RIGHT";
})(NgxTimelineItemPosition || (NgxTimelineItemPosition = {}));

class NgxTimelineComponent {
    constructor() {
        /**
         * Boolean used to enable or disable the animations
         */
        this.enableAnimation = true;
        /**
         * Logic to be applied in order to group events
         */
        this.groupEvent = NgxTimelineEventGroup.MONTH_YEAR;
        /**
         * Logic to be applied in order to put evetns on LEFT or RIGHT
         */
        this.changeSideInGroup = NgxTimelineEventChangeSideInGroup.ON_DIFFERENT_DAY;
        /**
         * Output click event emitter
         */
        this.clickEmitter = new BehaviorSubject(null);
        this.groups = {};
        this.periods = [];
        this.items = [];
        this.ngxTimelineItemPosition = NgxTimelineItemPosition;
        this.ngxDateFormat = NgxDateFormat;
        this.separator = '/';
    }
    ngOnInit() {
        this.groupEvents(this.events);
    }
    ngOnChanges(changes) {
        this.groupEvents(this.events);
    }
    getPeriodKeyDateFormat() {
        return periodKeyDateFormat[this.groupEvent];
    }
    clear() {
        this.groups = {};
        this.periods = [];
        this.items = [];
    }
    groupEvents(events) {
        if (events) {
            this.clear();
            this.sortEvents(events);
            this.setGroups(events);
            this.setPeriods();
            this.setItems();
        }
    }
    sortEvents(events) {
        events.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
    }
    setGroups(events) {
        events.forEach((event) => {
            // conversion from string to actual Date
            event.timestamp = new Date(event.timestamp);
            const periodKey = this.getPeriodKeyFromEvent(event);
            if (!this.groups[periodKey]) {
                this.groups[periodKey] = [];
            }
            this.groups[periodKey].push(event);
        });
    }
    setItems() {
        this.periods.forEach((p) => {
            // insert first the period
            this.items.push(p);
            // in each period putting items on left
            const onLeft = true;
            const periodInfo = p.periodInfo;
            // insert then all the events in this period
            this.addPeriodEvents(periodInfo, onLeft);
            // onLeft = this.addEventItemsAndGetIfOnLeft(periodInfo, onLeft);
        });
    }
    addPeriodEvents(periodInfo, onLeft) {
        this.groups[periodInfo.periodKey].forEach((event, index) => {
            const prevEvent = this.groups[periodInfo.periodKey][index - 1];
            if (index > 0 && this.compareEvents(prevEvent, event)) {
                onLeft = !onLeft;
            }
            this.pushEventOnItems(event, onLeft);
        });
        // return onLeft;
    }
    pushEventOnItems(event, onLeft) {
        this.items.push({
            eventInfo: Object.assign({}, event),
            position: onLeft ?
                this.ngxTimelineItemPosition.ON_LEFT : this.ngxTimelineItemPosition.ON_RIGHT
        });
    }
    /**
     * Compare the events inside the same group
     */
    compareEvents(prevEvent, event) {
        return this.changeSideInGroup === NgxTimelineEventChangeSideInGroup.ALL ||
            this.compareEventsField(prevEvent, event, ...fieldsToCheckEventChangeSideInGroup[this.changeSideInGroup]);
    }
    compareEventsField(prevEvent, event, ...fields) {
        return fields.reduce((res, field) => res = res || prevEvent.timestamp[field]() !== event.timestamp[field](), !!false);
    }
    setPeriods() {
        this.periods = Object.keys(this.groups).map((periodKey) => {
            const split = periodKey.split(this.separator);
            return this.getPeriodInfo(split, periodKey);
        });
    }
    getPeriodInfo(split, periodKey) {
        return {
            periodInfo: {
                year: Number(split[0]),
                month: Number(split[1]),
                day: Number(split[2]),
                periodKey,
                firstDate: this.groups[periodKey][0].timestamp,
            },
        };
    }
    getPeriodKeyFromEvent(event) {
        return fieldsToAddEventGroup[this.groupEvent].map(field => event.timestamp[field]()).join(this.separator);
    }
}
NgxTimelineComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-timeline',
                template: "<div class=\"main-container\">\r\n  <div class=\"items-container\">\r\n    <div *ngFor=\"let item of items; let index = index;\" class=\"row\">\r\n      <!-- DESKTOP -->\r\n      <div class=\"col col-left desktop\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"event-outer-container\" *ngIf=\"item.eventInfo && item.position === ngxTimelineItemPosition.ON_LEFT\">\r\n          <ng-container *ngTemplateOutlet=\"eventCustomTemplate || eventTemplate; context: {event: item, colSidePosition: ngxTimelineItemPosition.ON_LEFT}\"></ng-container>\r\n        </div>\r\n        <div class=\"hour left\" *ngIf=\"item.eventInfo && item.position === ngxTimelineItemPosition.ON_RIGHT\">\r\n          <ng-container *ngTemplateOutlet=\"dateInstantCustomTemplate || dateInstantTemplate; context: {item: item.eventInfo}\" ></ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col col-center desktop\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"center-inner\" *ngIf=\"item.periodInfo\">\r\n          <ng-container *ngTemplateOutlet=\"periodCustomTemplate || periodTemplate; context: {period: item.periodInfo, index: index}\"></ng-container>\r\n        </div>\r\n        <div class=\"center-inner no-period-key\" *ngIf=\"!item.periodInfo\">\r\n          <ng-container *ngTemplateOutlet=\"centerLinesIconTemplate; context: {index: index}\"></ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col col-right desktop\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"event-outer-container\" *ngIf=\"item.eventInfo && item.position === ngxTimelineItemPosition.ON_RIGHT\">\r\n          <ng-container *ngTemplateOutlet=\"eventCustomTemplate || eventTemplate; context: {event: item, colSidePosition: ngxTimelineItemPosition.ON_RIGHT}\"></ng-container>\r\n        </div>\r\n        <div class=\"hour right\" *ngIf=\"item.eventInfo && item.position === ngxTimelineItemPosition.ON_LEFT\">\r\n          <ng-container *ngTemplateOutlet=\"dateInstantCustomTemplate || dateInstantTemplate; context: {item: item.eventInfo}\" ></ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- MOBILE -->\r\n      <div class=\"col col-left mobile\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"hour left\" *ngIf=\"item.eventInfo\">\r\n          <div class=\"hour-inner-container\">\r\n            <ng-container *ngTemplateOutlet=\"dateInstantCustomTemplate || dateInstantTemplate; context: {item: item.eventInfo}\" ></ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col col-center mobile\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"center-inner\" *ngIf=\"item.periodInfo;\">\r\n            <ng-container *ngTemplateOutlet=\"periodCustomTemplate || periodTemplate; context: {period: item.periodInfo, index: index}\"></ng-container>\r\n        </div>\r\n        <div class=\"center-inner no-period-key\" *ngIf=\"!item.periodInfo;\">\r\n          <ng-container *ngTemplateOutlet=\"centerLinesIconTemplate;context: {index: index}\"></ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col col-right mobile\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"event-outer-container\" *ngIf=\"item.eventInfo\">\r\n          <ng-container *ngTemplateOutlet=\"eventCustomTemplate || eventTemplate; context: {event: item, colSidePosition: ngxTimelineItemPosition.ON_RIGHT}\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #centerLinesIconTemplate let-index=index>\r\n  <div class=\"line\"></div>\r\n  <ng-container *ngTemplateOutlet=\"centerIconCustomTemplate || centerIconTemplate\"></ng-container>\r\n  <div [ngClass]=\"{'transparent last-line': index === items.length - 1}\" class=\"line\"></div>\r\n</ng-template>\r\n\r\n<ng-template #centerIconTemplate>\r\n  <div class=\"center-icon-container\">\r\n    <div class=\"icon\"></div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #dateInstantTemplate let-item=item>\r\n  <span>\r\n    {{item?.timestamp | ngxdate : ngxDateFormat.HOURS_MINUTES : langCode}}\r\n  </span>\r\n</ng-template>\r\n\r\n<ng-template #periodTemplate let-period=period let-index=index>\r\n  <div [ngClass]=\"{'transparent first-line': !index}\" class=\"line\"></div>\r\n  <div class=\"period-container\">\r\n    <div class=\"period-inner-container\">\r\n      <span>{{period?.firstDate | ngxdate : getPeriodKeyDateFormat() : langCode}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"line\"></div>\r\n</ng-template>\r\n\r\n<ng-template #eventTemplate let-event=event let-colSidePosition=colSidePosition>\r\n  <ngx-timeline-event\r\n    [event]=\"event\"\r\n    [langCode]=\"langCode\"\r\n    [enableAnimation]=\"enableAnimation\"\r\n    [innerEventCustomTemplate]=\"innerEventCustomTemplate\"\r\n    [colSidePosition]=\"colSidePosition\"\r\n    (clickEmitter)=\"clickEmitter.next($event)\">\r\n  </ngx-timeline-event>\r\n</ng-template>\r\n\r\n",
                styles: [".main-container{display:flex;justify-content:center;width:100%}.items-container{padding:1rem 0;min-width:max(20rem,100%)}.row{display:flex;flex-wrap:wrap}.row>[class*=col-]{display:flex;flex-direction:column;justify-content:center}.col-left{align-items:flex-end}.col-left,.col-right{padding:0;flex:49 49 0}.col-right{align-items:flex-start}.col-center{min-height:6rem;padding:0;flex:2 2 0}.center-inner{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.center-inner .line{min-height:50%;max-height:50%;height:50%;background:#464646;width:.1rem}.center-inner .line.transparent{background:transparent}.period-container{background:orange;color:#fff;margin:0;padding:.2rem .5rem}.period-container .period-inner-container{width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:.2rem .5rem;z-index:10}.center-icon-container{padding:.8rem 0;display:flex;justify-content:center;align-items:center;position:absolute;height:10px;width:10px;background:#fff}.center-icon-container .icon{height:1rem;width:1rem;border-radius:50%;background:orange;margin:0;position:absolute}.event-outer-container{margin:0 .5rem;width:100%}.hour{padding:.5rem;background:none;display:flex;justify-content:center;align-items:center}.hour.right{justify-content:flex-start}.hour.left{justify-content:flex-end}.hour .hour-inner-container{margin:0}.desktop{display:flex!important}.mobile{display:none!important}@media (max-width:900px){.desktop{display:none!important}.mobile{display:flex!important}.event-outer-container{margin:.5rem .3rem}.col-left{align-items:flex-start}.col-left .hour{font-size:12px;padding:0;margin-right:.3rem}.col-left.col-period{flex:18 18 0}.col-left.col-event{flex:18 18 0;padding:0;align-items:flex-end}.col-right{align-items:flex-start}.col-right.col-period{flex:77 77 0}.col-right.col-event{flex:77 77 0;padding:0}.col-center{min-height:6rem;justify-content:center;margin:0}.col-center.col-period{flex:5 5 0;min-height:3rem}.col-center.col-event{flex:5 5 0}.center-inner,.period-container{align-items:center}.period-container{min-height:20%;height:20%;max-height:20%;background:transparent;display:flex;justify-content:center;border-radius:6px}.period-container .period-inner-container{position:absolute;background:orange;color:#fff;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:.2rem .5rem;z-index:10}.center-icon-container{align-items:center;justify-content:center}.center-icon-container .icon{height:1rem;width:1rem;position:absolute}}"]
            },] }
];
NgxTimelineComponent.ctorParameters = () => [];
NgxTimelineComponent.propDecorators = {
    events: [{ type: Input }],
    langCode: [{ type: Input }],
    enableAnimation: [{ type: Input }],
    groupEvent: [{ type: Input }],
    changeSideInGroup: [{ type: Input }],
    periodCustomTemplate: [{ type: Input }],
    eventCustomTemplate: [{ type: Input }],
    centerIconCustomTemplate: [{ type: Input }],
    dateInstantCustomTemplate: [{ type: Input }],
    innerEventCustomTemplate: [{ type: Input }],
    clickEmitter: [{ type: Output }]
};

class NgxTimelineEventComponent {
    constructor() {
        /**
         * Boolean used to enable or disable the animations
         */
        this.enableAnimation = true;
        /**
         * Output click event emitter
         */
        this.clickEmitter = new BehaviorSubject(null);
        this.ngxTimelineItemPosition = NgxTimelineItemPosition;
        this.monthAbbr = 'MMM';
        this.dayFormat = 'dd';
    }
    getDateObj() {
        var _a;
        let day;
        let month;
        let year;
        const dateTimestamp = (_a = this.event.eventInfo) === null || _a === void 0 ? void 0 : _a.timestamp;
        if (dateTimestamp) {
            const timestamp = new Date(dateTimestamp);
            const langCode = this.getLangCode();
            month = new DatePipe(langCode).transform(timestamp, this.monthAbbr);
            day = new DatePipe(langCode).transform(timestamp, this.dayFormat);
            year = timestamp.getFullYear();
        }
        return { day, month, year };
    }
    getLangCode() {
        return this.langCode && supportedLanguageCodes.includes(this.langCode) ? this.langCode : supportedLanguageCodes[0];
    }
}
NgxTimelineEventComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-timeline-event',
                template: "<div class=\"event-wrapper-container\" (click)=\"clickEmitter.next(event)\">\n  <div *ngIf=\"colSidePosition===ngxTimelineItemPosition.ON_RIGHT\" class=\"arrow left\"></div>\n  <div class=\"event\" [ngClass]=\"{'enableAnimation': enableAnimation}\">\n    <ng-container *ngTemplateOutlet=\"innerEventCustomTemplate || innerEventContainer; context: {event: event}\">\n    </ng-container>\n  </div>\n  <div *ngIf=\"colSidePosition===ngxTimelineItemPosition.ON_LEFT\" class=\"arrow right\"></div>\n</div>\n\n<ng-template #innerEventContainer let-event=event>\n  <div class=\"event-container\" [ngClass]=\"{'reverse': colSidePosition === ngxTimelineItemPosition.ON_LEFT}\">\n    <div class=\"event-info-container\">\n      <div class=\"event-info-header\">\n        <div class=\"title-container\">{{event?.eventInfo?.title | titlecase}}</div>\n      </div>\n      <div class=\"event-info-body\">\n        <p class=\"event-info-description\">{{event?.eventInfo?.description}}</p>\n      </div>\n    </div>\n\n    <div class=\"event-divider-container\">\n      <hr/>\n    </div>\n\n    <div class=\"event-date-container\" *ngIf=\"getDateObj() as dateObj\">\n      <div>\n        <p>{{dateObj?.month}}</p>\n      </div>\n      <div>\n        <p class=\"day\">{{dateObj?.day}}</p>\n      </div>\n      <div>\n        <p>{{dateObj?.year}}</p>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
                styles: [".event-wrapper-container{display:flex;justify-content:center;align-items:center;cursor:pointer}.arrow{width:0;height:0;border-top:.5rem solid transparent;border-bottom:.5rem solid transparent;border-radius:6px;z-index:10}.arrow.right{filter:drop-shadow(2px 0 0 #244a6e22);border-left:.5rem solid #fff}.arrow.left{filter:drop-shadow(-1px 0 0 #244a6e22);border-right:.5rem solid #fff}.event{background:#fff;border-radius:.8rem;padding:1rem;width:100%;margin:1rem 0}.event.enableAnimation:hover{padding:2rem;transition:all .5s ease-in-out}.event.enableAnimation:not(:hover){padding:1rem;transition:all .5s ease-in-out}.event:not(.hour){background:#fff 0 0 no-repeat padding-box;box-shadow:0 3px 6px rgba(36,74,110,.3215686274509804)}.event.hour{padding:.5rem;background:none;display:flex;justify-content:center;align-items:center}.event.hour.right{justify-content:flex-start}.event.hour.left{justify-content:flex-end}.event .hour-inner-container{margin:0}.event-container{display:flex}.event-container.reverse{flex-direction:row-reverse}.event-container .event-info-container{display:flex;flex-direction:column;align-items:flex-start;padding:.1rem;flex:88 88 0}.event-container .event-info-container .event-info-header{display:flex;align-items:center;width:100%}.event-container .event-info-container .event-info-header .icon-container{margin-right:.3rem}.event-container .event-info-container .event-info-header .icon-container nb-icon{color:orange;width:1.5rem;height:1.5rem;margin-bottom:.1rem}.event-container .event-info-container .event-info-header .title-container{font-weight:700;font-size:15px}.event-container .event-info-container .event-info-body{padding:.5rem 0;display:flex;flex-direction:column;justify-content:flex-start;overflow-wrap:anywhere}.event-container .event-info-container .event-info-body .event-info-description{margin-bottom:.5rem;font-size:13px}.event-container .event-info-container .event-info-body .category-container,.event-container .event-info-container .event-info-body .expiration-container{display:flex;font-size:13px;justify-content:flex-start;align-items:center}.event-container .event-info-container .event-info-body .category-container p,.event-container .event-info-container .event-info-body .expiration-container p{font-size:13px;margin:0}.event-container .event-info-container .event-info-body .category-container .category-label,.event-container .event-info-container .event-info-body .category-container .expiration-label,.event-container .event-info-container .event-info-body .expiration-container .category-label,.event-container .event-info-container .event-info-body .expiration-container .expiration-label{margin-right:.5rem}.event-container .event-info-container .event-info-body .category-container .category-value,.event-container .event-info-container .event-info-body .category-container .expiration-value,.event-container .event-info-container .event-info-body .expiration-container .category-value,.event-container .event-info-container .event-info-body .expiration-container .expiration-value{font-weight:700}.event-container .event-info-container .event-info-footer{font-size:15px;cursor:pointer;padding-top:1rem}.event-container .event-info-container .event-info-footer .footer-inner-container{display:flex;justify-content:flex-start;align-items:flex-end}.event-container .event-info-container .event-info-footer .footer-inner-container nb-icon{color:#006cb4;width:1rem;height:1rem;margin-bottom:.1rem}.event-container .event-info-container .event-info-footer p{margin:0;color:#006cb4}.event-container .event-divider-container{display:flex;justify-content:center;align-items:center;padding:.1rem;flex:5 5 0}.event-container .event-divider-container hr{height:100%;width:1px;background:#e9e9e9}.event-container .event-date-container{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:.1rem;flex:15 15 0}.event-container .event-date-container p{margin:0;text-align:center}.event-container .event-date-container p.day{font-size:32px;font-weight:700;padding:.5rem 0}"]
            },] }
];
NgxTimelineEventComponent.ctorParameters = () => [];
NgxTimelineEventComponent.propDecorators = {
    event: [{ type: Input }],
    colSidePosition: [{ type: Input }],
    langCode: [{ type: Input }],
    innerEventCustomTemplate: [{ type: Input }],
    enableAnimation: [{ type: Input }],
    clickEmitter: [{ type: Output }]
};

class NgxDatePipe {
    constructor() {
    }
    transform(date, dateFormat, langCode) {
        let transformedDate = null;
        if (date) {
            const objDate = this.getDateConfig(langCode);
            transformedDate = new DatePipe(objDate.code).transform(new Date(date), this.dateFormat(dateFormat, objDate));
        }
        return transformedDate;
    }
    dateFormat(dateFormat, configDate) {
        return configDate[fieldConfigDate[dateFormat]];
    }
    getDateConfig(langCode) {
        const code = langCode || supportedLanguageCodes[0];
        const configDate = dateConfigMap[code] || dateConfigMap[supportedLanguageCodes[0]];
        return configDate;
    }
}
NgxDatePipe.decorators = [
    { type: Pipe, args: [{ name: 'ngxdate', pure: false },] }
];
NgxDatePipe.ctorParameters = () => [];

registerLocaleData(localeIt);
registerLocaleData(localeFr);
registerLocaleData(localeDe);
registerLocaleData(localeEs);
class NgxTimelineModule {
}
NgxTimelineModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxTimelineComponent, NgxTimelineEventComponent, NgxDatePipe],
                imports: [CommonModule],
                exports: [NgxTimelineComponent, NgxDatePipe]
            },] }
];

/*
 * Public API Surface of ngx-timeline
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxDateFormat, NgxDatePipe, NgxTimelineComponent, NgxTimelineEventChangeSideInGroup, NgxTimelineEventComponent, NgxTimelineEventGroup, NgxTimelineItemPosition, NgxTimelineModule, dateConfigMap, fieldConfigDate, fieldsToAddEventGroup, fieldsToCheckEventChangeSideInGroup, periodKeyDateFormat, supportedLanguageCodes, NgxTimelineComponent as ɵa, NgxTimelineEventComponent as ɵb, NgxDatePipe as ɵc };
//# sourceMappingURL=frxjs-ngx-timeline.js.map
