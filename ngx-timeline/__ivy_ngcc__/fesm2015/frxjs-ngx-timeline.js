import { Component, Input, Output, Pipe, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DatePipe, registerLocaleData, CommonModule } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeEs from '@angular/common/locales/es';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function NgxTimelineComponent_div_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0, a1) { return { event: a0, colSidePosition: a1 }; };
function NgxTimelineComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_2_ng_container_1_Template, 1, 0, "ng-container", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r13 = ɵngcc0.ɵɵnextContext();
    const _r9 = ɵngcc0.ɵɵreference(12);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r13.eventCustomTemplate || _r9)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c0, item_r11, ctx_r13.ngxTimelineItemPosition.ON_LEFT));
} }
function NgxTimelineComponent_div_2_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c1 = function (a0) { return { item: a0 }; };
function NgxTimelineComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_3_ng_container_1_Template, 1, 0, "ng-container", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r14 = ɵngcc0.ɵɵnextContext();
    const _r5 = ɵngcc0.ɵɵreference(8);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r14.dateInstantCustomTemplate || _r5)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, item_r11.eventInfo));
} }
function NgxTimelineComponent_div_2_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c2 = function (a0, a1) { return { period: a0, index: a1 }; };
function NgxTimelineComponent_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 23);
    ɵngcc0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_5_ng_container_1_Template, 1, 0, "ng-container", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = ɵngcc0.ɵɵnextContext();
    const item_r11 = ctx_r28.$implicit;
    const index_r12 = ctx_r28.index;
    const ctx_r15 = ɵngcc0.ɵɵnextContext();
    const _r7 = ɵngcc0.ɵɵreference(10);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r15.periodCustomTemplate || _r7)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c2, item_r11.periodInfo, index_r12));
} }
function NgxTimelineComponent_div_2_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c3 = function (a0) { return { index: a0 }; };
function NgxTimelineComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_6_ng_container_1_Template, 1, 0, "ng-container", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r12 = ɵngcc0.ɵɵnextContext().index;
    ɵngcc0.ɵɵnextContext();
    const _r1 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c3, index_r12));
} }
function NgxTimelineComponent_div_2_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NgxTimelineComponent_div_2_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_8_ng_container_1_Template, 1, 0, "ng-container", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r17 = ɵngcc0.ɵɵnextContext();
    const _r9 = ɵngcc0.ɵɵreference(12);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r17.eventCustomTemplate || _r9)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c0, item_r11, ctx_r17.ngxTimelineItemPosition.ON_RIGHT));
} }
function NgxTimelineComponent_div_2_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NgxTimelineComponent_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 25);
    ɵngcc0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_9_ng_container_1_Template, 1, 0, "ng-container", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r18 = ɵngcc0.ɵɵnextContext();
    const _r5 = ɵngcc0.ɵɵreference(8);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r18.dateInstantCustomTemplate || _r5)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, item_r11.eventInfo));
} }
function NgxTimelineComponent_div_2_div_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NgxTimelineComponent_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 22);
    ɵngcc0.ɵɵelementStart(1, "div", 26);
    ɵngcc0.ɵɵtemplate(2, NgxTimelineComponent_div_2_div_11_ng_container_2_Template, 1, 0, "ng-container", 21);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r19 = ɵngcc0.ɵɵnextContext();
    const _r5 = ɵngcc0.ɵɵreference(8);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r19.dateInstantCustomTemplate || _r5)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c1, item_r11.eventInfo));
} }
function NgxTimelineComponent_div_2_div_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NgxTimelineComponent_div_2_div_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 23);
    ɵngcc0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_13_ng_container_1_Template, 1, 0, "ng-container", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r38 = ɵngcc0.ɵɵnextContext();
    const item_r11 = ctx_r38.$implicit;
    const index_r12 = ctx_r38.index;
    const ctx_r20 = ɵngcc0.ɵɵnextContext();
    const _r7 = ɵngcc0.ɵɵreference(10);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r20.periodCustomTemplate || _r7)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c2, item_r11.periodInfo, index_r12));
} }
function NgxTimelineComponent_div_2_div_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NgxTimelineComponent_div_2_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 24);
    ɵngcc0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_14_ng_container_1_Template, 1, 0, "ng-container", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r12 = ɵngcc0.ɵɵnextContext().index;
    ɵngcc0.ɵɵnextContext();
    const _r1 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c3, index_r12));
} }
function NgxTimelineComponent_div_2_div_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NgxTimelineComponent_div_2_div_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵtemplate(1, NgxTimelineComponent_div_2_div_16_ng_container_1_Template, 1, 0, "ng-container", 21);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r22 = ɵngcc0.ɵɵnextContext();
    const _r9 = ɵngcc0.ɵɵreference(12);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r22.eventCustomTemplate || _r9)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c0, item_r11, ctx_r22.ngxTimelineItemPosition.ON_RIGHT));
} }
function NgxTimelineComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵelementStart(1, "div", 9);
    ɵngcc0.ɵɵtemplate(2, NgxTimelineComponent_div_2_div_2_Template, 2, 5, "div", 10);
    ɵngcc0.ɵɵtemplate(3, NgxTimelineComponent_div_2_div_3_Template, 2, 4, "div", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "div", 12);
    ɵngcc0.ɵɵtemplate(5, NgxTimelineComponent_div_2_div_5_Template, 2, 5, "div", 13);
    ɵngcc0.ɵɵtemplate(6, NgxTimelineComponent_div_2_div_6_Template, 2, 4, "div", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "div", 15);
    ɵngcc0.ɵɵtemplate(8, NgxTimelineComponent_div_2_div_8_Template, 2, 5, "div", 10);
    ɵngcc0.ɵɵtemplate(9, NgxTimelineComponent_div_2_div_9_Template, 2, 4, "div", 16);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(10, "div", 17);
    ɵngcc0.ɵɵtemplate(11, NgxTimelineComponent_div_2_div_11_Template, 3, 4, "div", 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(12, "div", 18);
    ɵngcc0.ɵɵtemplate(13, NgxTimelineComponent_div_2_div_13_Template, 2, 5, "div", 13);
    ɵngcc0.ɵɵtemplate(14, NgxTimelineComponent_div_2_div_14_Template, 2, 4, "div", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(15, "div", 19);
    ɵngcc0.ɵɵtemplate(16, NgxTimelineComponent_div_2_div_16_Template, 2, 5, "div", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r11.eventInfo && item_r11.position === ctx_r0.ngxTimelineItemPosition.ON_LEFT);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r11.eventInfo && item_r11.position === ctx_r0.ngxTimelineItemPosition.ON_RIGHT);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r11.periodInfo);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !item_r11.periodInfo);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r11.eventInfo && item_r11.position === ctx_r0.ngxTimelineItemPosition.ON_RIGHT);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r11.eventInfo && item_r11.position === ctx_r0.ngxTimelineItemPosition.ON_LEFT);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r11.eventInfo);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r11.periodInfo);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !item_r11.periodInfo);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r11.eventInfo);
} }
function NgxTimelineComponent_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c4 = function (a0) { return { "transparent last-line": a0 }; };
function NgxTimelineComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 27);
    ɵngcc0.ɵɵtemplate(1, NgxTimelineComponent_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 28);
    ɵngcc0.ɵɵelement(2, "div", 29);
} if (rf & 2) {
    const index_r43 = ctx.index;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    const _r3 = ɵngcc0.ɵɵreference(6);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2.centerIconCustomTemplate || _r3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(2, _c4, index_r43 === ctx_r2.items.length - 1));
} }
function NgxTimelineComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 30);
    ɵngcc0.ɵɵelement(1, "div", 31);
    ɵngcc0.ɵɵelementEnd();
} }
function NgxTimelineComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵpipe(2, "ngxdate");
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r45 = ctx.item;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ɵngcc0.ɵɵpipeBind3(2, 1, item_r45 == null ? null : item_r45.timestamp, ctx_r6.ngxDateFormat.HOURS_MINUTES, ctx_r6.langCode), " ");
} }
const _c5 = function (a0) { return { "transparent first-line": a0 }; };
function NgxTimelineComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 29);
    ɵngcc0.ɵɵelementStart(1, "div", 32);
    ɵngcc0.ɵɵelementStart(2, "div", 33);
    ɵngcc0.ɵɵelementStart(3, "span");
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵpipe(5, "ngxdate");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(6, "div", 27);
} if (rf & 2) {
    const period_r46 = ctx.period;
    const index_r47 = ctx.index;
    const ctx_r8 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c5, !index_r47));
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind3(5, 2, period_r46 == null ? null : period_r46.firstDate, ctx_r8.getPeriodKeyDateFormat(), ctx_r8.langCode));
} }
function NgxTimelineComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r51 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "ngx-timeline-event", 34);
    ɵngcc0.ɵɵlistener("clickEmitter", function NgxTimelineComponent_ng_template_11_Template_ngx_timeline_event_clickEmitter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r51); const ctx_r50 = ɵngcc0.ɵɵnextContext(); return ctx_r50.clickEmitter.next($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r48 = ctx.event;
    const colSidePosition_r49 = ctx.colSidePosition;
    const ctx_r10 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("event", event_r48)("langCode", ctx_r10.langCode)("enableAnimation", ctx_r10.enableAnimation)("innerEventCustomTemplate", ctx_r10.innerEventCustomTemplate)("colSidePosition", colSidePosition_r49);
} }
function NgxTimelineEventComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 6);
} }
function NgxTimelineEventComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function NgxTimelineEventComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 7);
} }
function NgxTimelineEventComponent_ng_template_5_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 16);
    ɵngcc0.ɵɵelementStart(1, "div");
    ɵngcc0.ɵɵelementStart(2, "p");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "div");
    ɵngcc0.ɵɵelementStart(5, "p", 17);
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "div");
    ɵngcc0.ɵɵelementStart(8, "p");
    ɵngcc0.ɵɵtext(9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const dateObj_r7 = ctx.ngIf;
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(dateObj_r7 == null ? null : dateObj_r7.month);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(dateObj_r7 == null ? null : dateObj_r7.day);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(dateObj_r7 == null ? null : dateObj_r7.year);
} }
const _c6 = function (a0) { return { "reverse": a0 }; };
function NgxTimelineEventComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 8);
    ɵngcc0.ɵɵelementStart(1, "div", 9);
    ɵngcc0.ɵɵelementStart(2, "div", 10);
    ɵngcc0.ɵɵelementStart(3, "div", 11);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵpipe(5, "titlecase");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "div", 12);
    ɵngcc0.ɵɵelementStart(7, "p", 13);
    ɵngcc0.ɵɵtext(8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(9, "div", 14);
    ɵngcc0.ɵɵelement(10, "hr");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(11, NgxTimelineEventComponent_ng_template_5_div_11_Template, 10, 3, "div", 15);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r5 = ctx.event;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c6, ctx_r4.colSidePosition === ctx_r4.ngxTimelineItemPosition.ON_LEFT));
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate(ɵngcc0.ɵɵpipeBind1(5, 4, event_r5 == null ? null : event_r5.eventInfo == null ? null : event_r5.eventInfo.title));
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate(event_r5 == null ? null : event_r5.eventInfo == null ? null : event_r5.eventInfo.description);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r4.getDateObj());
} }
const _c7 = function (a0) { return { "enableAnimation": a0 }; };
const _c8 = function (a0) { return { event: a0 }; };
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
NgxTimelineComponent.ɵfac = function NgxTimelineComponent_Factory(t) { return new (t || NgxTimelineComponent)(); };
NgxTimelineComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxTimelineComponent, selectors: [["ngx-timeline"]], inputs: { enableAnimation: "enableAnimation", groupEvent: "groupEvent", changeSideInGroup: "changeSideInGroup", events: "events", langCode: "langCode", periodCustomTemplate: "periodCustomTemplate", eventCustomTemplate: "eventCustomTemplate", centerIconCustomTemplate: "centerIconCustomTemplate", dateInstantCustomTemplate: "dateInstantCustomTemplate", innerEventCustomTemplate: "innerEventCustomTemplate" }, outputs: { clickEmitter: "clickEmitter" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 13, vars: 1, consts: [[1, "main-container"], [1, "items-container"], ["class", "row", 4, "ngFor", "ngForOf"], ["centerLinesIconTemplate", ""], ["centerIconTemplate", ""], ["dateInstantTemplate", ""], ["periodTemplate", ""], ["eventTemplate", ""], [1, "row"], [1, "col", "col-left", "desktop", 3, "ngClass"], ["class", "event-outer-container", 4, "ngIf"], ["class", "hour left", 4, "ngIf"], [1, "col", "col-center", "desktop", 3, "ngClass"], ["class", "center-inner", 4, "ngIf"], ["class", "center-inner no-period-key", 4, "ngIf"], [1, "col", "col-right", "desktop", 3, "ngClass"], ["class", "hour right", 4, "ngIf"], [1, "col", "col-left", "mobile", 3, "ngClass"], [1, "col", "col-center", "mobile", 3, "ngClass"], [1, "col", "col-right", "mobile", 3, "ngClass"], [1, "event-outer-container"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "hour", "left"], [1, "center-inner"], [1, "center-inner", "no-period-key"], [1, "hour", "right"], [1, "hour-inner-container"], [1, "line"], [4, "ngTemplateOutlet"], [1, "line", 3, "ngClass"], [1, "center-icon-container"], [1, "icon"], [1, "period-container"], [1, "period-inner-container"], [3, "event", "langCode", "enableAnimation", "innerEventCustomTemplate", "colSidePosition", "clickEmitter"]], template: function NgxTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵtemplate(2, NgxTimelineComponent_div_2_Template, 17, 16, "div", 2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, NgxTimelineComponent_ng_template_3_Template, 3, 4, "ng-template", null, 3, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(5, NgxTimelineComponent_ng_template_5_Template, 2, 0, "ng-template", null, 4, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(7, NgxTimelineComponent_ng_template_7_Template, 3, 5, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(9, NgxTimelineComponent_ng_template_9_Template, 7, 8, "ng-template", null, 6, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵtemplate(11, NgxTimelineComponent_ng_template_11_Template, 1, 5, "ng-template", null, 7, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: function () { return [ɵngcc1.NgForOf, ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, NgxTimelineEventComponent]; }, pipes: function () { return [NgxDatePipe]; }, styles: [".main-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.items-container[_ngcontent-%COMP%]{padding:1rem 0;min-width:max(20rem,100%)}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.row[_ngcontent-%COMP%] > [class*=col-][_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.col-left[_ngcontent-%COMP%]{align-items:flex-end}.col-left[_ngcontent-%COMP%], .col-right[_ngcontent-%COMP%]{padding:0;flex:49 49 0}.col-right[_ngcontent-%COMP%]{align-items:flex-start}.col-center[_ngcontent-%COMP%]{min-height:6rem;padding:0;flex:2 2 0}.center-inner[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.center-inner[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{min-height:50%;max-height:50%;height:50%;background:#464646;width:.1rem}.center-inner[_ngcontent-%COMP%]   .line.transparent[_ngcontent-%COMP%]{background:transparent}.period-container[_ngcontent-%COMP%]{background:orange;color:#fff;margin:0;padding:.2rem .5rem}.period-container[_ngcontent-%COMP%]   .period-inner-container[_ngcontent-%COMP%]{width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:.2rem .5rem;z-index:10}.center-icon-container[_ngcontent-%COMP%]{padding:.8rem 0;display:flex;justify-content:center;align-items:center;position:absolute;height:10px;width:10px;background:#fff}.center-icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:1rem;width:1rem;border-radius:50%;background:orange;margin:0;position:absolute}.event-outer-container[_ngcontent-%COMP%]{margin:0 .5rem;width:100%}.hour[_ngcontent-%COMP%]{padding:.5rem;background:none;display:flex;justify-content:center;align-items:center}.hour.right[_ngcontent-%COMP%]{justify-content:flex-start}.hour.left[_ngcontent-%COMP%]{justify-content:flex-end}.hour[_ngcontent-%COMP%]   .hour-inner-container[_ngcontent-%COMP%]{margin:0}.desktop[_ngcontent-%COMP%]{display:flex!important}.mobile[_ngcontent-%COMP%]{display:none!important}@media (max-width:900px){.desktop[_ngcontent-%COMP%]{display:none!important}.mobile[_ngcontent-%COMP%]{display:flex!important}.event-outer-container[_ngcontent-%COMP%]{margin:.5rem .3rem}.col-left[_ngcontent-%COMP%]{align-items:flex-start}.col-left[_ngcontent-%COMP%]   .hour[_ngcontent-%COMP%]{font-size:12px;padding:0;margin-right:.3rem}.col-left.col-period[_ngcontent-%COMP%]{flex:18 18 0}.col-left.col-event[_ngcontent-%COMP%]{flex:18 18 0;padding:0;align-items:flex-end}.col-right[_ngcontent-%COMP%]{align-items:flex-start}.col-right.col-period[_ngcontent-%COMP%]{flex:77 77 0}.col-right.col-event[_ngcontent-%COMP%]{flex:77 77 0;padding:0}.col-center[_ngcontent-%COMP%]{min-height:6rem;justify-content:center;margin:0}.col-center.col-period[_ngcontent-%COMP%]{flex:5 5 0;min-height:3rem}.col-center.col-event[_ngcontent-%COMP%]{flex:5 5 0}.center-inner[_ngcontent-%COMP%], .period-container[_ngcontent-%COMP%]{align-items:center}.period-container[_ngcontent-%COMP%]{min-height:20%;height:20%;max-height:20%;background:transparent;display:flex;justify-content:center;border-radius:6px}.period-container[_ngcontent-%COMP%]   .period-inner-container[_ngcontent-%COMP%]{position:absolute;background:orange;color:#fff;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:.2rem .5rem;z-index:10}.center-icon-container[_ngcontent-%COMP%]{align-items:center;justify-content:center}.center-icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:1rem;width:1rem;position:absolute}}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxTimelineComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-timeline',
                template: "<div class=\"main-container\">\r\n  <div class=\"items-container\">\r\n    <div *ngFor=\"let item of items; let index = index;\" class=\"row\">\r\n      <!-- DESKTOP -->\r\n      <div class=\"col col-left desktop\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"event-outer-container\" *ngIf=\"item.eventInfo && item.position === ngxTimelineItemPosition.ON_LEFT\">\r\n          <ng-container *ngTemplateOutlet=\"eventCustomTemplate || eventTemplate; context: {event: item, colSidePosition: ngxTimelineItemPosition.ON_LEFT}\"></ng-container>\r\n        </div>\r\n        <div class=\"hour left\" *ngIf=\"item.eventInfo && item.position === ngxTimelineItemPosition.ON_RIGHT\">\r\n          <ng-container *ngTemplateOutlet=\"dateInstantCustomTemplate || dateInstantTemplate; context: {item: item.eventInfo}\" ></ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col col-center desktop\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"center-inner\" *ngIf=\"item.periodInfo\">\r\n          <ng-container *ngTemplateOutlet=\"periodCustomTemplate || periodTemplate; context: {period: item.periodInfo, index: index}\"></ng-container>\r\n        </div>\r\n        <div class=\"center-inner no-period-key\" *ngIf=\"!item.periodInfo\">\r\n          <ng-container *ngTemplateOutlet=\"centerLinesIconTemplate; context: {index: index}\"></ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col col-right desktop\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"event-outer-container\" *ngIf=\"item.eventInfo && item.position === ngxTimelineItemPosition.ON_RIGHT\">\r\n          <ng-container *ngTemplateOutlet=\"eventCustomTemplate || eventTemplate; context: {event: item, colSidePosition: ngxTimelineItemPosition.ON_RIGHT}\"></ng-container>\r\n        </div>\r\n        <div class=\"hour right\" *ngIf=\"item.eventInfo && item.position === ngxTimelineItemPosition.ON_LEFT\">\r\n          <ng-container *ngTemplateOutlet=\"dateInstantCustomTemplate || dateInstantTemplate; context: {item: item.eventInfo}\" ></ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- MOBILE -->\r\n      <div class=\"col col-left mobile\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"hour left\" *ngIf=\"item.eventInfo\">\r\n          <div class=\"hour-inner-container\">\r\n            <ng-container *ngTemplateOutlet=\"dateInstantCustomTemplate || dateInstantTemplate; context: {item: item.eventInfo}\" ></ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col col-center mobile\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"center-inner\" *ngIf=\"item.periodInfo;\">\r\n            <ng-container *ngTemplateOutlet=\"periodCustomTemplate || periodTemplate; context: {period: item.periodInfo, index: index}\"></ng-container>\r\n        </div>\r\n        <div class=\"center-inner no-period-key\" *ngIf=\"!item.periodInfo;\">\r\n          <ng-container *ngTemplateOutlet=\"centerLinesIconTemplate;context: {index: index}\"></ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col col-right mobile\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"event-outer-container\" *ngIf=\"item.eventInfo\">\r\n          <ng-container *ngTemplateOutlet=\"eventCustomTemplate || eventTemplate; context: {event: item, colSidePosition: ngxTimelineItemPosition.ON_RIGHT}\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #centerLinesIconTemplate let-index=index>\r\n  <div class=\"line\"></div>\r\n  <ng-container *ngTemplateOutlet=\"centerIconCustomTemplate || centerIconTemplate\"></ng-container>\r\n  <div [ngClass]=\"{'transparent last-line': index === items.length - 1}\" class=\"line\"></div>\r\n</ng-template>\r\n\r\n<ng-template #centerIconTemplate>\r\n  <div class=\"center-icon-container\">\r\n    <div class=\"icon\"></div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #dateInstantTemplate let-item=item>\r\n  <span>\r\n    {{item?.timestamp | ngxdate : ngxDateFormat.HOURS_MINUTES : langCode}}\r\n  </span>\r\n</ng-template>\r\n\r\n<ng-template #periodTemplate let-period=period let-index=index>\r\n  <div [ngClass]=\"{'transparent first-line': !index}\" class=\"line\"></div>\r\n  <div class=\"period-container\">\r\n    <div class=\"period-inner-container\">\r\n      <span>{{period?.firstDate | ngxdate : getPeriodKeyDateFormat() : langCode}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"line\"></div>\r\n</ng-template>\r\n\r\n<ng-template #eventTemplate let-event=event let-colSidePosition=colSidePosition>\r\n  <ngx-timeline-event\r\n    [event]=\"event\"\r\n    [langCode]=\"langCode\"\r\n    [enableAnimation]=\"enableAnimation\"\r\n    [innerEventCustomTemplate]=\"innerEventCustomTemplate\"\r\n    [colSidePosition]=\"colSidePosition\"\r\n    (clickEmitter)=\"clickEmitter.next($event)\">\r\n  </ngx-timeline-event>\r\n</ng-template>\r\n\r\n",
                styles: [".main-container{display:flex;justify-content:center;width:100%}.items-container{padding:1rem 0;min-width:max(20rem,100%)}.row{display:flex;flex-wrap:wrap}.row>[class*=col-]{display:flex;flex-direction:column;justify-content:center}.col-left{align-items:flex-end}.col-left,.col-right{padding:0;flex:49 49 0}.col-right{align-items:flex-start}.col-center{min-height:6rem;padding:0;flex:2 2 0}.center-inner{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.center-inner .line{min-height:50%;max-height:50%;height:50%;background:#464646;width:.1rem}.center-inner .line.transparent{background:transparent}.period-container{background:orange;color:#fff;margin:0;padding:.2rem .5rem}.period-container .period-inner-container{width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:.2rem .5rem;z-index:10}.center-icon-container{padding:.8rem 0;display:flex;justify-content:center;align-items:center;position:absolute;height:10px;width:10px;background:#fff}.center-icon-container .icon{height:1rem;width:1rem;border-radius:50%;background:orange;margin:0;position:absolute}.event-outer-container{margin:0 .5rem;width:100%}.hour{padding:.5rem;background:none;display:flex;justify-content:center;align-items:center}.hour.right{justify-content:flex-start}.hour.left{justify-content:flex-end}.hour .hour-inner-container{margin:0}.desktop{display:flex!important}.mobile{display:none!important}@media (max-width:900px){.desktop{display:none!important}.mobile{display:flex!important}.event-outer-container{margin:.5rem .3rem}.col-left{align-items:flex-start}.col-left .hour{font-size:12px;padding:0;margin-right:.3rem}.col-left.col-period{flex:18 18 0}.col-left.col-event{flex:18 18 0;padding:0;align-items:flex-end}.col-right{align-items:flex-start}.col-right.col-period{flex:77 77 0}.col-right.col-event{flex:77 77 0;padding:0}.col-center{min-height:6rem;justify-content:center;margin:0}.col-center.col-period{flex:5 5 0;min-height:3rem}.col-center.col-event{flex:5 5 0}.center-inner,.period-container{align-items:center}.period-container{min-height:20%;height:20%;max-height:20%;background:transparent;display:flex;justify-content:center;border-radius:6px}.period-container .period-inner-container{position:absolute;background:orange;color:#fff;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:.2rem .5rem;z-index:10}.center-icon-container{align-items:center;justify-content:center}.center-icon-container .icon{height:1rem;width:1rem;position:absolute}}"]
            }]
    }], function () { return []; }, { enableAnimation: [{
            type: Input
        }], groupEvent: [{
            type: Input
        }], changeSideInGroup: [{
            type: Input
        }], clickEmitter: [{
            type: Output
        }], events: [{
            type: Input
        }], langCode: [{
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
        }] }); })();

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
NgxTimelineEventComponent.ɵfac = function NgxTimelineEventComponent_Factory(t) { return new (t || NgxTimelineEventComponent)(); };
NgxTimelineEventComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxTimelineEventComponent, selectors: [["ngx-timeline-event"]], inputs: { enableAnimation: "enableAnimation", event: "event", colSidePosition: "colSidePosition", langCode: "langCode", innerEventCustomTemplate: "innerEventCustomTemplate" }, outputs: { clickEmitter: "clickEmitter" }, decls: 7, vars: 9, consts: [[1, "event-wrapper-container", 3, "click"], ["class", "arrow left", 4, "ngIf"], [1, "event", 3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "arrow right", 4, "ngIf"], ["innerEventContainer", ""], [1, "arrow", "left"], [1, "arrow", "right"], [1, "event-container", 3, "ngClass"], [1, "event-info-container"], [1, "event-info-header"], [1, "title-container"], [1, "event-info-body"], [1, "event-info-description"], [1, "event-divider-container"], ["class", "event-date-container", 4, "ngIf"], [1, "event-date-container"], [1, "day"]], template: function NgxTimelineEventComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function NgxTimelineEventComponent_Template_div_click_0_listener() { return ctx.clickEmitter.next(ctx.event); });
        ɵngcc0.ɵɵtemplate(1, NgxTimelineEventComponent_div_1_Template, 1, 0, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, NgxTimelineEventComponent_ng_container_3_Template, 1, 0, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NgxTimelineEventComponent_div_4_Template, 1, 0, "div", 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, NgxTimelineEventComponent_ng_template_5_Template, 12, 8, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r3 = ɵngcc0.ɵɵreference(6);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.colSidePosition === ctx.ngxTimelineItemPosition.ON_RIGHT);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(5, _c7, ctx.enableAnimation));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.innerEventCustomTemplate || _r3)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(7, _c8, ctx.event));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.colSidePosition === ctx.ngxTimelineItemPosition.ON_LEFT);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgTemplateOutlet], pipes: [ɵngcc1.TitleCasePipe], styles: [".event-wrapper-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;cursor:pointer}.arrow[_ngcontent-%COMP%]{width:0;height:0;border-top:.5rem solid transparent;border-bottom:.5rem solid transparent;border-radius:6px;z-index:10}.arrow.right[_ngcontent-%COMP%]{filter:drop-shadow(2px 0 0 #244a6e22);border-left:.5rem solid #fff}.arrow.left[_ngcontent-%COMP%]{filter:drop-shadow(-1px 0 0 #244a6e22);border-right:.5rem solid #fff}.event[_ngcontent-%COMP%]{background:#fff;border-radius:.8rem;padding:1rem;width:100%;margin:1rem 0}.event.enableAnimation[_ngcontent-%COMP%]:hover{padding:2rem;transition:all .5s ease-in-out}.event.enableAnimation[_ngcontent-%COMP%]:not(:hover){padding:1rem;transition:all .5s ease-in-out}.event[_ngcontent-%COMP%]:not(.hour){background:#fff 0 0 no-repeat padding-box;box-shadow:0 3px 6px rgba(36,74,110,.3215686274509804)}.event.hour[_ngcontent-%COMP%]{padding:.5rem;background:none;display:flex;justify-content:center;align-items:center}.event.hour.right[_ngcontent-%COMP%]{justify-content:flex-start}.event.hour.left[_ngcontent-%COMP%]{justify-content:flex-end}.event[_ngcontent-%COMP%]   .hour-inner-container[_ngcontent-%COMP%]{margin:0}.event-container[_ngcontent-%COMP%]{display:flex}.event-container.reverse[_ngcontent-%COMP%]{flex-direction:row-reverse}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;padding:.1rem;flex:88 88 0}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-header[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{margin-right:.3rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-header[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{color:orange;width:1.5rem;height:1.5rem;margin-bottom:.1rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-header[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{font-weight:700;font-size:15px}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]{padding:.5rem 0;display:flex;flex-direction:column;justify-content:flex-start;overflow-wrap:anywhere}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .event-info-description[_ngcontent-%COMP%]{margin-bottom:.5rem;font-size:13px}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]{display:flex;font-size:13px;justify-content:flex-start;align-items:center}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;margin:0}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   .expiration-label[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   .expiration-label[_ngcontent-%COMP%]{margin-right:.5rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   .category-value[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   .expiration-value[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   .category-value[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   .expiration-value[_ngcontent-%COMP%]{font-weight:700}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-footer[_ngcontent-%COMP%]{font-size:15px;cursor:pointer;padding-top:1rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-footer[_ngcontent-%COMP%]   .footer-inner-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:flex-end}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-footer[_ngcontent-%COMP%]   .footer-inner-container[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{color:#006cb4;width:1rem;height:1rem;margin-bottom:.1rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#006cb4}.event-container[_ngcontent-%COMP%]   .event-divider-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:.1rem;flex:5 5 0}.event-container[_ngcontent-%COMP%]   .event-divider-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{height:100%;width:1px;background:#e9e9e9}.event-container[_ngcontent-%COMP%]   .event-date-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:.1rem;flex:15 15 0}.event-container[_ngcontent-%COMP%]   .event-date-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}.event-container[_ngcontent-%COMP%]   .event-date-container[_ngcontent-%COMP%]   p.day[_ngcontent-%COMP%]{font-size:32px;font-weight:700;padding:.5rem 0}"] });
NgxTimelineEventComponent.ctorParameters = () => [];
NgxTimelineEventComponent.propDecorators = {
    event: [{ type: Input }],
    colSidePosition: [{ type: Input }],
    langCode: [{ type: Input }],
    innerEventCustomTemplate: [{ type: Input }],
    enableAnimation: [{ type: Input }],
    clickEmitter: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxTimelineEventComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-timeline-event',
                template: "<div class=\"event-wrapper-container\" (click)=\"clickEmitter.next(event)\">\n  <div *ngIf=\"colSidePosition===ngxTimelineItemPosition.ON_RIGHT\" class=\"arrow left\"></div>\n  <div class=\"event\" [ngClass]=\"{'enableAnimation': enableAnimation}\">\n    <ng-container *ngTemplateOutlet=\"innerEventCustomTemplate || innerEventContainer; context: {event: event}\">\n    </ng-container>\n  </div>\n  <div *ngIf=\"colSidePosition===ngxTimelineItemPosition.ON_LEFT\" class=\"arrow right\"></div>\n</div>\n\n<ng-template #innerEventContainer let-event=event>\n  <div class=\"event-container\" [ngClass]=\"{'reverse': colSidePosition === ngxTimelineItemPosition.ON_LEFT}\">\n    <div class=\"event-info-container\">\n      <div class=\"event-info-header\">\n        <div class=\"title-container\">{{event?.eventInfo?.title | titlecase}}</div>\n      </div>\n      <div class=\"event-info-body\">\n        <p class=\"event-info-description\">{{event?.eventInfo?.description}}</p>\n      </div>\n    </div>\n\n    <div class=\"event-divider-container\">\n      <hr/>\n    </div>\n\n    <div class=\"event-date-container\" *ngIf=\"getDateObj() as dateObj\">\n      <div>\n        <p>{{dateObj?.month}}</p>\n      </div>\n      <div>\n        <p class=\"day\">{{dateObj?.day}}</p>\n      </div>\n      <div>\n        <p>{{dateObj?.year}}</p>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
                styles: [".event-wrapper-container{display:flex;justify-content:center;align-items:center;cursor:pointer}.arrow{width:0;height:0;border-top:.5rem solid transparent;border-bottom:.5rem solid transparent;border-radius:6px;z-index:10}.arrow.right{filter:drop-shadow(2px 0 0 #244a6e22);border-left:.5rem solid #fff}.arrow.left{filter:drop-shadow(-1px 0 0 #244a6e22);border-right:.5rem solid #fff}.event{background:#fff;border-radius:.8rem;padding:1rem;width:100%;margin:1rem 0}.event.enableAnimation:hover{padding:2rem;transition:all .5s ease-in-out}.event.enableAnimation:not(:hover){padding:1rem;transition:all .5s ease-in-out}.event:not(.hour){background:#fff 0 0 no-repeat padding-box;box-shadow:0 3px 6px rgba(36,74,110,.3215686274509804)}.event.hour{padding:.5rem;background:none;display:flex;justify-content:center;align-items:center}.event.hour.right{justify-content:flex-start}.event.hour.left{justify-content:flex-end}.event .hour-inner-container{margin:0}.event-container{display:flex}.event-container.reverse{flex-direction:row-reverse}.event-container .event-info-container{display:flex;flex-direction:column;align-items:flex-start;padding:.1rem;flex:88 88 0}.event-container .event-info-container .event-info-header{display:flex;align-items:center;width:100%}.event-container .event-info-container .event-info-header .icon-container{margin-right:.3rem}.event-container .event-info-container .event-info-header .icon-container nb-icon{color:orange;width:1.5rem;height:1.5rem;margin-bottom:.1rem}.event-container .event-info-container .event-info-header .title-container{font-weight:700;font-size:15px}.event-container .event-info-container .event-info-body{padding:.5rem 0;display:flex;flex-direction:column;justify-content:flex-start;overflow-wrap:anywhere}.event-container .event-info-container .event-info-body .event-info-description{margin-bottom:.5rem;font-size:13px}.event-container .event-info-container .event-info-body .category-container,.event-container .event-info-container .event-info-body .expiration-container{display:flex;font-size:13px;justify-content:flex-start;align-items:center}.event-container .event-info-container .event-info-body .category-container p,.event-container .event-info-container .event-info-body .expiration-container p{font-size:13px;margin:0}.event-container .event-info-container .event-info-body .category-container .category-label,.event-container .event-info-container .event-info-body .category-container .expiration-label,.event-container .event-info-container .event-info-body .expiration-container .category-label,.event-container .event-info-container .event-info-body .expiration-container .expiration-label{margin-right:.5rem}.event-container .event-info-container .event-info-body .category-container .category-value,.event-container .event-info-container .event-info-body .category-container .expiration-value,.event-container .event-info-container .event-info-body .expiration-container .category-value,.event-container .event-info-container .event-info-body .expiration-container .expiration-value{font-weight:700}.event-container .event-info-container .event-info-footer{font-size:15px;cursor:pointer;padding-top:1rem}.event-container .event-info-container .event-info-footer .footer-inner-container{display:flex;justify-content:flex-start;align-items:flex-end}.event-container .event-info-container .event-info-footer .footer-inner-container nb-icon{color:#006cb4;width:1rem;height:1rem;margin-bottom:.1rem}.event-container .event-info-container .event-info-footer p{margin:0;color:#006cb4}.event-container .event-divider-container{display:flex;justify-content:center;align-items:center;padding:.1rem;flex:5 5 0}.event-container .event-divider-container hr{height:100%;width:1px;background:#e9e9e9}.event-container .event-date-container{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:.1rem;flex:15 15 0}.event-container .event-date-container p{margin:0;text-align:center}.event-container .event-date-container p.day{font-size:32px;font-weight:700;padding:.5rem 0}"]
            }]
    }], function () { return []; }, { enableAnimation: [{
            type: Input
        }], clickEmitter: [{
            type: Output
        }], event: [{
            type: Input
        }], colSidePosition: [{
            type: Input
        }], langCode: [{
            type: Input
        }], innerEventCustomTemplate: [{
            type: Input
        }] }); })();

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
NgxDatePipe.ɵfac = function NgxDatePipe_Factory(t) { return new (t || NgxDatePipe)(); };
NgxDatePipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "ngxdate", type: NgxDatePipe, pure: false });
NgxDatePipe.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxDatePipe, [{
        type: Pipe,
        args: [{ name: 'ngxdate', pure: false }]
    }], function () { return []; }, null); })();

registerLocaleData(localeIt);
registerLocaleData(localeFr);
registerLocaleData(localeDe);
registerLocaleData(localeEs);
class NgxTimelineModule {
}
NgxTimelineModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxTimelineModule });
NgxTimelineModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxTimelineModule_Factory(t) { return new (t || NgxTimelineModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxTimelineModule, { declarations: function () { return [NgxTimelineComponent, NgxTimelineEventComponent, NgxDatePipe]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgxTimelineComponent, NgxDatePipe]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxTimelineModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxTimelineComponent, NgxTimelineEventComponent, NgxDatePipe],
                imports: [CommonModule],
                exports: [NgxTimelineComponent, NgxDatePipe]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-timeline
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxDateFormat, NgxDatePipe, NgxTimelineComponent, NgxTimelineEventChangeSideInGroup, NgxTimelineEventComponent, NgxTimelineEventGroup, NgxTimelineItemPosition, NgxTimelineModule, dateConfigMap, fieldConfigDate, fieldsToAddEventGroup, fieldsToCheckEventChangeSideInGroup, periodKeyDateFormat, supportedLanguageCodes, NgxTimelineComponent as ɵa, NgxTimelineEventComponent as ɵb, NgxDatePipe as ɵc };

//# sourceMappingURL=frxjs-ngx-timeline.js.map