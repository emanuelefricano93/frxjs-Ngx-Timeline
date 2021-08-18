import { Component, Input, Output } from '@angular/core';
import { NgxTimelineItemPosition } from '../../models/NgxTimelineEvent';
import { DatePipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { supportedLanguageCodes } from '../../models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function NgxTimelineEventComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 6);
} }
function NgxTimelineEventComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NgxTimelineEventComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 7);
} }
function NgxTimelineEventComponent_ng_template_5_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵelementStart(5, "p", 17);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div");
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dateObj_r7 = ctx.ngIf;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(dateObj_r7 == null ? null : dateObj_r7.month);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(dateObj_r7 == null ? null : dateObj_r7.day);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(dateObj_r7 == null ? null : dateObj_r7.year);
} }
const _c0 = function (a0) { return { "reverse": a0 }; };
function NgxTimelineEventComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵelementStart(2, "div", 10);
    i0.ɵɵelementStart(3, "div", 11);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 12);
    i0.ɵɵelementStart(7, "p", 13);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 14);
    i0.ɵɵelement(10, "hr");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, NgxTimelineEventComponent_ng_template_5_div_11_Template, 10, 3, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r5 = ctx.event;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, ctx_r4.colSidePosition === ctx_r4.ngxTimelineItemPosition.ON_LEFT));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 4, event_r5 == null ? null : event_r5.eventInfo == null ? null : event_r5.eventInfo.title));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(event_r5 == null ? null : event_r5.eventInfo == null ? null : event_r5.eventInfo.description);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r4.getDateObj());
} }
const _c1 = function (a0) { return { "enableAnimation": a0 }; };
const _c2 = function (a0) { return { event: a0 }; };
export class NgxTimelineEventComponent {
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
NgxTimelineEventComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxTimelineEventComponent, selectors: [["ngx-timeline-event"]], inputs: { event: "event", colSidePosition: "colSidePosition", langCode: "langCode", innerEventCustomTemplate: "innerEventCustomTemplate", enableAnimation: "enableAnimation" }, outputs: { clickEmitter: "clickEmitter" }, decls: 7, vars: 9, consts: [[1, "event-wrapper-container", 3, "click"], ["class", "arrow left", 4, "ngIf"], [1, "event", 3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "arrow right", 4, "ngIf"], ["innerEventContainer", ""], [1, "arrow", "left"], [1, "arrow", "right"], [1, "event-container", 3, "ngClass"], [1, "event-info-container"], [1, "event-info-header"], [1, "title-container"], [1, "event-info-body"], [1, "event-info-description"], [1, "event-divider-container"], ["class", "event-date-container", 4, "ngIf"], [1, "event-date-container"], [1, "day"]], template: function NgxTimelineEventComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function NgxTimelineEventComponent_Template_div_click_0_listener() { return ctx.clickEmitter.next(ctx.event); });
        i0.ɵɵtemplate(1, NgxTimelineEventComponent_div_1_Template, 1, 0, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, NgxTimelineEventComponent_ng_container_3_Template, 1, 0, "ng-container", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, NgxTimelineEventComponent_div_4_Template, 1, 0, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, NgxTimelineEventComponent_ng_template_5_Template, 12, 8, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r3 = i0.ɵɵreference(6);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.colSidePosition === ctx.ngxTimelineItemPosition.ON_RIGHT);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1, ctx.enableAnimation));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.innerEventCustomTemplate || _r3)("ngTemplateOutletContext", i0.ɵɵpureFunction1(7, _c2, ctx.event));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.colSidePosition === ctx.ngxTimelineItemPosition.ON_LEFT);
    } }, directives: [i1.NgIf, i1.NgClass, i1.NgTemplateOutlet], pipes: [i1.TitleCasePipe], styles: [".event-wrapper-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;cursor:pointer}.arrow[_ngcontent-%COMP%]{width:0;height:0;border-top:.5rem solid transparent;border-bottom:.5rem solid transparent;border-radius:6px;z-index:10}.arrow.right[_ngcontent-%COMP%]{filter:drop-shadow(2px 0 0 #244a6e22);border-left:.5rem solid #fff}.arrow.left[_ngcontent-%COMP%]{filter:drop-shadow(-1px 0 0 #244a6e22);border-right:.5rem solid #fff}.event[_ngcontent-%COMP%]{background:#fff;border-radius:.8rem;padding:1rem;width:100%;margin:1rem 0}.event.enableAnimation[_ngcontent-%COMP%]:hover{padding:2rem;transition:all .5s ease-in-out}.event.enableAnimation[_ngcontent-%COMP%]:not(:hover){padding:1rem;transition:all .5s ease-in-out}.event[_ngcontent-%COMP%]:not(.hour){background:#fff 0 0 no-repeat padding-box;box-shadow:0 3px 6px rgba(36,74,110,.3215686274509804)}.event.hour[_ngcontent-%COMP%]{padding:.5rem;background:none;display:flex;justify-content:center;align-items:center}.event.hour.right[_ngcontent-%COMP%]{justify-content:flex-start}.event.hour.left[_ngcontent-%COMP%]{justify-content:flex-end}.event[_ngcontent-%COMP%]   .hour-inner-container[_ngcontent-%COMP%]{margin:0}.event-container[_ngcontent-%COMP%]{display:flex}.event-container.reverse[_ngcontent-%COMP%]{flex-direction:row-reverse}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;padding:.1rem;flex:88 88 0}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-header[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]{margin-right:.3rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-header[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{color:orange;width:1.5rem;height:1.5rem;margin-bottom:.1rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-header[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{font-weight:700;font-size:15px}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]{padding:.5rem 0;display:flex;flex-direction:column;justify-content:flex-start;overflow-wrap:anywhere}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .event-info-description[_ngcontent-%COMP%]{margin-bottom:.5rem;font-size:13px}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]{display:flex;font-size:13px;justify-content:flex-start;align-items:center}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;margin:0}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   .expiration-label[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   .expiration-label[_ngcontent-%COMP%]{margin-right:.5rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   .category-value[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .category-container[_ngcontent-%COMP%]   .expiration-value[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   .category-value[_ngcontent-%COMP%], .event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-body[_ngcontent-%COMP%]   .expiration-container[_ngcontent-%COMP%]   .expiration-value[_ngcontent-%COMP%]{font-weight:700}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-footer[_ngcontent-%COMP%]{font-size:15px;cursor:pointer;padding-top:1rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-footer[_ngcontent-%COMP%]   .footer-inner-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:flex-end}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-footer[_ngcontent-%COMP%]   .footer-inner-container[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{color:#006cb4;width:1rem;height:1rem;margin-bottom:.1rem}.event-container[_ngcontent-%COMP%]   .event-info-container[_ngcontent-%COMP%]   .event-info-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#006cb4}.event-container[_ngcontent-%COMP%]   .event-divider-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:.1rem;flex:5 5 0}.event-container[_ngcontent-%COMP%]   .event-divider-container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{height:100%;width:1px;background:#e9e9e9}.event-container[_ngcontent-%COMP%]   .event-date-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:.1rem;flex:15 15 0}.event-container[_ngcontent-%COMP%]   .event-date-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;text-align:center}.event-container[_ngcontent-%COMP%]   .event-date-container[_ngcontent-%COMP%]   p.day[_ngcontent-%COMP%]{font-size:32px;font-weight:700;padding:.5rem 0}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxTimelineEventComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-timeline-event',
                templateUrl: './ngx-timeline-event.component.html',
                styleUrls: ['./ngx-timeline-event.component.scss']
            }]
    }], function () { return []; }, { event: [{
            type: Input
        }], colSidePosition: [{
            type: Input
        }], langCode: [{
            type: Input
        }], innerEventCustomTemplate: [{
            type: Input
        }], enableAnimation: [{
            type: Input
        }], clickEmitter: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpbWVsaW5lLWV2ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aW1lbGluZS9zcmMvbGliL2NvbXBvbmVudHMvbmd4LXRpbWVsaW5lLWV2ZW50L25neC10aW1lbGluZS1ldmVudC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGltZWxpbmUvc3JjL2xpYi9jb21wb25lbnRzL25neC10aW1lbGluZS1ldmVudC9uZ3gtdGltZWxpbmUtZXZlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBbUIsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7SUNIcEQseUJBQXlGOzs7SUFFdkYsd0JBQ2U7OztJQUVqQix5QkFBeUY7OztJQWtCdkYsK0JBQ0U7SUFBQSwyQkFDRTtJQUFBLHlCQUFHO0lBQUEsWUFBa0I7SUFBQSxpQkFBSTtJQUMzQixpQkFBTTtJQUNOLDJCQUNFO0lBQUEsNkJBQWU7SUFBQSxZQUFnQjtJQUFBLGlCQUFJO0lBQ3JDLGlCQUFNO0lBQ04sMkJBQ0U7SUFBQSx5QkFBRztJQUFBLFlBQWlCO0lBQUEsaUJBQUk7SUFDMUIsaUJBQU07SUFDUixpQkFBTTs7O0lBUkMsZUFBa0I7SUFBbEIsa0VBQWtCO0lBR04sZUFBZ0I7SUFBaEIsZ0VBQWdCO0lBRzVCLGVBQWlCO0lBQWpCLGlFQUFpQjs7OztJQXRCMUIsOEJBQ0U7SUFBQSw4QkFDRTtJQUFBLCtCQUNFO0lBQUEsK0JBQTZCO0lBQUEsWUFBdUM7O0lBQUEsaUJBQU07SUFDNUUsaUJBQU07SUFDTiwrQkFDRTtJQUFBLDZCQUFrQztJQUFBLFlBQWlDO0lBQUEsaUJBQUk7SUFDekUsaUJBQU07SUFDUixpQkFBTTtJQUVOLCtCQUNFO0lBQUEsc0JBQ0Y7SUFBQSxpQkFBTTtJQUVOLDRGQVVNO0lBQ1IsaUJBQU07Ozs7SUF6QnVCLHVIQUE0RTtJQUd0RSxlQUF1QztJQUF2QyxrSUFBdUM7SUFHbEMsZUFBaUM7SUFBakMsa0hBQWlDO0lBUXBDLGVBQW1CO0lBQW5CLDBDQUFtQjs7OztBRGIxRCxNQUFNLE9BQU8seUJBQXlCO0lBZ0NwQztRQWRBOztXQUVHO1FBQ00sb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDaEM7O1dBRUc7UUFDTyxpQkFBWSxHQUFxQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyRiw0QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQztRQUVqQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFFbEIsQ0FBQztJQUVQLFVBQVU7O1FBQ2xCLElBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSSxLQUFLLENBQUM7UUFDVixJQUFJLElBQUksQ0FBQztRQUNULE1BQU0sYUFBYSxTQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUywwQ0FBRSxTQUFTLENBQUM7UUFDdEQsSUFBSSxhQUFhLEVBQUU7WUFDakIsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BDLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwRSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEUsSUFBSSxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQztRQUVELE9BQU8sRUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQzVCLENBQUM7SUFFUyxXQUFXO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNySCxDQUFDOztrR0FwRFUseUJBQXlCOzhEQUF6Qix5QkFBeUI7UUNYdEMsOEJBQ0U7UUFEbUMsbUdBQVMsZ0NBQXdCLElBQUM7UUFDckUsMEVBQXlGO1FBQ3pGLDhCQUNFO1FBQUEsNEZBQ2U7UUFDakIsaUJBQU07UUFDTiwwRUFBeUY7UUFDM0YsaUJBQU07UUFFTiw0SEEyQmM7OztRQW5DTixlQUF3RDtRQUF4RCxtRkFBd0Q7UUFDM0MsZUFBZ0Q7UUFBaEQseUVBQWdEO1FBQ2xELGVBQW1FO1FBQW5FLHNFQUFtRSxrRUFBQTtRQUc5RSxlQUF1RDtRQUF2RCxrRkFBdUQ7O2tEREtsRCx5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2FBQ25EO3NDQU1VLEtBQUs7a0JBQWIsS0FBSztZQUlHLGVBQWU7a0JBQXZCLEtBQUs7WUFJRyxRQUFRO2tCQUFoQixLQUFLO1lBSUcsd0JBQXdCO2tCQUFoQyxLQUFLO1lBSUcsZUFBZTtrQkFBdkIsS0FBSztZQUlJLFlBQVk7a0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hUaW1lbGluZUl0ZW0sIE5neFRpbWVsaW5lSXRlbVBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL05neFRpbWVsaW5lRXZlbnQnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdXBwb3J0ZWRMYW5ndWFnZUNvZGVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXRpbWVsaW5lLWV2ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC10aW1lbGluZS1ldmVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25neC10aW1lbGluZS1ldmVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neFRpbWVsaW5lRXZlbnRDb21wb25lbnQge1xuXG4gIC8qKlxuICAgKiBFdmVudCB0byBiZSBkaXNwbGF5ZWRcbiAgICovXG4gIEBJbnB1dCgpIGV2ZW50OiBOZ3hUaW1lbGluZUl0ZW07XG4gIC8qKlxuICAgKiBFdmVudCBwb3NpdGlvbiByZXNwZWN0IHRvIHRoZSB2ZXJ0aWNhbCBsaW5lIChMRUZUIG9yIFJJR0hUKVxuICAgKi9cbiAgQElucHV0KCkgY29sU2lkZVBvc2l0aW9uOiBOZ3hUaW1lbGluZUl0ZW1Qb3NpdGlvbjtcbiAgLyoqXG4gICAqIExhbmd1YWdlIGNvZGUgdXNlZCB0byBmb3JtYXQgdGhlIGRhdGVzXG4gICAqL1xuICBASW5wdXQoKSBsYW5nQ29kZT86IHN0cmluZztcbiAgLyoqXG4gICAqIElubmVyIGN1c3RvbSB0ZW1wbGF0ZSB1c2VkIHRvIGRpc3BsYXkgdGhlIGV2ZW50IGRldGFpbFxuICAgKi9cbiAgQElucHV0KCkgaW5uZXJFdmVudEN1c3RvbVRlbXBsYXRlPzogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqXG4gICAqIEJvb2xlYW4gdXNlZCB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYW5pbWF0aW9uc1xuICAgKi9cbiAgQElucHV0KCkgZW5hYmxlQW5pbWF0aW9uID0gdHJ1ZTtcbiAgLyoqXG4gICAqIE91dHB1dCBjbGljayBldmVudCBlbWl0dGVyXG4gICAqL1xuICBAT3V0cHV0KCkgY2xpY2tFbWl0dGVyOiBCZWhhdmlvclN1YmplY3Q8Tmd4VGltZWxpbmVJdGVtPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgbmd4VGltZWxpbmVJdGVtUG9zaXRpb24gPSBOZ3hUaW1lbGluZUl0ZW1Qb3NpdGlvbjtcblxuICBwcml2YXRlIHJlYWRvbmx5IG1vbnRoQWJiciA9ICdNTU0nO1xuICBwcml2YXRlIHJlYWRvbmx5IGRheUZvcm1hdCA9ICdkZCc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwcm90ZWN0ZWQgZ2V0RGF0ZU9iaigpOiBhbnkge1xuICAgIGxldCBkYXk7XG4gICAgbGV0IG1vbnRoO1xuICAgIGxldCB5ZWFyO1xuICAgIGNvbnN0IGRhdGVUaW1lc3RhbXAgPSB0aGlzLmV2ZW50LmV2ZW50SW5mbz8udGltZXN0YW1wO1xuICAgIGlmIChkYXRlVGltZXN0YW1wKSB7XG4gICAgICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZShkYXRlVGltZXN0YW1wKTtcbiAgICAgIGNvbnN0IGxhbmdDb2RlID0gdGhpcy5nZXRMYW5nQ29kZSgpO1xuICAgICAgbW9udGggPSBuZXcgRGF0ZVBpcGUobGFuZ0NvZGUpLnRyYW5zZm9ybSh0aW1lc3RhbXAsIHRoaXMubW9udGhBYmJyKTtcbiAgICAgIGRheSA9IG5ldyBEYXRlUGlwZShsYW5nQ29kZSkudHJhbnNmb3JtKHRpbWVzdGFtcCwgdGhpcy5kYXlGb3JtYXQpO1xuICAgICAgeWVhciA9IHRpbWVzdGFtcC5nZXRGdWxsWWVhcigpO1xuICAgIH1cblxuICAgIHJldHVybiB7ZGF5LCBtb250aCwgeWVhcn07XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0TGFuZ0NvZGUoKTogc3RyaW5nICB7XG4gICAgcmV0dXJuIHRoaXMubGFuZ0NvZGUgJiYgc3VwcG9ydGVkTGFuZ3VhZ2VDb2Rlcy5pbmNsdWRlcyh0aGlzLmxhbmdDb2RlKSA/IHRoaXMubGFuZ0NvZGUgOiBzdXBwb3J0ZWRMYW5ndWFnZUNvZGVzWzBdO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJldmVudC13cmFwcGVyLWNvbnRhaW5lclwiIChjbGljayk9XCJjbGlja0VtaXR0ZXIubmV4dChldmVudClcIj5cbiAgPGRpdiAqbmdJZj1cImNvbFNpZGVQb3NpdGlvbj09PW5neFRpbWVsaW5lSXRlbVBvc2l0aW9uLk9OX1JJR0hUXCIgY2xhc3M9XCJhcnJvdyBsZWZ0XCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJldmVudFwiIFtuZ0NsYXNzXT1cInsnZW5hYmxlQW5pbWF0aW9uJzogZW5hYmxlQW5pbWF0aW9ufVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpbm5lckV2ZW50Q3VzdG9tVGVtcGxhdGUgfHwgaW5uZXJFdmVudENvbnRhaW5lcjsgY29udGV4dDoge2V2ZW50OiBldmVudH1cIj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJjb2xTaWRlUG9zaXRpb249PT1uZ3hUaW1lbGluZUl0ZW1Qb3NpdGlvbi5PTl9MRUZUXCIgY2xhc3M9XCJhcnJvdyByaWdodFwiPjwvZGl2PlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjaW5uZXJFdmVudENvbnRhaW5lciBsZXQtZXZlbnQ9ZXZlbnQ+XG4gIDxkaXYgY2xhc3M9XCJldmVudC1jb250YWluZXJcIiBbbmdDbGFzc109XCJ7J3JldmVyc2UnOiBjb2xTaWRlUG9zaXRpb24gPT09IG5neFRpbWVsaW5lSXRlbVBvc2l0aW9uLk9OX0xFRlR9XCI+XG4gICAgPGRpdiBjbGFzcz1cImV2ZW50LWluZm8tY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtaW5mby1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLWNvbnRhaW5lclwiPnt7ZXZlbnQ/LmV2ZW50SW5mbz8udGl0bGUgfCB0aXRsZWNhc2V9fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtaW5mby1ib2R5XCI+XG4gICAgICAgIDxwIGNsYXNzPVwiZXZlbnQtaW5mby1kZXNjcmlwdGlvblwiPnt7ZXZlbnQ/LmV2ZW50SW5mbz8uZGVzY3JpcHRpb259fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImV2ZW50LWRpdmlkZXItY29udGFpbmVyXCI+XG4gICAgICA8aHIvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImV2ZW50LWRhdGUtY29udGFpbmVyXCIgKm5nSWY9XCJnZXREYXRlT2JqKCkgYXMgZGF0ZU9ialwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+e3tkYXRlT2JqPy5tb250aH19PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzcz1cImRheVwiPnt7ZGF0ZU9iaj8uZGF5fX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPnt7ZGF0ZU9iaj8ueWVhcn19PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==