"use strict";
(self["webpackChunkdemo_app"] = self["webpackChunkdemo_app"] || []).push([["main"],{

/***/ 5474:
/*!****************************************************!*\
  !*** ./projects/demo-app/src/app/app.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var ngx_timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-timeline */ 1045);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);







function AppComponent_div_15_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r13.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r13.name);
} }
function AppComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_15_option_4_Template, 2, 2, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const configuration_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](configuration_r11.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", configuration_r11.formControlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", configuration_r11.options);
} }
const _c0 = function (a0) { return { "transparent first-line": a0 }; };
function AppComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "ngxdate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 25);
} if (rf & 2) {
    const period_r14 = ctx.period;
    const index_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, !index_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", index_r15, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, period_r14 == null ? null : period_r14.firstDate), " ");
} }
function AppComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_21_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const event_r18 = restoredCtx.event; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.handleClick(event_r18)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r18 = ctx.event;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, event_r18), " ");
} }
function AppComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_23_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const event_r21 = restoredCtx.event; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.handleClick(event_r21)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r21 = ctx.event;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, event_r21), " ");
} }
function AppComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ngxdate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.item;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r25 == null ? null : item_r25.timestamp, ctx_r10.ngxDateFormat.FULL_DATE), " ");
} }
class AppComponent {
    constructor() {
        this.title = 'demo-app';
        this.events$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.color = 0;
        this.backgroundColor = 'red';
        this.ngxDateFormat = ngx_timeline__WEBPACK_IMPORTED_MODULE_2__.NgxDateFormat;
        this.configurations = [
            {
                label: 'Language code',
                formControlName: 'langCode',
                options: [
                    { name: 'English', value: 'en' },
                    { name: 'French', value: 'fr' },
                    { name: 'German', value: 'de' },
                    { name: 'Spanish', value: 'es' },
                    { name: 'Italian', value: 'it' },
                    { name: 'Slovenian', value: 'sl' },
                    { name: 'Turkish', value: 'tr' },
                    { name: 'Portuguese', value: 'pt' }
                ]
            },
            {
                label: 'Enable animation',
                formControlName: 'enableAnimation',
                options: [
                    { name: 'Enable animation', value: true },
                    { name: 'Disable animation', value: false }
                ]
            },
            {
                label: 'Reverse Order',
                formControlName: 'reverseOrder',
                options: [
                    { name: 'Normal Time Order (older first)', value: false },
                    { name: 'Reverse Time Order (newer first)', value: true }
                ]
            },
            {
                label: 'Custom class',
                formControlName: 'customClass',
                options: [
                    { name: 'No Custom Class', value: false },
                    { name: 'Custom Class', value: true }
                ]
            },
            {
                label: 'Group events by',
                formControlName: 'groupEvent',
                options: [
                    { name: 'Month Year', value: ngx_timeline__WEBPACK_IMPORTED_MODULE_2__.NgxTimelineEventGroup.MONTH_YEAR },
                    { name: 'Day Month Year', value: ngx_timeline__WEBPACK_IMPORTED_MODULE_2__.NgxTimelineEventGroup.DAY_MONTH_YEAR },
                    { name: 'Year', value: ngx_timeline__WEBPACK_IMPORTED_MODULE_2__.NgxTimelineEventGroup.YEAR }
                ]
            },
            {
                label: 'Change event side in group',
                formControlName: 'changeSideInGroup',
                options: [
                    { name: 'On different day', value: ngx_timeline__WEBPACK_IMPORTED_MODULE_2__.NgxTimelineEventChangeSideInGroup.ON_DIFFERENT_DAY },
                    { name: 'All', value: ngx_timeline__WEBPACK_IMPORTED_MODULE_2__.NgxTimelineEventChangeSideInGroup.ALL },
                    { name: 'On different hours, minutes and seconds', value: ngx_timeline__WEBPACK_IMPORTED_MODULE_2__.NgxTimelineEventChangeSideInGroup.ON_DIFFERENT_HMS },
                    { name: 'On different month', value: ngx_timeline__WEBPACK_IMPORTED_MODULE_2__.NgxTimelineEventChangeSideInGroup.ON_DIFFERENT_MONTH }
                ]
            },
            {
                label: 'Date instant custom template',
                formControlName: 'dateInstantCustomTemplate',
                options: [
                    { name: 'No Custom template', value: false },
                    { name: 'Custom Date Instant Template', value: true }
                ]
            },
            {
                label: 'Event custom template',
                formControlName: 'eventCustomTemplate',
                options: [
                    { name: 'No Custom template', value: false },
                    { name: 'Custom Event Template', value: true }
                ]
            },
            {
                label: 'Inner event custom template',
                formControlName: 'innerEventCustomTemplate',
                options: [
                    { name: 'No Custom template', value: false },
                    { name: 'Custom Inner Event Template', value: true }
                ]
            },
            {
                label: 'Center icon custom template',
                formControlName: 'centerIconCustomTemplate',
                options: [
                    { name: 'No Custom Template', value: false },
                    { name: 'Custom Icon Template', value: true }
                ]
            },
            {
                label: 'Period custom template',
                formControlName: 'periodCustomTemplate',
                options: [
                    { name: 'No Custom Template', value: false },
                    { name: 'Custom Period Template', value: true }
                ]
            },
            {
                label: 'Click emitter',
                formControlName: 'clickEmitter',
                options: [
                    { name: 'No emitter', value: false },
                    { name: 'Handle click (open console)', value: true }
                ]
            }
        ];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({});
        this.configurations.forEach(configuration => this.form.addControl(configuration.formControlName, new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(configuration.options[0].value)));
        this.initEvents();
    }
    initEvents() {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        const nextMonth = new Date();
        nextMonth.setMonth(today.getMonth() + 1);
        const nextYear = new Date();
        nextYear.setFullYear(today.getFullYear() + 1);
        this.events = [
            { id: 5, description: 'This is the description of the event 5', timestamp: nextYear, title: 'title 5' },
            { id: 0, description: 'This is the description of the event 0', timestamp: today, title: 'title 0' },
            { id: 1, description: 'This is the description of the event 1', timestamp: tomorrow, title: 'title 1' },
            { id: 2, description: 'This is the description of the event 2', timestamp: today, title: 'title 2' },
            { id: 3, description: 'This is the description of the event 3', timestamp: tomorrow, title: 'title 3' },
            { id: 4, description: 'This is the description of the event 4', timestamp: nextMonth, title: 'title 4', /*itemPosition: NgxTimelineItemPosition.ON_RIGHT */ },
        ];
    }
    handleClick(event) {
        if (event) {
            window.console.log('', event);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 27, vars: 14, consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/angular", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], ["role", "main", 1, "content"], [1, "title"], [1, "inner-container"], [3, "formGroup"], [1, "form-container"], ["class", "form-select", 4, "ngFor", "ngForOf"], [3, "events", "ngClass", "langCode", "enableAnimation", "reverseOrder", "groupEvent", "changeSideInGroup", "eventCustomTemplate", "innerEventCustomTemplate", "centerIconCustomTemplate", "dateInstantCustomTemplate", "periodCustomTemplate", "clickEmitter"], ["periodCustomTemplate", ""], ["centerIconCustomTemplate", ""], ["innerEventCustomTemplate", ""], ["eventCustomTemplate", ""], ["dateInstantCustomTemplate", ""], [1, "form-select"], [3, "formControlName"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "line", 3, "ngClass"], [1, "period-container"], [1, "line"], [1, "icon-container"], ["src", "assets/inter.png"], [1, "event", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 5)(8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ngx-Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "form", 10)(14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_15_Template, 5, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ngx-timeline", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function AppComponent_Template_ngx_timeline_clickEmitter_16_listener($event) { return ctx.form.get("clickEmitter").value ? ctx.handleClick($event) : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_ng_template_17_Template, 6, 7, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_ng_template_19_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppComponent_ng_template_21_Template, 3, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_ng_template_23_Template, 3, 3, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_ng_template_25_Template, 3, 4, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.configurations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("events", ctx.events)("ngClass", ctx.form.get("customClass").value ? "inter" : "")("langCode", ctx.form.get("langCode").value)("enableAnimation", ctx.form.get("enableAnimation").value)("reverseOrder", ctx.form.get("reverseOrder").value)("groupEvent", ctx.form.get("groupEvent").value)("changeSideInGroup", ctx.form.get("changeSideInGroup").value)("eventCustomTemplate", ctx.form.get("eventCustomTemplate").value ? _r7 : null)("innerEventCustomTemplate", ctx.form.get("innerEventCustomTemplate").value ? _r5 : null)("centerIconCustomTemplate", ctx.form.get("centerIconCustomTemplate").value ? _r3 : null)("dateInstantCustomTemplate", ctx.form.get("dateInstantCustomTemplate").value ? _r9 : null)("periodCustomTemplate", ctx.form.get("periodCustomTemplate").value ? _r1 : null);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ngx_timeline__WEBPACK_IMPORTED_MODULE_2__.NgxTimelineComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe, ngx_timeline__WEBPACK_IMPORTED_MODULE_2__.NgxDatePipe], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  flex-direction: column;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: rgb(105, 103, 103);\n}\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: rgb(15, 15, 16);\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: rgb(58, 58, 58);\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-container[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.form-container[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 15.625rem;\n  max-width: 15.625rem;\n  padding: 0.5rem 0.25rem;\n}\n.line[_ngcontent-%COMP%] {\n  min-height: 50%;\n  max-height: 50%;\n  height: 50%;\n  background: #464646;\n  width: 0.1rem;\n}\n.line.transparent[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.period-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: max-content;\n  padding: 0.25rem;\n  color: lightgrey;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n.inner-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.inner-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  flex: 0 0 20%;\n  height: 100vh;\n}\n.inner-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.inner-container[_ngcontent-%COMP%]   ngx-timeline[_ngcontent-%COMP%] {\n  max-width: 900px;\n  display: flex;\n  flex: 0 0 80%;\n}\n.event[_ngcontent-%COMP%] {\n  border: solid 1px red;\n}\n.icon-container[_ngcontent-%COMP%] {\n  padding: 0.8rem 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  height: 10px;\n  width: 10px;\n  background: white;\n}\n.icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 1rem;\n  width: 1rem;\n  border-radius: 50%;\n  background: red;\n  margin: 0;\n  position: absolute;\n}\n.icon-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 1.25rem;\n  max-height: 1.25rem;\n}\n  ngx-timeline.inter .period-container {\n  background: blue !important;\n}\n  ngx-timeline.inter .period-container .period-inner-container {\n  background: blue !important;\n}\n  ngx-timeline.inter .line:not(.first-line):not(.last-line) {\n  background-color: lightgrey !important;\n}\n  ngx-timeline.inter .center-icon-container .icon {\n  background: blue !important;\n}\n@media screen and (max-width: 1300px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n  .inner-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n  .inner-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    height: auto;\n  }\n  .inner-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    min-width: 60vw;\n  }\n  .inner-container[_ngcontent-%COMP%]   ngx-timeline[_ngcontent-%COMP%] {\n    min-width: 80vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSwwSkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FBRUY7QUFDQTs7Ozs7O0VBTUUsYUFBQTtBQUVGO0FBQ0E7RUFDRSxTQUFBO0FBRUY7QUFDQTtFQUNFLE9BQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUNBO0VBQ0UsY0FBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0FBRUY7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRUY7QUFBRTtFQUNFLG1CQUFBO0FBRUo7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLFVBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUVBO0VBQ0UsZUFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUE7RUFDRSxlQUFBO0FBQ0Y7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsMENBQUE7QUFDRjtBQUVBO0VBQ0Usd0JBQUE7QUFDRjtBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxpQkFBQTtBQUNGO0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUNGO0FBRUE7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFFQTs7O0VBR0UsY0FBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFFQTtFQUNFLGNBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUFDRjtBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFFQTtFQUNFLHdFQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx3RUFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFFQTtFQUNFLCtCQUFBO0VBQ0EsMkNBQUE7QUFDRjtBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBJQUFBO0FBQ0Y7QUFFQTtFQUNFLGdFQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQ0k7RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFDTjtBQUlBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBREY7QUFHRTtFQUNFLHVCQUFBO0FBREo7QUFLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRkY7QUFLQSxzQkFBQTtBQUNBO0VBRUU7O0lBRUUsV0FBQTtFQUhGO0VBTUE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQUpGO0VBT0E7SUFDRSxpQkFBQTtFQUxGO0VBUUE7SUFDRSxZQUFBO0lBQ0Esd0JBQUE7RUFORjtBQUNGO0FBU0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFQRjtBQVNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFQSjtBQVNJO0VBQ0UsaUJBQUE7QUFQTjtBQVdFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQVRKO0FBY0E7RUFDRSxxQkFBQTtBQVhGO0FBY0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBWEY7QUFhRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBWEo7QUFhRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFYSjtBQWdCRTtFQUNFLDJCQUFBO0FBYko7QUFjSTtFQUNFLDJCQUFBO0FBWk47QUFlRTtFQUNFLHNDQUFBO0FBYko7QUFlRTtFQUNFLDJCQUFBO0FBYko7QUFpQkE7RUFDRTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFQWRGO0VBaUJBO0lBQ0UsYUFBQTtJQUNBLFdBQUE7SUFDQSxzQkFBQTtJQUNBLDZCQUFBO0lBQ0EsbUJBQUE7RUFmRjtFQWlCRTtJQUNFLDhCQUFBO0lBQ0EsWUFBQTtFQWZKO0VBaUJJO0lBQ0UsZUFBQTtFQWZOO0VBbUJFO0lBQ0UsZUFBQTtFQWpCSjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRvb2xiYXIgaW1nIHtcclxuICBtYXJnaW46IDAgMTZweDtcclxufVxyXG5cclxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogODJweCBhdXRvIDMycHg7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG59XHJcblxyXG5zdmcubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgZmlsbDogIzg4ODtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCA4cHggMTZweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLXNtYWxsIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2OHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcclxufVxyXG5cclxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1pbi13aWR0aDogMzAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICBtYXJnaW4tbGVmdDogNjBweDtcclxufVxyXG5cclxuc3ZnI3JvY2tldCB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG4gIHRvcDogLTI0cHg7XHJcbn1cclxuXHJcbnN2ZyNyb2NrZXQtc21va2Uge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDk1cHgpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDE4MHB4O1xyXG4gIHotaW5kZXg6IC0xMDtcclxufVxyXG5cclxuYSxcclxuYTp2aXNpdGVkLFxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzE5NzZkMjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTI1Njk5O1xyXG59XHJcblxyXG4udGVybWluYWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcclxufVxyXG5cclxuLnRlcm1pbmFsOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDU4LCA1OCwgNTgpO1xyXG4gIGNvbG9yOiAjYzJjM2M0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgdGV4dC1pbmRlbnQ6IDRweDtcclxufVxyXG5cclxuLnRlcm1pbmFsIHByZSB7XHJcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmNpcmNsZS1saW5rIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBtYXJnaW46IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gIHRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY2lyY2xlLWxpbms6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5mb290ZXIgYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2Uge1xyXG4gIGNvbG9yOiAjMjQyOTJlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xyXG59XHJcblxyXG4uZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbnN2ZyNjbG91ZHMge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IC0xNjBweDtcclxuICBsZWZ0OiAtMjMwcHg7XHJcbiAgei1pbmRleDogLTEwO1xyXG4gIHdpZHRoOiAxOTIwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAuZm9ybS1zZWxlY3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuXHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICBtaW4td2lkdGg6IDE1LjYyNXJlbTtcclxuICAgICAgbWF4LXdpZHRoOiAxNS42MjVyZW07XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjI1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxpbmUge1xyXG4gIG1pbi1oZWlnaHQ6IDUwJTtcclxuICBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgYmFja2dyb3VuZDogIzQ2NDY0NjtcclxuICB3aWR0aDogMC4xcmVtO1xyXG5cclxuICAmLnRyYW5zcGFyZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG5cclxuLnBlcmlvZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMC4yNXJlbTtcclxuICBjb2xvcjogbGlnaHRncmV5O1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcclxuICAudGVybWluYWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzJweDtcclxuICB9XHJcblxyXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmlubmVyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGZsZXg6IDAgMCAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ3gtdGltZWxpbmUge1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAwIDAgODAlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5ldmVudCB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xyXG59XHJcblxyXG4uaWNvbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IC44cmVtIDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gIC5pY29uIHtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxLjI1cmVtO1xyXG4gICAgbWF4LWhlaWdodDogMS4yNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCBuZ3gtdGltZWxpbmUuaW50ZXIge1xyXG4gIC5wZXJpb2QtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGJsdWUgIWltcG9ydGFudDtcclxuICAgIC5wZXJpb2QtaW5uZXItY29udGFpbmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogYmx1ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAubGluZTpub3QoLmZpcnN0LWxpbmUpOm5vdCgubGFzdC1saW5lKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNlbnRlci1pY29uLWNvbnRhaW5lciAuaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcclxuICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuaW5uZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgICAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDYwdnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ3gtdGltZWxpbmUge1xyXG4gICAgICBtaW4td2lkdGg6IDgwdnc7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 8066:
/*!*************************************************!*\
  !*** ./projects/demo-app/src/app/app.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5474);
/* harmony import */ var ngx_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-timeline */ 1045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        ngx_timeline__WEBPACK_IMPORTED_MODULE_4__.NgxTimelineModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        ngx_timeline__WEBPACK_IMPORTED_MODULE_4__.NgxTimelineModule] }); })();


/***/ }),

/***/ 6173:
/*!***********************************************************!*\
  !*** ./projects/demo-app/src/environments/environment.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 6203:
/*!***************************************!*\
  !*** ./projects/demo-app/src/main.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8066);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 6173);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 1045:
/*!***********************************************************!*\
  !*** ./dist/ngx-timeline/fesm2020/frxjs-ngx-timeline.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxDateFormat": () => (/* binding */ NgxDateFormat),
/* harmony export */   "NgxDatePipe": () => (/* binding */ NgxDatePipe),
/* harmony export */   "NgxTimelineComponent": () => (/* binding */ NgxTimelineComponent),
/* harmony export */   "NgxTimelineEventChangeSideInGroup": () => (/* binding */ NgxTimelineEventChangeSideInGroup),
/* harmony export */   "NgxTimelineEventComponent": () => (/* binding */ NgxTimelineEventComponent),
/* harmony export */   "NgxTimelineEventGroup": () => (/* binding */ NgxTimelineEventGroup),
/* harmony export */   "NgxTimelineItemPosition": () => (/* binding */ NgxTimelineItemPosition),
/* harmony export */   "NgxTimelineModule": () => (/* binding */ NgxTimelineModule),
/* harmony export */   "dateConfigMap": () => (/* binding */ dateConfigMap),
/* harmony export */   "fieldConfigDate": () => (/* binding */ fieldConfigDate),
/* harmony export */   "fieldsToAddEventGroup": () => (/* binding */ fieldsToAddEventGroup),
/* harmony export */   "fieldsToCheckEventChangeSideInGroup": () => (/* binding */ fieldsToCheckEventChangeSideInGroup),
/* harmony export */   "periodKeyDateFormat": () => (/* binding */ periodKeyDateFormat),
/* harmony export */   "supportedLanguageCodes": () => (/* binding */ supportedLanguageCodes)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/it */ 4129);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/fr */ 8384);
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/de */ 8855);
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/es */ 2403);
/* harmony import */ var _angular_common_locales_sl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/sl */ 9108);
/* harmony import */ var _angular_common_locales_tr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/tr */ 5763);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/pt */ 7423);












const supportedLanguageCodes = ['en', 'it', 'fr', 'de', 'es', 'sl', 'tr', 'pt'];
const dateConfigMap = {
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
  },
  sl: {
    code: 'sl-SL',
    fullDate: 'dd/MM/yyyy H:mm',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'HH:mm'
  },
  tr: {
    code: 'tr',
    fullDate: 'dd/MM/yyyy H:mm',
    dayMonthYear: 'dd MMMM yyyy',
    monthYear: 'MMMM yyyy',
    year: 'yyyy',
    hoursMinutes: 'HH:mm'
  },
  pt: {
    code: 'pt',
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

const fieldConfigDate = {
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

const fieldsToAddEventGroup = {
  YEAR: ['getFullYear'],
  MONTH_YEAR: ['getFullYear', 'getMonth'],
  DAY_MONTH_YEAR: ['getFullYear', 'getMonth', 'getDate']
};
const periodKeyDateFormat = {
  YEAR: NgxDateFormat.YEAR,
  MONTH_YEAR: NgxDateFormat.MONTH_YEAR,
  DAY_MONTH_YEAR: NgxDateFormat.DAY_MONTH_YEAR
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

const fieldsToCheckEventChangeSideInGroup = {
  ON_DIFFERENT_MONTH: ['getFullYear', 'getMonth'],
  ON_DIFFERENT_DAY: ['getFullYear', 'getMonth', 'getDate'],
  ON_DIFFERENT_HMS: ['getFullYear', 'getMonth', 'getDate', 'getHours', 'getMinutes', 'getSeconds']
};
var NgxTimelineItemPosition;

(function (NgxTimelineItemPosition) {
  NgxTimelineItemPosition["ON_LEFT"] = "ON_LEFT";
  NgxTimelineItemPosition["ON_RIGHT"] = "ON_RIGHT";
})(NgxTimelineItemPosition || (NgxTimelineItemPosition = {}));

function NgxTimelineEventComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
  }
}

function NgxTimelineEventComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function NgxTimelineEventComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
  }
}

function NgxTimelineEventComponent_ng_template_5_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16)(1, "div")(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div")(5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div")(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const dateObj_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dateObj_r7 == null ? null : dateObj_r7.month);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dateObj_r7 == null ? null : dateObj_r7.day);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dateObj_r7 == null ? null : dateObj_r7.year);
  }
}

const _c0$1 = function (a0) {
  return {
    "reverse": a0
  };
};

function NgxTimelineEventComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12)(7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NgxTimelineEventComponent_ng_template_5_div_11_Template, 10, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const event_r5 = ctx.event;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0$1, ctx_r4.colSidePosition === ctx_r4.ngxTimelineItemPosition.ON_LEFT));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, event_r5 == null ? null : event_r5.eventInfo == null ? null : event_r5.eventInfo.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r5 == null ? null : event_r5.eventInfo == null ? null : event_r5.eventInfo.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.getDateObj());
  }
}

const _c1$1 = function (a0) {
  return {
    "enableAnimation": a0
  };
};

const _c2$1 = function (a0) {
  return {
    event: a0
  };
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

    this.clickEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.ngxTimelineItemPosition = NgxTimelineItemPosition;
    this.monthAbbr = 'MMM';
    this.dayFormat = 'dd';
  }

  getDateObj() {
    let day;
    let month;
    let year;
    const dateTimestamp = this.event?.eventInfo?.timestamp;

    if (dateTimestamp) {
      const timestamp = new Date(dateTimestamp);
      const langCode = this.getLangCode();
      month = new _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe(langCode).transform(timestamp, this.monthAbbr);
      day = new _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe(langCode).transform(timestamp, this.dayFormat);
      year = timestamp.getFullYear();
    }

    return {
      day,
      month,
      year
    };
  }

  getLangCode() {
    return this.langCode && supportedLanguageCodes.includes(this.langCode) ? this.langCode : supportedLanguageCodes[0];
  }

}

NgxTimelineEventComponent.ɵfac = function NgxTimelineEventComponent_Factory(t) {
  return new (t || NgxTimelineEventComponent)();
};

NgxTimelineEventComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxTimelineEventComponent,
  selectors: [["ngx-timeline-event"]],
  inputs: {
    event: "event",
    colSidePosition: "colSidePosition",
    langCode: "langCode",
    innerEventCustomTemplate: "innerEventCustomTemplate",
    enableAnimation: "enableAnimation"
  },
  outputs: {
    clickEmitter: "clickEmitter"
  },
  decls: 7,
  vars: 9,
  consts: [[1, "event-wrapper-container", 3, "click"], ["class", "arrow left", 4, "ngIf"], [1, "event", 3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "arrow right", 4, "ngIf"], ["innerEventContainer", ""], [1, "arrow", "left"], [1, "arrow", "right"], [1, "event-container", 3, "ngClass"], [1, "event-info-container"], [1, "event-info-header"], [1, "title-container"], [1, "event-info-body"], [1, "event-info-description"], [1, "event-divider-container"], ["class", "event-date-container", 4, "ngIf"], [1, "event-date-container"], [1, "day"]],
  template: function NgxTimelineEventComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxTimelineEventComponent_Template_div_click_0_listener() {
        return ctx.clickEmitter.next(ctx.event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxTimelineEventComponent_div_1_Template, 1, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxTimelineEventComponent_ng_container_3_Template, 1, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxTimelineEventComponent_div_4_Template, 1, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxTimelineEventComponent_ng_template_5_Template, 12, 8, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.colSidePosition === ctx.ngxTimelineItemPosition.ON_RIGHT);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1$1, ctx.enableAnimation));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.innerEventCustomTemplate || _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2$1, ctx.event));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.colSidePosition === ctx.ngxTimelineItemPosition.ON_LEFT);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe],
  styles: [".event-wrapper-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;cursor:pointer}.arrow[_ngcontent-%COMP%]{width:0;height:0;border-top:.5rem solid transparent;border-bottom:.5rem solid transparent;border-radius:6px;z-index:10}.arrow.right[_ngcontent-%COMP%]{filter:drop-shadow(2px 0px 0px rgba(36,74,110,.1333333333));border-left:.5rem solid white}.arrow.left[_ngcontent-%COMP%]{filter:drop-shadow(-1px 0px 0px rgba(36,74,110,.1333333333));border-right:.5rem solid white}.event[_ngcontent-%COMP%]{background:white;border-radius:.8rem;padding:1rem;width:100%;margin:1rem 0}.event.enableAnimation[_ngcontent-%COMP%]:hover{padding:2rem;transition:all .5s ease-in-out}.event.enableAnimation[_ngcontent-%COMP%]:not(:hover){padding:1rem;transition:all .5s ease-in-out}.event[_ngcontent-%COMP%]:not(.hour){background:#ffffff 0% 0% no-repeat padding-box;box-shadow:0 3px 6px #244a6e52}.event.hour[_ngcontent-%COMP%]{padding:.5rem;background:none;display:flex;justify-content:center;align-items:center}.event.hour.right[_ngcontent-%COMP%]{justify-content:flex-start}.event.hour.left[_ngcontent-%COMP%]{justify-content:flex-end}.event[_ngcontent-%COMP%]   .hour-inner-container[_ngcontent-%COMP%]{margin:0}.event-container[_ngcontent-%COMP%]{display:flex}.event-container.reverse[_ngcontent-%COMP%]{flex-direction:row-reverse}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;padding:.1rem;flex:88 88 0}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-header[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{margin-right:.3rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-header[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{color:orange;width:1.5rem;height:1.5rem;margin-bottom:.1rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-header[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{font-weight:700;font-size:15px}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]{padding:.5rem 0;display:flex;flex-direction:column;justify-content:flex-start;overflow-wrap:anywhere}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .event-info-description[_ngcontent-%COMP%]{margin-bottom:.5rem;font-size:13px}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]{display:flex;font-size:13px;justify-content:flex-start;align-items:center}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;margin:0}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   .expiration-label[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   .expiration-label[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%]{margin-right:.5rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   .expiration-value[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   .category-value[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   .expiration-value[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   .category-value[_ngcontent-%COMP%]{font-weight:700}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-footer[_ngcontent-%COMP%]{font-size:15px;cursor:pointer;padding-top:1rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-footer[_ngcontent-%COMP%]   .footer-inner-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:flex-end}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-footer[_ngcontent-%COMP%]   .footer-inner-container[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{color:#006cb4;width:1rem;height:1rem;margin-bottom:.1rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#006cb4}.event-container[_ngcontent-%COMP%]   .event-divider-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:.1rem;flex:5 5 0}.event-container[_ngcontent-%COMP%]   .event-divider-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{height:100%;width:1px;background:#e9e9e9}.event-container[_ngcontent-%COMP%]   .event-date-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:.1rem;flex:15 15 0}.event-container[_ngcontent-%COMP%]   .event-date-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}.event-container[_ngcontent-%COMP%]   .event-date-container[_ngcontent-%COMP%]   p.day[_ngcontent-%COMP%]{font-size:32px;font-weight:700;padding:.5rem 0}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxTimelineEventComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-timeline-event',
      template: "<div class=\"event-wrapper-container\" (click)=\"clickEmitter.next(event)\">\n  <div *ngIf=\"colSidePosition===ngxTimelineItemPosition.ON_RIGHT\" class=\"arrow left\"></div>\n  <div class=\"event\" [ngClass]=\"{'enableAnimation': enableAnimation}\">\n    <ng-container *ngTemplateOutlet=\"innerEventCustomTemplate || innerEventContainer; context: {event: event}\"\n    >\n  </ng-container>\n  </div>\n  <div *ngIf=\"colSidePosition===ngxTimelineItemPosition.ON_LEFT\" class=\"arrow right\"></div>\n</div>\n\n<ng-template #innerEventContainer let-event=event>\n  <div class=\"event-container\" [ngClass]=\"{'reverse': colSidePosition === ngxTimelineItemPosition.ON_LEFT}\">\n    <div class=\"event-info-container\">\n      <div class=\"event-info-header\">\n        <div class=\"title-container\">{{event?.eventInfo?.title | titlecase}}</div>\n      </div>\n      <div class=\"event-info-body\">\n        <p class=\"event-info-description\">{{event?.eventInfo?.description}}</p>\n      </div>\n    </div>\n\n    <div class=\"event-divider-container\">\n      <hr/>\n    </div>\n\n    <div class=\"event-date-container\" *ngIf=\"getDateObj() as dateObj\">\n      <div>\n        <p>{{dateObj?.month}}</p>\n      </div>\n      <div>\n        <p class=\"day\">{{dateObj?.day}}</p>\n      </div>\n      <div>\n        <p>{{dateObj?.year}}</p>\n      </div>\n    </div>\n  </div>\n</ng-template>\n",
      styles: [".event-wrapper-container{display:flex;justify-content:center;align-items:center;cursor:pointer}.arrow{width:0;height:0;border-top:.5rem solid transparent;border-bottom:.5rem solid transparent;border-radius:6px;z-index:10}.arrow.right{filter:drop-shadow(2px 0px 0px rgba(36,74,110,.1333333333));border-left:.5rem solid white}.arrow.left{filter:drop-shadow(-1px 0px 0px rgba(36,74,110,.1333333333));border-right:.5rem solid white}.event{background:white;border-radius:.8rem;padding:1rem;width:100%;margin:1rem 0}.event.enableAnimation:hover{padding:2rem;transition:all .5s ease-in-out}.event.enableAnimation:not(:hover){padding:1rem;transition:all .5s ease-in-out}.event:not(.hour){background:#ffffff 0% 0% no-repeat padding-box;box-shadow:0 3px 6px #244a6e52}.event.hour{padding:.5rem;background:none;display:flex;justify-content:center;align-items:center}.event.hour.right{justify-content:flex-start}.event.hour.left{justify-content:flex-end}.event .hour-inner-container{margin:0}.event-container{display:flex}.event-container.reverse{flex-direction:row-reverse}.event-container .event-info-container{display:flex;flex-direction:column;align-items:flex-start;padding:.1rem;flex:88 88 0}.event-container .event-info-container .event-info-header{display:flex;align-items:center;width:100%}.event-container .event-info-container .event-info-header .icon-container{margin-right:.3rem}.event-container .event-info-container .event-info-header .icon-container nb-icon{color:orange;width:1.5rem;height:1.5rem;margin-bottom:.1rem}.event-container .event-info-container .event-info-header .title-container{font-weight:700;font-size:15px}.event-container .event-info-container .event-info-body{padding:.5rem 0;display:flex;flex-direction:column;justify-content:flex-start;overflow-wrap:anywhere}.event-container .event-info-container .event-info-body .event-info-description{margin-bottom:.5rem;font-size:13px}.event-container .event-info-container .event-info-body .expiration-container,.event-container .event-info-container .event-info-body .category-container{display:flex;font-size:13px;justify-content:flex-start;align-items:center}.event-container .event-info-container .event-info-body .expiration-container p,.event-container .event-info-container .event-info-body .category-container p{font-size:13px;margin:0}.event-container .event-info-container .event-info-body .expiration-container .expiration-label,.event-container .event-info-container .event-info-body .expiration-container .category-label,.event-container .event-info-container .event-info-body .category-container .expiration-label,.event-container .event-info-container .event-info-body .category-container .category-label{margin-right:.5rem}.event-container .event-info-container .event-info-body .expiration-container .expiration-value,.event-container .event-info-container .event-info-body .expiration-container .category-value,.event-container .event-info-container .event-info-body .category-container .expiration-value,.event-container .event-info-container .event-info-body .category-container .category-value{font-weight:700}.event-container .event-info-container .event-info-footer{font-size:15px;cursor:pointer;padding-top:1rem}.event-container .event-info-container .event-info-footer .footer-inner-container{display:flex;justify-content:flex-start;align-items:flex-end}.event-container .event-info-container .event-info-footer .footer-inner-container nb-icon{color:#006cb4;width:1rem;height:1rem;margin-bottom:.1rem}.event-container .event-info-container .event-info-footer p{margin:0;color:#006cb4}.event-container .event-divider-container{display:flex;justify-content:center;align-items:center;padding:.1rem;flex:5 5 0}.event-container .event-divider-container hr{height:100%;width:1px;background:#e9e9e9}.event-container .event-date-container{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:.1rem;flex:15 15 0}.event-container .event-date-container p{margin:0;text-align:center}.event-container .event-date-container p.day{font-size:32px;font-weight:700;padding:.5rem 0}\n"]
    }]
  }], function () {
    return [];
  }, {
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    colSidePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    langCode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    innerEventCustomTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    enableAnimation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clickEmitter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class NgxDatePipe {
  constructor() {}

  transform(date, dateFormat, langCode) {
    let transformedDate = null;

    if (date) {
      const objDate = this.getDateConfig(langCode);
      transformedDate = new _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe(objDate.code).transform(new Date(date), this.dateFormat(dateFormat, objDate));
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

NgxDatePipe.ɵfac = function NgxDatePipe_Factory(t) {
  return new (t || NgxDatePipe)();
};

NgxDatePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "ngxdate",
  type: NgxDatePipe,
  pure: false
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDatePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'ngxdate',
      pure: false
    }]
  }], function () {
    return [];
  }, null);
})();

function NgxTimelineComponent_div_2_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c0 = function (a0, a1) {
  return {
    event: a0,
    colSidePosition: a1
  };
};

function NgxTimelineComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxTimelineComponent_div_2_div_2_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r13.eventCustomTemplate || _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, item_r11, ctx_r13.ngxTimelineItemPosition.ON_LEFT));
  }
}

function NgxTimelineComponent_div_2_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c1 = function (a0) {
  return {
    item: a0
  };
};

function NgxTimelineComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxTimelineComponent_div_2_div_3_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r14.dateInstantCustomTemplate || _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r11.eventInfo));
  }
}

function NgxTimelineComponent_div_2_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c2 = function (a0, a1, a2) {
  return {
    period: a0,
    index: a1,
    event: a2
  };
};

function NgxTimelineComponent_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxTimelineComponent_div_2_div_5_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r11 = ctx_r28.$implicit;
    const index_r12 = ctx_r28.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r15.periodCustomTemplate || _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c2, item_r11.periodInfo, index_r12, item_r11));
  }
}

function NgxTimelineComponent_div_2_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c3 = function (a0, a1) {
  return {
    event: a0,
    index: a1
  };
};

function NgxTimelineComponent_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxTimelineComponent_div_2_div_6_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r11 = ctx_r30.$implicit;
    const index_r12 = ctx_r30.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c3, item_r11, index_r12));
  }
}

function NgxTimelineComponent_div_2_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function NgxTimelineComponent_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxTimelineComponent_div_2_div_8_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r17.eventCustomTemplate || _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, item_r11, ctx_r17.ngxTimelineItemPosition.ON_RIGHT));
  }
}

function NgxTimelineComponent_div_2_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function NgxTimelineComponent_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxTimelineComponent_div_2_div_9_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r18.dateInstantCustomTemplate || _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r11.eventInfo));
  }
}

function NgxTimelineComponent_div_2_div_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function NgxTimelineComponent_div_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxTimelineComponent_div_2_div_11_ng_container_2_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r19.dateInstantCustomTemplate || _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, item_r11.eventInfo));
  }
}

function NgxTimelineComponent_div_2_div_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function NgxTimelineComponent_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxTimelineComponent_div_2_div_13_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r11 = ctx_r38.$implicit;
    const index_r12 = ctx_r38.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.periodCustomTemplate || _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c2, item_r11.periodInfo, index_r12, item_r11));
  }
}

function NgxTimelineComponent_div_2_div_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function NgxTimelineComponent_div_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxTimelineComponent_div_2_div_14_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r11 = ctx_r40.$implicit;
    const index_r12 = ctx_r40.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c3, item_r11, index_r12));
  }
}

function NgxTimelineComponent_div_2_div_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

function NgxTimelineComponent_div_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxTimelineComponent_div_2_div_16_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.eventCustomTemplate || _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, item_r11, ctx_r22.ngxTimelineItemPosition.ON_RIGHT));
  }
}

function NgxTimelineComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxTimelineComponent_div_2_div_2_Template, 2, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxTimelineComponent_div_2_div_3_Template, 2, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxTimelineComponent_div_2_div_5_Template, 2, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgxTimelineComponent_div_2_div_6_Template, 2, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgxTimelineComponent_div_2_div_8_Template, 2, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgxTimelineComponent_div_2_div_9_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NgxTimelineComponent_div_2_div_11_Template, 3, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgxTimelineComponent_div_2_div_13_Template, 2, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NgxTimelineComponent_div_2_div_14_Template, 2, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NgxTimelineComponent_div_2_div_16_Template, 2, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.eventInfo && item_r11.position === ctx_r0.ngxTimelineItemPosition.ON_LEFT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.eventInfo && item_r11.position === ctx_r0.ngxTimelineItemPosition.ON_RIGHT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.periodInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r11.periodInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.eventInfo && item_r11.position === ctx_r0.ngxTimelineItemPosition.ON_RIGHT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.eventInfo && item_r11.position === ctx_r0.ngxTimelineItemPosition.ON_LEFT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.eventInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.periodInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r11.periodInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r11.periodInfo ? "col-period" : "col-event");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.eventInfo);
  }
}

function NgxTimelineComponent_ng_template_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}

const _c4 = function (a0, a1) {
  return {
    index: a0,
    event: a1
  };
};

const _c5 = function (a0) {
  return {
    "transparent last-line": a0
  };
};

function NgxTimelineComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxTimelineComponent_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 28);
  }

  if (rf & 2) {
    const index_r43 = ctx.index;
    const event_r44 = ctx.event;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.centerIconCustomTemplate || _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c4, index_r43, event_r44));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c5, index_r43 === ctx_r2.items.length - 1));
  }
}

function NgxTimelineComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function NgxTimelineComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "ngxdate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r48 = ctx.item;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, item_r48 == null ? null : item_r48.timestamp, ctx_r6.ngxDateFormat.HOURS_MINUTES, ctx_r6.langCode), " ");
  }
}

const _c6 = function (a0) {
  return {
    "transparent first-line": a0
  };
};

function NgxTimelineComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31)(2, "div", 32)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "ngxdate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 27);
  }

  if (rf & 2) {
    const period_r49 = ctx.period;
    const index_r50 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c6, !index_r50));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 2, period_r49 == null ? null : period_r49.firstDate, ctx_r8.getPeriodKeyDateFormat(), ctx_r8.langCode));
  }
}

function NgxTimelineComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-timeline-event", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEmitter", function NgxTimelineComponent_ng_template_11_Template_ngx_timeline_event_clickEmitter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r54.clickEmitter.next($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const event_r52 = ctx.event;
    const colSidePosition_r53 = ctx.colSidePosition;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r52)("langCode", ctx_r10.langCode)("enableAnimation", ctx_r10.enableAnimation)("innerEventCustomTemplate", ctx_r10.innerEventCustomTemplate)("colSidePosition", colSidePosition_r53);
  }
}

class NgxTimelineComponent {
  constructor() {
    /**
     * Boolean used to enable or disable the animations
     */
    this.enableAnimation = true;
    /**
     * Boolean used to reverse sort order (default older first)
     */

    this.reverseOrder = false;
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

    this.clickEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
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
    events.sort((a, b) => {
      const aTime = a.timestamp.getTime();
      const bTime = b.timestamp.getTime();
      return this.reverseOrder ? bTime - aTime : aTime - bTime;
    });
  }

  setGroups(events) {
    events.forEach(event => {
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
    this.periods.forEach(p => {
      // insert first the period
      this.items.push(p); // in each period putting items on left

      const onLeft = true;
      const periodInfo = p.periodInfo; // insert then all the events in this period

      this.addPeriodEvents(periodInfo, onLeft); // onLeft = this.addEventItemsAndGetIfOnLeft(periodInfo, onLeft);
    });
  }

  addPeriodEvents(periodInfo, onLeft) {
    this.groups[periodInfo.periodKey].forEach((event, index) => {
      const prevEvent = this.groups[periodInfo.periodKey][index - 1];

      if (event.itemPosition) {
        onLeft = event.itemPosition && event.itemPosition === NgxTimelineItemPosition.ON_LEFT;
      } else if (index > 0 && this.compareEvents(prevEvent, event)) {
        onLeft = !onLeft;
      }

      this.pushEventOnItems(event, onLeft);
    }); // return onLeft;
  }

  pushEventOnItems(event, onLeft) {
    this.items.push({
      eventInfo: { ...event
      },
      position: onLeft ? this.ngxTimelineItemPosition.ON_LEFT : this.ngxTimelineItemPosition.ON_RIGHT
    });
  }
  /**
   * Compare the events inside the same group
   */


  compareEvents(prevEvent, event) {
    return this.changeSideInGroup === NgxTimelineEventChangeSideInGroup.ALL || this.compareEventsField(prevEvent, event, ...fieldsToCheckEventChangeSideInGroup[this.changeSideInGroup]);
  }

  compareEventsField(prevEvent, event, ...fields) {
    return fields.reduce((res, field) => res = res || prevEvent.timestamp[field]() !== event.timestamp[field](), !!false);
  }

  setPeriods() {
    this.periods = Object.keys(this.groups).map(periodKey => {
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
        firstDate: this.groups[periodKey][0].timestamp
      }
    };
  }

  getPeriodKeyFromEvent(event) {
    return fieldsToAddEventGroup[this.groupEvent].map(field => event.timestamp[field]()).join(this.separator);
  }

}

NgxTimelineComponent.ɵfac = function NgxTimelineComponent_Factory(t) {
  return new (t || NgxTimelineComponent)();
};

NgxTimelineComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxTimelineComponent,
  selectors: [["ngx-timeline"]],
  inputs: {
    events: "events",
    langCode: "langCode",
    enableAnimation: "enableAnimation",
    reverseOrder: "reverseOrder",
    groupEvent: "groupEvent",
    changeSideInGroup: "changeSideInGroup",
    periodCustomTemplate: "periodCustomTemplate",
    eventCustomTemplate: "eventCustomTemplate",
    centerIconCustomTemplate: "centerIconCustomTemplate",
    dateInstantCustomTemplate: "dateInstantCustomTemplate",
    innerEventCustomTemplate: "innerEventCustomTemplate"
  },
  outputs: {
    clickEmitter: "clickEmitter"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 13,
  vars: 1,
  consts: [[1, "main-container"], [1, "items-container"], ["class", "row", 4, "ngFor", "ngForOf"], ["centerLinesIconTemplate", ""], ["centerIconTemplate", ""], ["dateInstantTemplate", ""], ["periodTemplate", ""], ["eventTemplate", ""], [1, "row"], [1, "col", "col-left", "desktop", 3, "ngClass"], ["class", "event-outer-container", 4, "ngIf"], ["class", "hour left", 4, "ngIf"], [1, "col", "col-center", "desktop", 3, "ngClass"], ["class", "center-inner", 4, "ngIf"], ["class", "center-inner no-period-key", 4, "ngIf"], [1, "col", "col-right", "desktop", 3, "ngClass"], ["class", "hour right", 4, "ngIf"], [1, "col", "col-left", "mobile", 3, "ngClass"], [1, "col", "col-center", "mobile", 3, "ngClass"], [1, "col", "col-right", "mobile", 3, "ngClass"], [1, "event-outer-container"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "hour", "left"], [1, "center-inner"], [1, "center-inner", "no-period-key"], [1, "hour", "right"], [1, "hour-inner-container"], [1, "line"], [1, "line", 3, "ngClass"], [1, "center-icon-container"], [1, "icon"], [1, "period-container"], [1, "period-inner-container"], [3, "event", "langCode", "enableAnimation", "innerEventCustomTemplate", "colSidePosition", "clickEmitter"]],
  template: function NgxTimelineComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxTimelineComponent_div_2_Template, 17, 16, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxTimelineComponent_ng_template_3_Template, 3, 8, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxTimelineComponent_ng_template_5_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgxTimelineComponent_ng_template_7_Template, 3, 5, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgxTimelineComponent_ng_template_9_Template, 7, 8, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NgxTimelineComponent_ng_template_11_Template, 1, 5, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, NgxTimelineEventComponent, NgxDatePipe],
  styles: [".main-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.items-container[_ngcontent-%COMP%]{padding:1rem 0;min-width:max(20rem,100%)}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.row[_ngcontent-%COMP%] > [class*=col-][_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.col-left[_ngcontent-%COMP%]{align-items:flex-end;padding:0;flex:49 49 0}.col-right[_ngcontent-%COMP%]{align-items:flex-start;padding:0;flex:49 49 0}.col-center[_ngcontent-%COMP%]{min-height:6rem;padding:0;flex:2 2 0}.center-inner[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.center-inner[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{min-height:50%;max-height:50%;height:50%;background:#464646;width:.1rem}.center-inner[_ngcontent-%COMP%]   .line.transparent[_ngcontent-%COMP%]{background:transparent}.period-container[_ngcontent-%COMP%]{background:orange;color:#fff;margin:0;padding:.2rem .5rem}.period-container[_ngcontent-%COMP%]   .period-inner-container[_ngcontent-%COMP%]{width:max-content;padding:.2rem .5rem;z-index:10}.center-icon-container[_ngcontent-%COMP%]{padding:.8rem 0;display:flex;justify-content:center;align-items:center;position:relative;height:10px;width:10px;background:white}.center-icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:1rem;width:1rem;border-radius:50%;background:orange;margin:0;position:absolute}.event-outer-container[_ngcontent-%COMP%]{margin:0 .5rem;width:100%}.hour[_ngcontent-%COMP%]{padding:.5rem;background:none;display:flex;justify-content:center;align-items:center}.hour.right[_ngcontent-%COMP%]{justify-content:flex-start}.hour.left[_ngcontent-%COMP%]{justify-content:flex-end}.hour[_ngcontent-%COMP%]   .hour-inner-container[_ngcontent-%COMP%]{margin:0}.desktop[_ngcontent-%COMP%]{display:flex!important}.mobile[_ngcontent-%COMP%]{display:none!important}@media (max-width: 900px){.desktop[_ngcontent-%COMP%]{display:none!important}.mobile[_ngcontent-%COMP%]{display:flex!important}.event-outer-container[_ngcontent-%COMP%]{margin:.5rem .3rem}.col-left[_ngcontent-%COMP%]{align-items:flex-start}.col-left[_ngcontent-%COMP%]   .hour[_ngcontent-%COMP%]{font-size:12px;padding:0;margin-right:.3rem}.col-left.col-period[_ngcontent-%COMP%]{flex:18 18 0}.col-left.col-event[_ngcontent-%COMP%]{flex:18 18 0;padding:0;align-items:flex-end}.col-right[_ngcontent-%COMP%]{align-items:flex-start}.col-right.col-period[_ngcontent-%COMP%]{flex:77 77 0}.col-right.col-event[_ngcontent-%COMP%]{flex:77 77 0;padding:0}.col-center[_ngcontent-%COMP%]{min-height:6rem;justify-content:center;margin:0}.col-center.col-period[_ngcontent-%COMP%]{flex:5 5 0;min-height:3rem}.col-center.col-event[_ngcontent-%COMP%]{flex:5 5 0}.center-inner[_ngcontent-%COMP%]{align-items:center}.period-container[_ngcontent-%COMP%]{min-height:20%;height:20%;max-height:20%;background:transparent;display:flex;justify-content:center;align-items:center;border-radius:6px}.period-container[_ngcontent-%COMP%]   .period-inner-container[_ngcontent-%COMP%]{position:absolute;background:orange;color:#fff;width:max-content;padding:.2rem .5rem;z-index:10}.center-icon-container[_ngcontent-%COMP%]{align-items:center;justify-content:center}.center-icon-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:1rem;width:1rem;position:absolute}}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxTimelineComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-timeline',
      template: "<div class=\"main-container\">\r\n  <div class=\"items-container\">\r\n    <div *ngFor=\"let item of items; let index = index;\" class=\"row\">\r\n      <!-- DESKTOP -->\r\n      <div class=\"col col-left desktop\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"event-outer-container\" *ngIf=\"item.eventInfo && item.position === ngxTimelineItemPosition.ON_LEFT\">\r\n          <ng-container *ngTemplateOutlet=\"eventCustomTemplate || eventTemplate; context: {event: item, colSidePosition: ngxTimelineItemPosition.ON_LEFT}\"></ng-container>\r\n        </div>\r\n        <div class=\"hour left\" *ngIf=\"item.eventInfo && item.position === ngxTimelineItemPosition.ON_RIGHT\">\r\n          <ng-container *ngTemplateOutlet=\"dateInstantCustomTemplate || dateInstantTemplate; context: {item: item.eventInfo}\" ></ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col col-center desktop\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"center-inner\" *ngIf=\"item.periodInfo\">\r\n          <ng-container *ngTemplateOutlet=\"periodCustomTemplate || periodTemplate; context: {period: item.periodInfo, index: index, event: item}\"></ng-container>\r\n        </div>\r\n        <div class=\"center-inner no-period-key\" *ngIf=\"!item.periodInfo\">\r\n          <ng-container *ngTemplateOutlet=\"centerLinesIconTemplate; context: {event: item, index: index}\"></ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col col-right desktop\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"event-outer-container\" *ngIf=\"item.eventInfo && item.position === ngxTimelineItemPosition.ON_RIGHT\">\r\n          <ng-container *ngTemplateOutlet=\"eventCustomTemplate || eventTemplate; context: {event: item, colSidePosition: ngxTimelineItemPosition.ON_RIGHT}\"></ng-container>\r\n        </div>\r\n        <div class=\"hour right\" *ngIf=\"item.eventInfo && item.position === ngxTimelineItemPosition.ON_LEFT\">\r\n          <ng-container *ngTemplateOutlet=\"dateInstantCustomTemplate || dateInstantTemplate; context: {item: item.eventInfo}\" ></ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- MOBILE -->\r\n      <div class=\"col col-left mobile\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"hour left\" *ngIf=\"item.eventInfo\">\r\n          <div class=\"hour-inner-container\">\r\n            <ng-container *ngTemplateOutlet=\"dateInstantCustomTemplate || dateInstantTemplate; context: {item: item.eventInfo}\" ></ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col col-center mobile\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"center-inner\" *ngIf=\"item.periodInfo;\">\r\n            <ng-container *ngTemplateOutlet=\"periodCustomTemplate || periodTemplate; context: {period: item.periodInfo, index: index, event: item}\"></ng-container>\r\n        </div>\r\n        <div class=\"center-inner no-period-key\" *ngIf=\"!item.periodInfo;\">\r\n          <ng-container *ngTemplateOutlet=\"centerLinesIconTemplate; context: {event: item, index: index}\"></ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col col-right mobile\" [ngClass]=\"item.periodInfo ? 'col-period' : 'col-event'\">\r\n        <div class=\"event-outer-container\" *ngIf=\"item.eventInfo\">\r\n          <ng-container *ngTemplateOutlet=\"eventCustomTemplate || eventTemplate; context: {event: item, colSidePosition: ngxTimelineItemPosition.ON_RIGHT}\"></ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #centerLinesIconTemplate let-index=index let-event=event>\r\n  <div class=\"line\"></div>\r\n  <ng-container *ngTemplateOutlet=\"centerIconCustomTemplate || centerIconTemplate; context: {index:index, event:event}\"></ng-container>\r\n  <div [ngClass]=\"{'transparent last-line': index === items.length - 1}\" class=\"line\"></div>\r\n</ng-template>\r\n\r\n<ng-template #centerIconTemplate let-index=index let-event=event>\r\n  <div class=\"center-icon-container\">\r\n    <div class=\"icon\"></div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #dateInstantTemplate let-item=item>\r\n  <span>\r\n    {{item?.timestamp | ngxdate : ngxDateFormat.HOURS_MINUTES : langCode}}\r\n  </span>\r\n</ng-template>\r\n\r\n<ng-template #periodTemplate let-period=period let-index=index let-event=event>\r\n  <div [ngClass]=\"{'transparent first-line': !index}\" class=\"line\"></div>\r\n  <div class=\"period-container\">\r\n    <div class=\"period-inner-container\">\r\n      <span>{{period?.firstDate | ngxdate : getPeriodKeyDateFormat() : langCode}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"line\"></div>\r\n</ng-template>\r\n\r\n<ng-template #eventTemplate let-event=event let-colSidePosition=colSidePosition>\r\n  <ngx-timeline-event\r\n    [event]=\"event\"\r\n    [langCode]=\"langCode\"\r\n    [enableAnimation]=\"enableAnimation\"\r\n    [innerEventCustomTemplate]=\"innerEventCustomTemplate\"\r\n    [colSidePosition]=\"colSidePosition\"\r\n    (clickEmitter)=\"clickEmitter.next($event)\">\r\n  </ngx-timeline-event>\r\n</ng-template>\r\n\r\n",
      styles: [".main-container{display:flex;justify-content:center;width:100%}.items-container{padding:1rem 0;min-width:max(20rem,100%)}.row{display:flex;flex-wrap:wrap}.row>[class*=col-]{display:flex;flex-direction:column;justify-content:center}.col-left{align-items:flex-end;padding:0;flex:49 49 0}.col-right{align-items:flex-start;padding:0;flex:49 49 0}.col-center{min-height:6rem;padding:0;flex:2 2 0}.center-inner{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.center-inner .line{min-height:50%;max-height:50%;height:50%;background:#464646;width:.1rem}.center-inner .line.transparent{background:transparent}.period-container{background:orange;color:#fff;margin:0;padding:.2rem .5rem}.period-container .period-inner-container{width:max-content;padding:.2rem .5rem;z-index:10}.center-icon-container{padding:.8rem 0;display:flex;justify-content:center;align-items:center;position:relative;height:10px;width:10px;background:white}.center-icon-container .icon{height:1rem;width:1rem;border-radius:50%;background:orange;margin:0;position:absolute}.event-outer-container{margin:0 .5rem;width:100%}.hour{padding:.5rem;background:none;display:flex;justify-content:center;align-items:center}.hour.right{justify-content:flex-start}.hour.left{justify-content:flex-end}.hour .hour-inner-container{margin:0}.desktop{display:flex!important}.mobile{display:none!important}@media (max-width: 900px){.desktop{display:none!important}.mobile{display:flex!important}.event-outer-container{margin:.5rem .3rem}.col-left{align-items:flex-start}.col-left .hour{font-size:12px;padding:0;margin-right:.3rem}.col-left.col-period{flex:18 18 0}.col-left.col-event{flex:18 18 0;padding:0;align-items:flex-end}.col-right{align-items:flex-start}.col-right.col-period{flex:77 77 0}.col-right.col-event{flex:77 77 0;padding:0}.col-center{min-height:6rem;justify-content:center;margin:0}.col-center.col-period{flex:5 5 0;min-height:3rem}.col-center.col-event{flex:5 5 0}.center-inner{align-items:center}.period-container{min-height:20%;height:20%;max-height:20%;background:transparent;display:flex;justify-content:center;align-items:center;border-radius:6px}.period-container .period-inner-container{position:absolute;background:orange;color:#fff;width:max-content;padding:.2rem .5rem;z-index:10}.center-icon-container{align-items:center;justify-content:center}.center-icon-container .icon{height:1rem;width:1rem;position:absolute}}\n"]
    }]
  }], function () {
    return [];
  }, {
    events: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    langCode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    enableAnimation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    reverseOrder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    changeSideInGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    periodCustomTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    eventCustomTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    centerIconCustomTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dateInstantCustomTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    innerEventCustomTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clickEmitter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.registerLocaleData)(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_3__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.registerLocaleData)(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_5__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.registerLocaleData)(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_6__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.registerLocaleData)(_angular_common_locales_sl__WEBPACK_IMPORTED_MODULE_7__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.registerLocaleData)(_angular_common_locales_tr__WEBPACK_IMPORTED_MODULE_8__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.registerLocaleData)(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_9__["default"]);

class NgxTimelineModule {}

NgxTimelineModule.ɵfac = function NgxTimelineModule_Factory(t) {
  return new (t || NgxTimelineModule)();
};

NgxTimelineModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxTimelineModule
});
NgxTimelineModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxTimelineModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgxTimelineComponent, NgxTimelineEventComponent, NgxDatePipe],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [NgxTimelineComponent, NgxDatePipe]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxTimelineModule, {
    declarations: [NgxTimelineComponent, NgxTimelineEventComponent, NgxDatePipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [NgxTimelineComponent, NgxDatePipe]
  });
})();
/*
 * Public API Surface of ngx-timeline
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6203)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map