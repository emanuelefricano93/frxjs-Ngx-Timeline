import { Component, Input, Output } from '@angular/core';
import { NgxTimelineItemPosition, NgxDateFormat, NgxTimelineEventGroup, NgxTimelineEventChangeSideInGroup, periodKeyDateFormat, fieldsToCheckEventChangeSideInGroup, fieldsToAddEventGroup } from '../models';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./ngx-timeline-event/ngx-timeline-event.component";
import * as i3 from "../pipes/ngx-date-pipe";
function NgxTimelineComponent_div_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1) { return { event: a0, colSidePosition: a1 }; };
function NgxTimelineComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_2_ng_container_1_Template, 1, 0, "ng-container", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r13 = i0.ɵɵnextContext();
    const _r9 = i0.ɵɵreference(12);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r13.eventCustomTemplate || _r9)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0, item_r11, ctx_r13.ngxTimelineItemPosition.ON_LEFT));
} }
function NgxTimelineComponent_div_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { item: a0 }; };
function NgxTimelineComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_3_ng_container_1_Template, 1, 0, "ng-container", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r14 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(8);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r14.dateInstantCustomTemplate || _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, item_r11.eventInfo));
} }
function NgxTimelineComponent_div_2_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c2 = function (a0, a1) { return { period: a0, index: a1 }; };
function NgxTimelineComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_5_ng_container_1_Template, 1, 0, "ng-container", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext();
    const item_r11 = ctx_r28.$implicit;
    const index_r12 = ctx_r28.index;
    const ctx_r15 = i0.ɵɵnextContext();
    const _r7 = i0.ɵɵreference(10);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r15.periodCustomTemplate || _r7)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c2, item_r11.periodInfo, index_r12));
} }
function NgxTimelineComponent_div_2_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c3 = function (a0) { return { index: a0 }; };
function NgxTimelineComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_6_ng_container_1_Template, 1, 0, "ng-container", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r12 = i0.ɵɵnextContext().index;
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c3, index_r12));
} }
function NgxTimelineComponent_div_2_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NgxTimelineComponent_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_8_ng_container_1_Template, 1, 0, "ng-container", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r17 = i0.ɵɵnextContext();
    const _r9 = i0.ɵɵreference(12);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r17.eventCustomTemplate || _r9)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0, item_r11, ctx_r17.ngxTimelineItemPosition.ON_RIGHT));
} }
function NgxTimelineComponent_div_2_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NgxTimelineComponent_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_9_ng_container_1_Template, 1, 0, "ng-container", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r18 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(8);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r18.dateInstantCustomTemplate || _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, item_r11.eventInfo));
} }
function NgxTimelineComponent_div_2_div_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NgxTimelineComponent_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵtemplate(2, NgxTimelineComponent_div_2_div_11_ng_container_2_Template, 1, 0, "ng-container", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r19 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(8);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r19.dateInstantCustomTemplate || _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, item_r11.eventInfo));
} }
function NgxTimelineComponent_div_2_div_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NgxTimelineComponent_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_13_ng_container_1_Template, 1, 0, "ng-container", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext();
    const item_r11 = ctx_r38.$implicit;
    const index_r12 = ctx_r38.index;
    const ctx_r20 = i0.ɵɵnextContext();
    const _r7 = i0.ɵɵreference(10);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r20.periodCustomTemplate || _r7)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c2, item_r11.periodInfo, index_r12));
} }
function NgxTimelineComponent_div_2_div_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NgxTimelineComponent_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_14_ng_container_1_Template, 1, 0, "ng-container", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r12 = i0.ɵɵnextContext().index;
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c3, index_r12));
} }
function NgxTimelineComponent_div_2_div_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NgxTimelineComponent_div_2_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_16_ng_container_1_Template, 1, 0, "ng-container", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r22 = i0.ɵɵnextContext();
    const _r9 = i0.ɵɵreference(12);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r22.eventCustomTemplate || _r9)("ngTemplateOutletContext", i0.ɵɵpureFunction2(2, _c0, item_r11, ctx_r22.ngxTimelineItemPosition.ON_RIGHT));
} }
function NgxTimelineComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, NgxTimelineComponent_div_2_div_2_Template, 2, 5, "div", 10);
    i0.ɵɵtemplate(3, NgxTimelineComponent_div_2_div_3_Template, 2, 4, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 12);
    i0.ɵɵtemplate(5, NgxTimelineComponent_div_2_div_5_Template, 2, 5, "div", 13);
    i0.ɵɵtemplate(6, NgxTimelineComponent_div_2_div_6_Template, 2, 4, "div", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 15);
    i0.ɵɵtemplate(8, NgxTimelineComponent_div_2_div_8_Template, 2, 5, "div", 10);
    i0.ɵɵtemplate(9, NgxTimelineComponent_div_2_div_9_Template, 2, 4, "div", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 17);
    i0.ɵɵtemplate(11, NgxTimelineComponent_div_2_div_11_Template, 3, 4, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 18);
    i0.ɵɵtemplate(13, NgxTimelineComponent_div_2_div_13_Template, 2, 5, "div", 13);
    i0.ɵɵtemplate(14, NgxTimelineComponent_div_2_div_14_Template, 2, 4, "div", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 19);
    i0.ɵɵtemplate(16, NgxTimelineComponent_div_2_div_16_Template, 2, 5, "div", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r11.eventInfo && item_r11.position === ctx_r0.ngxTimelineItemPosition.ON_LEFT);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r11.eventInfo && item_r11.position === ctx_r0.ngxTimelineItemPosition.ON_RIGHT);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r11.periodInfo);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r11.periodInfo);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r11.eventInfo && item_r11.position === ctx_r0.ngxTimelineItemPosition.ON_RIGHT);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r11.eventInfo && item_r11.position === ctx_r0.ngxTimelineItemPosition.ON_LEFT);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r11.eventInfo);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r11.periodInfo);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r11.periodInfo);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r11.eventInfo);
} }
function NgxTimelineComponent_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
const _c4 = function (a0) { return { "transparent last-line": a0 }; };
function NgxTimelineComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 27);
    i0.ɵɵtemplate(1, NgxTimelineComponent_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 28);
    i0.ɵɵelement(2, "div", 29);
} if (rf & 2) {
    const index_r43 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.centerIconCustomTemplate || _r3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c4, index_r43 === ctx_r2.items.length - 1));
} }
function NgxTimelineComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵelement(1, "div", 31);
    i0.ɵɵelementEnd();
} }
function NgxTimelineComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "ngxdate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r45 = ctx.item;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind3(2, 1, item_r45 == null ? null : item_r45.timestamp, ctx_r6.ngxDateFormat.HOURS_MINUTES, ctx_r6.langCode), " ");
} }
const _c5 = function (a0) { return { "transparent first-line": a0 }; };
function NgxTimelineComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 29);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementStart(2, "div", 33);
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "ngxdate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "div", 27);
} if (rf & 2) {
    const period_r46 = ctx.period;
    const index_r47 = ctx.index;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c5, !index_r47));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind3(5, 2, period_r46 == null ? null : period_r46.firstDate, ctx_r8.getPeriodKeyDateFormat(), ctx_r8.langCode));
} }
function NgxTimelineComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-timeline-event", 34);
    i0.ɵɵlistener("clickEmitter", function NgxTimelineComponent_ng_template_11_Template_ngx_timeline_event_clickEmitter_0_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(); return ctx_r50.clickEmitter.next($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r48 = ctx.event;
    const colSidePosition_r49 = ctx.colSidePosition;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵproperty("event", event_r48)("langCode", ctx_r10.langCode)("enableAnimation", ctx_r10.enableAnimation)("innerEventCustomTemplate", ctx_r10.innerEventCustomTemplate)("colSidePosition", colSidePosition_r49);
} }
export class NgxTimelineComponent {
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
NgxTimelineComponent.ɵfac = function NgxTimelineComponent_Factory(t) { return new (t || NgxTimelineComponent)(); };
NgxTimelineComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxTimelineComponent, selectors: [["ngx-timeline"]], inputs: { events: "events", langCode: "langCode", enableAnimation: "enableAnimation", groupEvent: "groupEvent", changeSideInGroup: "changeSideInGroup", periodCustomTemplate: "periodCustomTemplate", eventCustomTemplate: "eventCustomTemplate", centerIconCustomTemplate: "centerIconCustomTemplate", dateInstantCustomTemplate: "dateInstantCustomTemplate", innerEventCustomTemplate: "innerEventCustomTemplate" }, outputs: { clickEmitter: "clickEmitter" }, features: [i0.ɵɵNgOnChangesFeature], decls: 13, vars: 1, consts: [[1, "main-container"], [1, "items-container"], ["class", "row", 4, "ngFor", "ngForOf"], ["centerLinesIconTemplate", ""], ["centerIconTemplate", ""], ["dateInstantTemplate", ""], ["periodTemplate", ""], ["eventTemplate", ""], [1, "row"], [1, "col", "col-left", "desktop", 3, "ngClass"], ["class", "event-outer-container", 4, "ngIf"], ["class", "hour left", 4, "ngIf"], [1, "col", "col-center", "desktop", 3, "ngClass"], ["class", "center-inner", 4, "ngIf"], ["class", "center-inner no-period-key", 4, "ngIf"], [1, "col", "col-right", "desktop", 3, "ngClass"], ["class", "hour right", 4, "ngIf"], [1, "col", "col-left", "mobile", 3, "ngClass"], [1, "col", "col-center", "mobile", 3, "ngClass"], [1, "col", "col-right", "mobile", 3, "ngClass"], [1, "event-outer-container"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "hour", "left"], [1, "center-inner"], [1, "center-inner", "no-period-key"], [1, "hour", "right"], [1, "hour-inner-container"], [1, "line"], [4, "ngTemplateOutlet"], [1, "line", 3, "ngClass"], [1, "center-icon-container"], [1, "icon"], [1, "period-container"], [1, "period-inner-container"], [3, "event", "langCode", "enableAnimation", "innerEventCustomTemplate", "colSidePosition", "clickEmitter"]], template: function NgxTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, NgxTimelineComponent_div_2_Template, 17, 16, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, NgxTimelineComponent_ng_template_3_Template, 3, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(5, NgxTimelineComponent_ng_template_5_Template, 2, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(7, NgxTimelineComponent_ng_template_7_Template, 3, 5, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(9, NgxTimelineComponent_ng_template_9_Template, 7, 8, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(11, NgxTimelineComponent_ng_template_11_Template, 1, 5, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [i1.NgForOf, i1.NgClass, i1.NgIf, i1.NgTemplateOutlet, i2.NgxTimelineEventComponent], pipes: [i3.NgxDatePipe], styles: [".main-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.items-container[_ngcontent-%COMP%]{padding:1rem 0;min-width:max(20rem,100%)}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.row[_ngcontent-%COMP%] > [class*=col-][_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.col-left[_ngcontent-%COMP%]{align-items:flex-end}.col-left[_ngcontent-%COMP%], .col-right[_ngcontent-%COMP%]{padding:0;flex:49 49 0}.col-right[_ngcontent-%COMP%]{align-items:flex-start}.col-center[_ngcontent-%COMP%]{min-height:6rem;padding:0;flex:2 2 0}.center-inner[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.center-inner[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{min-height:50%;max-height:50%;height:50%;background:#464646;width:.1rem}.center-inner[_ngcontent-%COMP%]   .line.transparent[_ngcontent-%COMP%]{background:transparent}.period-container[_ngcontent-%COMP%]{background:orange;color:#fff;margin:0;padding:.2rem .5rem}.period-container[_ngcontent-%COMP%]   .period-inner-container[_ngcontent-%COMP%]{width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:.2rem .5rem;z-index:10}.center-icon-container[_ngcontent-%COMP%]{padding:.8rem 0;display:flex;justify-content:center;align-items:center;position:absolute;height:10px;width:10px;background:#fff}.center-icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:1rem;width:1rem;border-radius:50%;background:orange;margin:0;position:absolute}.event-outer-container[_ngcontent-%COMP%]{margin:0 .5rem;width:100%}.hour[_ngcontent-%COMP%]{padding:.5rem;background:none;display:flex;justify-content:center;align-items:center}.hour.right[_ngcontent-%COMP%]{justify-content:flex-start}.hour.left[_ngcontent-%COMP%]{justify-content:flex-end}.hour[_ngcontent-%COMP%]   .hour-inner-container[_ngcontent-%COMP%]{margin:0}.desktop[_ngcontent-%COMP%]{display:flex!important}.mobile[_ngcontent-%COMP%]{display:none!important}@media (max-width:900px){.desktop[_ngcontent-%COMP%]{display:none!important}.mobile[_ngcontent-%COMP%]{display:flex!important}.event-outer-container[_ngcontent-%COMP%]{margin:.5rem .3rem}.col-left[_ngcontent-%COMP%]{align-items:flex-start}.col-left[_ngcontent-%COMP%]   .hour[_ngcontent-%COMP%]{font-size:12px;padding:0;margin-right:.3rem}.col-left.col-period[_ngcontent-%COMP%]{flex:18 18 0}.col-left.col-event[_ngcontent-%COMP%]{flex:18 18 0;padding:0;align-items:flex-end}.col-right[_ngcontent-%COMP%]{align-items:flex-start}.col-right.col-period[_ngcontent-%COMP%]{flex:77 77 0}.col-right.col-event[_ngcontent-%COMP%]{flex:77 77 0;padding:0}.col-center[_ngcontent-%COMP%]{min-height:6rem;justify-content:center;margin:0}.col-center.col-period[_ngcontent-%COMP%]{flex:5 5 0;min-height:3rem}.col-center.col-event[_ngcontent-%COMP%]{flex:5 5 0}.center-inner[_ngcontent-%COMP%], .period-container[_ngcontent-%COMP%]{align-items:center}.period-container[_ngcontent-%COMP%]{min-height:20%;height:20%;max-height:20%;background:transparent;display:flex;justify-content:center;border-radius:6px}.period-container[_ngcontent-%COMP%]   .period-inner-container[_ngcontent-%COMP%]{position:absolute;background:orange;color:#fff;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:.2rem .5rem;z-index:10}.center-icon-container[_ngcontent-%COMP%]{align-items:center;justify-content:center}.center-icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:1rem;width:1rem;position:absolute}}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxTimelineComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-timeline',
                templateUrl: './ngx-timeline.component.html',
                styleUrls: ['./ngx-timeline.scss'],
            }]
    }], function () { return []; }, { events: [{
            type: Input
        }], langCode: [{
            type: Input
        }], enableAnimation: [{
            type: Input
        }], groupEvent: [{
            type: Input
        }], changeSideInGroup: [{
            type: Input
        }], periodCustomTemplate: [{
            type: Input
        }], eventCustomTemplate: [{
            type: Input
        }], centerIconCustomTemplate: [{
            type: Input
        }], dateInstantCustomTemplate: [{
            type: Input
        }], innerEventCustomTemplate: [{
            type: Input
        }], clickEmitter: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpbWVsaW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aW1lbGluZS9zcmMvbGliL2NvbXBvbmVudHMvbmd4LXRpbWVsaW5lLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aW1lbGluZS9zcmMvbGliL2NvbXBvbmVudHMvbmd4LXRpbWVsaW5lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF5QyxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUdMLHVCQUF1QixFQUV2QixhQUFhLEVBQ2IscUJBQXFCLEVBQ3JCLGlDQUFpQyxFQUNqQyxtQkFBbUIsRUFDbkIsbUNBQW1DLEVBQ25DLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7OztJQ043Qix3QkFBZ0s7Ozs7SUFEbEssK0JBQ0U7SUFBQSxvR0FBZ0s7SUFDbEssaUJBQU07Ozs7O0lBRFcsZUFBd0Q7SUFBeEQscUVBQXdELDBHQUFBOzs7SUFHdkUsd0JBQW9JOzs7O0lBRHRJLCtCQUNFO0lBQUEsb0dBQW9JO0lBQ3RJLGlCQUFNOzs7OztJQURXLGVBQW9FO0lBQXBFLDJFQUFvRSwyRUFBQTs7O0lBTW5GLHdCQUEwSTs7OztJQUQ1SSwrQkFDRTtJQUFBLG9HQUEwSTtJQUM1SSxpQkFBTTs7Ozs7OztJQURXLGVBQTBEO0lBQTFELHNFQUEwRCx1RkFBQTs7O0lBR3pFLHdCQUFrRzs7OztJQURwRywrQkFDRTtJQUFBLG9HQUFrRztJQUNwRyxpQkFBTTs7Ozs7SUFEVyxlQUEyQztJQUEzQyxzQ0FBMkMsa0VBQUE7OztJQU0xRCx3QkFBaUs7OztJQURuSywrQkFDRTtJQUFBLG9HQUFpSztJQUNuSyxpQkFBTTs7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REFBcEIsb0JBQW9CO1FDbkJqQyw4QkFDRTtRQUFBLDhCQUNFO1FBQUEsdUVBb0RNO1FBQ1IsaUJBQU07UUFDUixpQkFBTTtRQUdOLHNIQUljO1FBRWQsc0hBSWM7UUFFZCxzSEFJYztRQUVkLHNIQVFjO1FBRWQsd0hBU2M7O1FBOUZZLGVBQVU7UUFBVixtQ0FBVTs7a0REaUJ2QixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUNuQztzQ0FLVSxNQUFNO2tCQUFkLEtBQUs7WUFJRyxRQUFRO2tCQUFoQixLQUFLO1lBSUcsZUFBZTtrQkFBdkIsS0FBSztZQUlHLFVBQVU7a0JBQWxCLEtBQUs7WUFJRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFJRyxvQkFBb0I7a0JBQTVCLEtBQUs7WUFJRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFJRyx3QkFBd0I7a0JBQWhDLEtBQUs7WUFJRyx5QkFBeUI7a0JBQWpDLEtBQUs7WUFJRyx3QkFBd0I7a0JBQWhDLEtBQUs7WUFLTixZQUFZO2tCQURYLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTmd4VGltZWxpbmVFdmVudCxcbiAgTmd4VGltZWxpbmVJdGVtLFxuICBOZ3hUaW1lbGluZUl0ZW1Qb3NpdGlvbixcbiAgTmd4VGltZWxpbmVQZXJpb2RJbmZvLFxuICBOZ3hEYXRlRm9ybWF0LFxuICBOZ3hUaW1lbGluZUV2ZW50R3JvdXAsXG4gIE5neFRpbWVsaW5lRXZlbnRDaGFuZ2VTaWRlSW5Hcm91cCxcbiAgcGVyaW9kS2V5RGF0ZUZvcm1hdCxcbiAgZmllbGRzVG9DaGVja0V2ZW50Q2hhbmdlU2lkZUluR3JvdXAsXG4gIGZpZWxkc1RvQWRkRXZlbnRHcm91cCB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXRpbWVsaW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC10aW1lbGluZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25neC10aW1lbGluZS5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE5neFRpbWVsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogTGlzdCBvZiBldmVudHMgdG8gYmUgZGlzcGxheWVkXG4gICAqL1xuICBASW5wdXQoKSBldmVudHM6IE5neFRpbWVsaW5lRXZlbnRbXTtcbiAgLyoqXG4gICAqIExhbmd1YWdlIGNvZGUgdXNlZCB0byBzaG93IHRoZSBkYXRlIGZvcm1hdHRlZFxuICAgKi9cbiAgQElucHV0KCkgbGFuZ0NvZGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBCb29sZWFuIHVzZWQgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGFuaW1hdGlvbnNcbiAgICovXG4gIEBJbnB1dCgpIGVuYWJsZUFuaW1hdGlvbiA9IHRydWU7XG4gIC8qKlxuICAgKiBMb2dpYyB0byBiZSBhcHBsaWVkIGluIG9yZGVyIHRvIGdyb3VwIGV2ZW50c1xuICAgKi9cbiAgQElucHV0KCkgZ3JvdXBFdmVudD86IE5neFRpbWVsaW5lRXZlbnRHcm91cCA9IE5neFRpbWVsaW5lRXZlbnRHcm91cC5NT05USF9ZRUFSO1xuICAvKipcbiAgICogTG9naWMgdG8gYmUgYXBwbGllZCBpbiBvcmRlciB0byBwdXQgZXZldG5zIG9uIExFRlQgb3IgUklHSFRcbiAgICovXG4gIEBJbnB1dCgpIGNoYW5nZVNpZGVJbkdyb3VwPzogTmd4VGltZWxpbmVFdmVudENoYW5nZVNpZGVJbkdyb3VwID0gTmd4VGltZWxpbmVFdmVudENoYW5nZVNpZGVJbkdyb3VwLk9OX0RJRkZFUkVOVF9EQVk7XG4gIC8qKlxuICAgKiBDdXN0b20gVGVtcGxhdGUgZGlzcGxheWVkIGJlZm9yZSBhIGdyb3VwIG9mIGV2ZW50c1xuICAgKi9cbiAgQElucHV0KCkgcGVyaW9kQ3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKlxuICAgKiBDdXN0b20gVGVtcGxhdGUgZGlzcGxheWVkIHRvIHNob3cgYSBzaW5nbGUgZXZlbnRcbiAgICovXG4gIEBJbnB1dCgpIGV2ZW50Q3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKlxuICAgKiBDdXN0b20gVGVtcGxhdGUgZGlzcGxheWVkIHRvIHNob3cgYW4gc2VwYXJhdG9yIGljb25cbiAgICovXG4gIEBJbnB1dCgpIGNlbnRlckljb25DdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqXG4gICAqIEN1c3RvbSBUZW1wbGF0ZSBkaXNwbGF5ZWQgdG8gc2hvdyB0aGUgc2lkZSBkYXRlXG4gICAqL1xuICBASW5wdXQoKSBkYXRlSW5zdGFudEN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKipcbiAgICogQ3VzdG9tIFRlbXBsYXRlIGRpc3BsYXllZCB0byBzaG93IHRoZSBpbm5lciBldmVudFxuICAgKi9cbiAgQElucHV0KCkgaW5uZXJFdmVudEN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKipcbiAgICogT3V0cHV0IGNsaWNrIGV2ZW50IGVtaXR0ZXJcbiAgICovXG4gIEBPdXRwdXQoKVxuICBjbGlja0VtaXR0ZXI6IEJlaGF2aW9yU3ViamVjdDxOZ3hUaW1lbGluZUl0ZW0+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICBncm91cHM6IHsgW2tleTogc3RyaW5nXTogTmd4VGltZWxpbmVFdmVudFtdIH0gPSB7fTtcbiAgcGVyaW9kczogTmd4VGltZWxpbmVJdGVtW10gPSBbXTtcbiAgaXRlbXM6IE5neFRpbWVsaW5lSXRlbVtdID0gW107XG4gIG5neFRpbWVsaW5lSXRlbVBvc2l0aW9uID0gTmd4VGltZWxpbmVJdGVtUG9zaXRpb247XG4gIG5neERhdGVGb3JtYXQgPSBOZ3hEYXRlRm9ybWF0O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgc2VwYXJhdG9yID0gJy8nO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZ3JvdXBFdmVudHModGhpcy5ldmVudHMpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuZ3JvdXBFdmVudHModGhpcy5ldmVudHMpO1xuICB9XG5cbiAgZ2V0UGVyaW9kS2V5RGF0ZUZvcm1hdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBwZXJpb2RLZXlEYXRlRm9ybWF0W3RoaXMuZ3JvdXBFdmVudF07XG4gIH1cblxuICBwcm90ZWN0ZWQgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5ncm91cHMgPSB7fTtcbiAgICB0aGlzLnBlcmlvZHMgPSBbXTtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gIH1cblxuICBwcm90ZWN0ZWQgZ3JvdXBFdmVudHMoZXZlbnRzOiBOZ3hUaW1lbGluZUV2ZW50W10pOiB2b2lkIHtcbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB0aGlzLnNvcnRFdmVudHMoZXZlbnRzKTtcbiAgICAgIHRoaXMuc2V0R3JvdXBzKGV2ZW50cyk7XG4gICAgICB0aGlzLnNldFBlcmlvZHMoKTtcbiAgICAgIHRoaXMuc2V0SXRlbXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgc29ydEV2ZW50cyhldmVudHM6IE5neFRpbWVsaW5lRXZlbnRbXSk6IHZvaWQge1xuICAgIGV2ZW50cy5zb3J0KChhLCBiKSA9PiBhLnRpbWVzdGFtcC5nZXRUaW1lKCkgLSBiLnRpbWVzdGFtcC5nZXRUaW1lKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldEdyb3VwcyhldmVudHM6IE5neFRpbWVsaW5lRXZlbnRbXSk6IHZvaWQge1xuICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgLy8gY29udmVyc2lvbiBmcm9tIHN0cmluZyB0byBhY3R1YWwgRGF0ZVxuICAgICAgZXZlbnQudGltZXN0YW1wID0gbmV3IERhdGUoZXZlbnQudGltZXN0YW1wKTtcbiAgICAgIGNvbnN0IHBlcmlvZEtleSA9IHRoaXMuZ2V0UGVyaW9kS2V5RnJvbUV2ZW50KGV2ZW50KTtcbiAgICAgIGlmICghdGhpcy5ncm91cHNbcGVyaW9kS2V5XSkge1xuICAgICAgICB0aGlzLmdyb3Vwc1twZXJpb2RLZXldID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLmdyb3Vwc1twZXJpb2RLZXldLnB1c2goZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldEl0ZW1zKCk6IHZvaWQge1xuICAgIHRoaXMucGVyaW9kcy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAvLyBpbnNlcnQgZmlyc3QgdGhlIHBlcmlvZFxuICAgICAgdGhpcy5pdGVtcy5wdXNoKHApO1xuICAgICAgLy8gaW4gZWFjaCBwZXJpb2QgcHV0dGluZyBpdGVtcyBvbiBsZWZ0XG4gICAgICBjb25zdCBvbkxlZnQgPSB0cnVlO1xuICAgICAgY29uc3QgcGVyaW9kSW5mbyA9IHAucGVyaW9kSW5mbztcbiAgICAgIC8vIGluc2VydCB0aGVuIGFsbCB0aGUgZXZlbnRzIGluIHRoaXMgcGVyaW9kXG4gICAgICB0aGlzLmFkZFBlcmlvZEV2ZW50cyhwZXJpb2RJbmZvLCBvbkxlZnQpO1xuICAgICAgLy8gb25MZWZ0ID0gdGhpcy5hZGRFdmVudEl0ZW1zQW5kR2V0SWZPbkxlZnQocGVyaW9kSW5mbywgb25MZWZ0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRQZXJpb2RFdmVudHMocGVyaW9kSW5mbzogTmd4VGltZWxpbmVQZXJpb2RJbmZvLCBvbkxlZnQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmdyb3Vwc1twZXJpb2RJbmZvLnBlcmlvZEtleV0uZm9yRWFjaCgoZXZlbnQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwcmV2RXZlbnQgPSB0aGlzLmdyb3Vwc1twZXJpb2RJbmZvLnBlcmlvZEtleV1baW5kZXggLSAxXTtcbiAgICAgIGlmIChpbmRleCA+IDAgJiYgdGhpcy5jb21wYXJlRXZlbnRzKHByZXZFdmVudCwgZXZlbnQpKSB7XG4gICAgICAgIG9uTGVmdCA9ICFvbkxlZnQ7XG4gICAgICB9XG4gICAgICB0aGlzLnB1c2hFdmVudE9uSXRlbXMoZXZlbnQsIG9uTGVmdCk7XG4gICAgfSk7XG4gICAgLy8gcmV0dXJuIG9uTGVmdDtcbiAgfVxuXG4gIHByb3RlY3RlZCBwdXNoRXZlbnRPbkl0ZW1zKGV2ZW50OiBOZ3hUaW1lbGluZUV2ZW50LCBvbkxlZnQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgZXZlbnRJbmZvOiB7IC4uLmV2ZW50IH0sIHBvc2l0aW9uOiBvbkxlZnQgP1xuICAgICAgICB0aGlzLm5neFRpbWVsaW5lSXRlbVBvc2l0aW9uLk9OX0xFRlQgOiB0aGlzLm5neFRpbWVsaW5lSXRlbVBvc2l0aW9uLk9OX1JJR0hUXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tcGFyZSB0aGUgZXZlbnRzIGluc2lkZSB0aGUgc2FtZSBncm91cFxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbXBhcmVFdmVudHMocHJldkV2ZW50OiBOZ3hUaW1lbGluZUV2ZW50LCBldmVudDogTmd4VGltZWxpbmVFdmVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZVNpZGVJbkdyb3VwID09PSBOZ3hUaW1lbGluZUV2ZW50Q2hhbmdlU2lkZUluR3JvdXAuQUxMIHx8XG4gICAgICB0aGlzLmNvbXBhcmVFdmVudHNGaWVsZChwcmV2RXZlbnQsIGV2ZW50LCAuLi5maWVsZHNUb0NoZWNrRXZlbnRDaGFuZ2VTaWRlSW5Hcm91cFt0aGlzLmNoYW5nZVNpZGVJbkdyb3VwXSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY29tcGFyZUV2ZW50c0ZpZWxkKHByZXZFdmVudDogTmd4VGltZWxpbmVFdmVudCwgZXZlbnQ6IE5neFRpbWVsaW5lRXZlbnQsIC4uLmZpZWxkczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmllbGRzLnJlZHVjZSgocmVzLCBmaWVsZCkgPT4gcmVzID0gcmVzIHx8IHByZXZFdmVudC50aW1lc3RhbXBbZmllbGRdKCkgIT09IGV2ZW50LnRpbWVzdGFtcFtmaWVsZF0oKSwgISFmYWxzZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0UGVyaW9kcygpOiB2b2lkIHtcbiAgICB0aGlzLnBlcmlvZHMgPSBPYmplY3Qua2V5cyh0aGlzLmdyb3VwcykubWFwKChwZXJpb2RLZXkpID0+IHtcbiAgICAgIGNvbnN0IHNwbGl0ID0gcGVyaW9kS2V5LnNwbGl0KHRoaXMuc2VwYXJhdG9yKTtcbiAgICAgIHJldHVybiB0aGlzLmdldFBlcmlvZEluZm8oc3BsaXQsIHBlcmlvZEtleSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFBlcmlvZEluZm8oc3BsaXQ6IHN0cmluZ1tdLCBwZXJpb2RLZXk6IHN0cmluZyk6IHsgcGVyaW9kSW5mbzogTmd4VGltZWxpbmVQZXJpb2RJbmZvIH0ge1xuICAgIHJldHVybiB7XG4gICAgICBwZXJpb2RJbmZvOiB7XG4gICAgICAgIHllYXI6IE51bWJlcihzcGxpdFswXSksXG4gICAgICAgIG1vbnRoOiBOdW1iZXIoc3BsaXRbMV0pLFxuICAgICAgICBkYXk6IE51bWJlcihzcGxpdFsyXSksXG4gICAgICAgIHBlcmlvZEtleSxcbiAgICAgICAgZmlyc3REYXRlOiB0aGlzLmdyb3Vwc1twZXJpb2RLZXldWzBdLnRpbWVzdGFtcCBhcyBEYXRlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFBlcmlvZEtleUZyb21FdmVudChldmVudDogTmd4VGltZWxpbmVFdmVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZpZWxkc1RvQWRkRXZlbnRHcm91cFt0aGlzLmdyb3VwRXZlbnRdLm1hcChmaWVsZCA9PiBldmVudC50aW1lc3RhbXBbZmllbGRdKCkpLmpvaW4odGhpcy5zZXBhcmF0b3IpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibWFpbi1jb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzPVwiaXRlbXMtY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaW5kZXggPSBpbmRleDtcIiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8IS0tIERFU0tUT1AgLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLWxlZnQgZGVza3RvcFwiIFtuZ0NsYXNzXT1cIml0ZW0ucGVyaW9kSW5mbyA/ICdjb2wtcGVyaW9kJyA6ICdjb2wtZXZlbnQnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LW91dGVyLWNvbnRhaW5lclwiICpuZ0lmPVwiaXRlbS5ldmVudEluZm8gJiYgaXRlbS5wb3NpdGlvbiA9PT0gbmd4VGltZWxpbmVJdGVtUG9zaXRpb24uT05fTEVGVFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImV2ZW50Q3VzdG9tVGVtcGxhdGUgfHwgZXZlbnRUZW1wbGF0ZTsgY29udGV4dDoge2V2ZW50OiBpdGVtLCBjb2xTaWRlUG9zaXRpb246IG5neFRpbWVsaW5lSXRlbVBvc2l0aW9uLk9OX0xFRlR9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhvdXIgbGVmdFwiICpuZ0lmPVwiaXRlbS5ldmVudEluZm8gJiYgaXRlbS5wb3NpdGlvbiA9PT0gbmd4VGltZWxpbmVJdGVtUG9zaXRpb24uT05fUklHSFRcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJkYXRlSW5zdGFudEN1c3RvbVRlbXBsYXRlIHx8IGRhdGVJbnN0YW50VGVtcGxhdGU7IGNvbnRleHQ6IHtpdGVtOiBpdGVtLmV2ZW50SW5mb31cIiA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtY2VudGVyIGRlc2t0b3BcIiBbbmdDbGFzc109XCJpdGVtLnBlcmlvZEluZm8gPyAnY29sLXBlcmlvZCcgOiAnY29sLWV2ZW50J1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXItaW5uZXJcIiAqbmdJZj1cIml0ZW0ucGVyaW9kSW5mb1wiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInBlcmlvZEN1c3RvbVRlbXBsYXRlIHx8IHBlcmlvZFRlbXBsYXRlOyBjb250ZXh0OiB7cGVyaW9kOiBpdGVtLnBlcmlvZEluZm8sIGluZGV4OiBpbmRleH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyLWlubmVyIG5vLXBlcmlvZC1rZXlcIiAqbmdJZj1cIiFpdGVtLnBlcmlvZEluZm9cIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjZW50ZXJMaW5lc0ljb25UZW1wbGF0ZTsgY29udGV4dDoge2luZGV4OiBpbmRleH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC1yaWdodCBkZXNrdG9wXCIgW25nQ2xhc3NdPVwiaXRlbS5wZXJpb2RJbmZvID8gJ2NvbC1wZXJpb2QnIDogJ2NvbC1ldmVudCdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtb3V0ZXItY29udGFpbmVyXCIgKm5nSWY9XCJpdGVtLmV2ZW50SW5mbyAmJiBpdGVtLnBvc2l0aW9uID09PSBuZ3hUaW1lbGluZUl0ZW1Qb3NpdGlvbi5PTl9SSUdIVFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImV2ZW50Q3VzdG9tVGVtcGxhdGUgfHwgZXZlbnRUZW1wbGF0ZTsgY29udGV4dDoge2V2ZW50OiBpdGVtLCBjb2xTaWRlUG9zaXRpb246IG5neFRpbWVsaW5lSXRlbVBvc2l0aW9uLk9OX1JJR0hUfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJob3VyIHJpZ2h0XCIgKm5nSWY9XCJpdGVtLmV2ZW50SW5mbyAmJiBpdGVtLnBvc2l0aW9uID09PSBuZ3hUaW1lbGluZUl0ZW1Qb3NpdGlvbi5PTl9MRUZUXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZGF0ZUluc3RhbnRDdXN0b21UZW1wbGF0ZSB8fCBkYXRlSW5zdGFudFRlbXBsYXRlOyBjb250ZXh0OiB7aXRlbTogaXRlbS5ldmVudEluZm99XCIgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwhLS0gTU9CSUxFIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC1sZWZ0IG1vYmlsZVwiIFtuZ0NsYXNzXT1cIml0ZW0ucGVyaW9kSW5mbyA/ICdjb2wtcGVyaW9kJyA6ICdjb2wtZXZlbnQnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhvdXIgbGVmdFwiICpuZ0lmPVwiaXRlbS5ldmVudEluZm9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJob3VyLWlubmVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZGF0ZUluc3RhbnRDdXN0b21UZW1wbGF0ZSB8fCBkYXRlSW5zdGFudFRlbXBsYXRlOyBjb250ZXh0OiB7aXRlbTogaXRlbS5ldmVudEluZm99XCIgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wtY2VudGVyIG1vYmlsZVwiIFtuZ0NsYXNzXT1cIml0ZW0ucGVyaW9kSW5mbyA/ICdjb2wtcGVyaW9kJyA6ICdjb2wtZXZlbnQnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlci1pbm5lclwiICpuZ0lmPVwiaXRlbS5wZXJpb2RJbmZvO1wiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicGVyaW9kQ3VzdG9tVGVtcGxhdGUgfHwgcGVyaW9kVGVtcGxhdGU7IGNvbnRleHQ6IHtwZXJpb2Q6IGl0ZW0ucGVyaW9kSW5mbywgaW5kZXg6IGluZGV4fVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXItaW5uZXIgbm8tcGVyaW9kLWtleVwiICpuZ0lmPVwiIWl0ZW0ucGVyaW9kSW5mbztcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjZW50ZXJMaW5lc0ljb25UZW1wbGF0ZTtjb250ZXh0OiB7aW5kZXg6IGluZGV4fVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLXJpZ2h0IG1vYmlsZVwiIFtuZ0NsYXNzXT1cIml0ZW0ucGVyaW9kSW5mbyA/ICdjb2wtcGVyaW9kJyA6ICdjb2wtZXZlbnQnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LW91dGVyLWNvbnRhaW5lclwiICpuZ0lmPVwiaXRlbS5ldmVudEluZm9cIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJldmVudEN1c3RvbVRlbXBsYXRlIHx8IGV2ZW50VGVtcGxhdGU7IGNvbnRleHQ6IHtldmVudDogaXRlbSwgY29sU2lkZVBvc2l0aW9uOiBuZ3hUaW1lbGluZUl0ZW1Qb3NpdGlvbi5PTl9SSUdIVH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG5cclxuPG5nLXRlbXBsYXRlICNjZW50ZXJMaW5lc0ljb25UZW1wbGF0ZSBsZXQtaW5kZXg9aW5kZXg+XHJcbiAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cclxuICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VudGVySWNvbkN1c3RvbVRlbXBsYXRlIHx8IGNlbnRlckljb25UZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gIDxkaXYgW25nQ2xhc3NdPVwieyd0cmFuc3BhcmVudCBsYXN0LWxpbmUnOiBpbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMX1cIiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjY2VudGVySWNvblRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjZW50ZXItaWNvbi1jb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2RhdGVJbnN0YW50VGVtcGxhdGUgbGV0LWl0ZW09aXRlbT5cclxuICA8c3Bhbj5cclxuICAgIHt7aXRlbT8udGltZXN0YW1wIHwgbmd4ZGF0ZSA6IG5neERhdGVGb3JtYXQuSE9VUlNfTUlOVVRFUyA6IGxhbmdDb2RlfX1cclxuICA8L3NwYW4+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI3BlcmlvZFRlbXBsYXRlIGxldC1wZXJpb2Q9cGVyaW9kIGxldC1pbmRleD1pbmRleD5cclxuICA8ZGl2IFtuZ0NsYXNzXT1cInsndHJhbnNwYXJlbnQgZmlyc3QtbGluZSc6ICFpbmRleH1cIiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicGVyaW9kLWNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBlcmlvZC1pbm5lci1jb250YWluZXJcIj5cclxuICAgICAgPHNwYW4+e3twZXJpb2Q/LmZpcnN0RGF0ZSB8IG5neGRhdGUgOiBnZXRQZXJpb2RLZXlEYXRlRm9ybWF0KCkgOiBsYW5nQ29kZX19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZXZlbnRUZW1wbGF0ZSBsZXQtZXZlbnQ9ZXZlbnQgbGV0LWNvbFNpZGVQb3NpdGlvbj1jb2xTaWRlUG9zaXRpb24+XHJcbiAgPG5neC10aW1lbGluZS1ldmVudFxyXG4gICAgW2V2ZW50XT1cImV2ZW50XCJcclxuICAgIFtsYW5nQ29kZV09XCJsYW5nQ29kZVwiXHJcbiAgICBbZW5hYmxlQW5pbWF0aW9uXT1cImVuYWJsZUFuaW1hdGlvblwiXHJcbiAgICBbaW5uZXJFdmVudEN1c3RvbVRlbXBsYXRlXT1cImlubmVyRXZlbnRDdXN0b21UZW1wbGF0ZVwiXHJcbiAgICBbY29sU2lkZVBvc2l0aW9uXT1cImNvbFNpZGVQb3NpdGlvblwiXHJcbiAgICAoY2xpY2tFbWl0dGVyKT1cImNsaWNrRW1pdHRlci5uZXh0KCRldmVudClcIj5cclxuICA8L25neC10aW1lbGluZS1ldmVudD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiJdfQ==