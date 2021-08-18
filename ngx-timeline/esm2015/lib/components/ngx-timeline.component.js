import { Component, Input, Output } from '@angular/core';
import { NgxTimelineItemPosition, NgxDateFormat, NgxTimelineEventGroup, NgxTimelineEventChangeSideInGroup, periodKeyDateFormat, fieldsToCheckEventChangeSideInGroup, fieldsToAddEventGroup } from '../models';
import { BehaviorSubject } from 'rxjs';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpbWVsaW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aW1lbGluZS9zcmMvbGliL2NvbXBvbmVudHMvbmd4LXRpbWVsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBeUMsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFHTCx1QkFBdUIsRUFFdkIsYUFBYSxFQUNiLHFCQUFxQixFQUNyQixpQ0FBaUMsRUFDakMsbUJBQW1CLEVBQ25CLG1DQUFtQyxFQUNuQyxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBT3ZDLE1BQU0sT0FBTyxvQkFBb0I7SUF1RC9CO1FBOUNBOztXQUVHO1FBQ00sb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDaEM7O1dBRUc7UUFDTSxlQUFVLEdBQTJCLHFCQUFxQixDQUFDLFVBQVUsQ0FBQztRQUMvRTs7V0FFRztRQUNNLHNCQUFpQixHQUF1QyxpQ0FBaUMsQ0FBQyxnQkFBZ0IsQ0FBQztRQXFCcEg7O1dBRUc7UUFFSCxpQkFBWSxHQUFxQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzRSxXQUFNLEdBQTBDLEVBQUUsQ0FBQztRQUNuRCxZQUFPLEdBQXNCLEVBQUUsQ0FBQztRQUNoQyxVQUFLLEdBQXNCLEVBQUUsQ0FBQztRQUM5Qiw0QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQztRQUNsRCxrQkFBYSxHQUFHLGFBQWEsQ0FBQztRQUViLGNBQVMsR0FBRyxHQUFHLENBQUM7SUFFbEIsQ0FBQztJQUdoQixRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFz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Q0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sYUFBYSxDQUFDLEtBQWUsRUFBRSxTQUFpQjtRQUN0RCxPQUFPO1lBQ0wsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLFNBQVM7Z0JBQ1QsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBaUI7YUFDdkQ7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVTLHFCQUFxQixDQUFDLEtBQXVCO1FBQ3JELE9BQU8scUJBQXFCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUcsQ0FBQzs7O1lBM0tGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsOGhLQUE0Qzs7YUFFN0M7Ozs7cUJBS0UsS0FBSzt1QkFJTCxLQUFLOzhCQUlMLEtBQUs7eUJBSUwsS0FBSztnQ0FJTCxLQUFLO21DQUlMLEtBQUs7a0NBSUwsS0FBSzt1Q0FJTCxLQUFLO3dDQUlMLEtBQUs7dUNBSUwsS0FBSzsyQkFJTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBUZW1wbGF0ZVJlZiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5neFRpbWVsaW5lRXZlbnQsXG4gIE5neFRpbWVsaW5lSXRlbSxcbiAgTmd4VGltZWxpbmVJdGVtUG9zaXRpb24sXG4gIE5neFRpbWVsaW5lUGVyaW9kSW5mbyxcbiAgTmd4RGF0ZUZvcm1hdCxcbiAgTmd4VGltZWxpbmVFdmVudEdyb3VwLFxuICBOZ3hUaW1lbGluZUV2ZW50Q2hhbmdlU2lkZUluR3JvdXAsXG4gIHBlcmlvZEtleURhdGVGb3JtYXQsXG4gIGZpZWxkc1RvQ2hlY2tFdmVudENoYW5nZVNpZGVJbkdyb3VwLFxuICBmaWVsZHNUb0FkZEV2ZW50R3JvdXAgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC10aW1lbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtdGltZWxpbmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtdGltZWxpbmUuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hUaW1lbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIExpc3Qgb2YgZXZlbnRzIHRvIGJlIGRpc3BsYXllZFxuICAgKi9cbiAgQElucHV0KCkgZXZlbnRzOiBOZ3hUaW1lbGluZUV2ZW50W107XG4gIC8qKlxuICAgKiBMYW5ndWFnZSBjb2RlIHVzZWQgdG8gc2hvdyB0aGUgZGF0ZSBmb3JtYXR0ZWRcbiAgICovXG4gIEBJbnB1dCgpIGxhbmdDb2RlPzogc3RyaW5nO1xuICAvKipcbiAgICogQm9vbGVhbiB1c2VkIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBhbmltYXRpb25zXG4gICAqL1xuICBASW5wdXQoKSBlbmFibGVBbmltYXRpb24gPSB0cnVlO1xuICAvKipcbiAgICogTG9naWMgdG8gYmUgYXBwbGllZCBpbiBvcmRlciB0byBncm91cCBldmVudHNcbiAgICovXG4gIEBJbnB1dCgpIGdyb3VwRXZlbnQ/OiBOZ3hUaW1lbGluZUV2ZW50R3JvdXAgPSBOZ3hUaW1lbGluZUV2ZW50R3JvdXAuTU9OVEhfWUVBUjtcbiAgLyoqXG4gICAqIExvZ2ljIHRvIGJlIGFwcGxpZWQgaW4gb3JkZXIgdG8gcHV0IGV2ZXRucyBvbiBMRUZUIG9yIFJJR0hUXG4gICAqL1xuICBASW5wdXQoKSBjaGFuZ2VTaWRlSW5Hcm91cD86IE5neFRpbWVsaW5lRXZlbnRDaGFuZ2VTaWRlSW5Hcm91cCA9IE5neFRpbWVsaW5lRXZlbnRDaGFuZ2VTaWRlSW5Hcm91cC5PTl9ESUZGRVJFTlRfREFZO1xuICAvKipcbiAgICogQ3VzdG9tIFRlbXBsYXRlIGRpc3BsYXllZCBiZWZvcmUgYSBncm91cCBvZiBldmVudHNcbiAgICovXG4gIEBJbnB1dCgpIHBlcmlvZEN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKipcbiAgICogQ3VzdG9tIFRlbXBsYXRlIGRpc3BsYXllZCB0byBzaG93IGEgc2luZ2xlIGV2ZW50XG4gICAqL1xuICBASW5wdXQoKSBldmVudEN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKipcbiAgICogQ3VzdG9tIFRlbXBsYXRlIGRpc3BsYXllZCB0byBzaG93IGFuIHNlcGFyYXRvciBpY29uXG4gICAqL1xuICBASW5wdXQoKSBjZW50ZXJJY29uQ3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKlxuICAgKiBDdXN0b20gVGVtcGxhdGUgZGlzcGxheWVkIHRvIHNob3cgdGhlIHNpZGUgZGF0ZVxuICAgKi9cbiAgQElucHV0KCkgZGF0ZUluc3RhbnRDdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqXG4gICAqIEN1c3RvbSBUZW1wbGF0ZSBkaXNwbGF5ZWQgdG8gc2hvdyB0aGUgaW5uZXIgZXZlbnRcbiAgICovXG4gIEBJbnB1dCgpIGlubmVyRXZlbnRDdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgLyoqXG4gICAqIE91dHB1dCBjbGljayBldmVudCBlbWl0dGVyXG4gICAqL1xuICBAT3V0cHV0KClcbiAgY2xpY2tFbWl0dGVyOiBCZWhhdmlvclN1YmplY3Q8Tmd4VGltZWxpbmVJdGVtPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgZ3JvdXBzOiB7IFtrZXk6IHN0cmluZ106IE5neFRpbWVsaW5lRXZlbnRbXSB9ID0ge307XG4gIHBlcmlvZHM6IE5neFRpbWVsaW5lSXRlbVtdID0gW107XG4gIGl0ZW1zOiBOZ3hUaW1lbGluZUl0ZW1bXSA9IFtdO1xuICBuZ3hUaW1lbGluZUl0ZW1Qb3NpdGlvbiA9IE5neFRpbWVsaW5lSXRlbVBvc2l0aW9uO1xuICBuZ3hEYXRlRm9ybWF0ID0gTmd4RGF0ZUZvcm1hdDtcblxuICBwcml2YXRlIHJlYWRvbmx5IHNlcGFyYXRvciA9ICcvJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmdyb3VwRXZlbnRzKHRoaXMuZXZlbnRzKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmdyb3VwRXZlbnRzKHRoaXMuZXZlbnRzKTtcbiAgfVxuXG4gIGdldFBlcmlvZEtleURhdGVGb3JtYXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcGVyaW9kS2V5RGF0ZUZvcm1hdFt0aGlzLmdyb3VwRXZlbnRdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuZ3JvdXBzID0ge307XG4gICAgdGhpcy5wZXJpb2RzID0gW107XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdyb3VwRXZlbnRzKGV2ZW50czogTmd4VGltZWxpbmVFdmVudFtdKTogdm9pZCB7XG4gICAgaWYgKGV2ZW50cykge1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgdGhpcy5zb3J0RXZlbnRzKGV2ZW50cyk7XG4gICAgICB0aGlzLnNldEdyb3VwcyhldmVudHMpO1xuICAgICAgdGhpcy5zZXRQZXJpb2RzKCk7XG4gICAgICB0aGlzLnNldEl0ZW1zKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHNvcnRFdmVudHMoZXZlbnRzOiBOZ3hUaW1lbGluZUV2ZW50W10pOiB2b2lkIHtcbiAgICBldmVudHMuc29ydCgoYSwgYikgPT4gYS50aW1lc3RhbXAuZ2V0VGltZSgpIC0gYi50aW1lc3RhbXAuZ2V0VGltZSgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRHcm91cHMoZXZlbnRzOiBOZ3hUaW1lbGluZUV2ZW50W10pOiB2b2lkIHtcbiAgICBldmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgIC8vIGNvbnZlcnNpb24gZnJvbSBzdHJpbmcgdG8gYWN0dWFsIERhdGVcbiAgICAgIGV2ZW50LnRpbWVzdGFtcCA9IG5ldyBEYXRlKGV2ZW50LnRpbWVzdGFtcCk7XG4gICAgICBjb25zdCBwZXJpb2RLZXkgPSB0aGlzLmdldFBlcmlvZEtleUZyb21FdmVudChldmVudCk7XG4gICAgICBpZiAoIXRoaXMuZ3JvdXBzW3BlcmlvZEtleV0pIHtcbiAgICAgICAgdGhpcy5ncm91cHNbcGVyaW9kS2V5XSA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy5ncm91cHNbcGVyaW9kS2V5XS5wdXNoKGV2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXRJdGVtcygpOiB2b2lkIHtcbiAgICB0aGlzLnBlcmlvZHMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgLy8gaW5zZXJ0IGZpcnN0IHRoZSBwZXJpb2RcbiAgICAgIHRoaXMuaXRlbXMucHVzaChwKTtcbiAgICAgIC8vIGluIGVhY2ggcGVyaW9kIHB1dHRpbmcgaXRlbXMgb24gbGVmdFxuICAgICAgY29uc3Qgb25MZWZ0ID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHBlcmlvZEluZm8gPSBwLnBlcmlvZEluZm87XG4gICAgICAvLyBpbnNlcnQgdGhlbiBhbGwgdGhlIGV2ZW50cyBpbiB0aGlzIHBlcmlvZFxuICAgICAgdGhpcy5hZGRQZXJpb2RFdmVudHMocGVyaW9kSW5mbywgb25MZWZ0KTtcbiAgICAgIC8vIG9uTGVmdCA9IHRoaXMuYWRkRXZlbnRJdGVtc0FuZEdldElmT25MZWZ0KHBlcmlvZEluZm8sIG9uTGVmdCk7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkUGVyaW9kRXZlbnRzKHBlcmlvZEluZm86IE5neFRpbWVsaW5lUGVyaW9kSW5mbywgb25MZWZ0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5ncm91cHNbcGVyaW9kSW5mby5wZXJpb2RLZXldLmZvckVhY2goKGV2ZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcHJldkV2ZW50ID0gdGhpcy5ncm91cHNbcGVyaW9kSW5mby5wZXJpb2RLZXldW2luZGV4IC0gMV07XG4gICAgICBpZiAoaW5kZXggPiAwICYmIHRoaXMuY29tcGFyZUV2ZW50cyhwcmV2RXZlbnQsIGV2ZW50KSkge1xuICAgICAgICBvbkxlZnQgPSAhb25MZWZ0O1xuICAgICAgfVxuICAgICAgdGhpcy5wdXNoRXZlbnRPbkl0ZW1zKGV2ZW50LCBvbkxlZnQpO1xuICAgIH0pO1xuICAgIC8vIHJldHVybiBvbkxlZnQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgcHVzaEV2ZW50T25JdGVtcyhldmVudDogTmd4VGltZWxpbmVFdmVudCwgb25MZWZ0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcy5wdXNoKHtcbiAgICAgIGV2ZW50SW5mbzogeyAuLi5ldmVudCB9LCBwb3NpdGlvbjogb25MZWZ0ID9cbiAgICAgICAgdGhpcy5uZ3hUaW1lbGluZUl0ZW1Qb3NpdGlvbi5PTl9MRUZUIDogdGhpcy5uZ3hUaW1lbGluZUl0ZW1Qb3NpdGlvbi5PTl9SSUdIVFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhcmUgdGhlIGV2ZW50cyBpbnNpZGUgdGhlIHNhbWUgZ3JvdXBcbiAgICovXG4gIHByb3RlY3RlZCBjb21wYXJlRXZlbnRzKHByZXZFdmVudDogTmd4VGltZWxpbmVFdmVudCwgZXZlbnQ6IE5neFRpbWVsaW5lRXZlbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VTaWRlSW5Hcm91cCA9PT0gTmd4VGltZWxpbmVFdmVudENoYW5nZVNpZGVJbkdyb3VwLkFMTCB8fFxuICAgICAgdGhpcy5jb21wYXJlRXZlbnRzRmllbGQocHJldkV2ZW50LCBldmVudCwgLi4uZmllbGRzVG9DaGVja0V2ZW50Q2hhbmdlU2lkZUluR3JvdXBbdGhpcy5jaGFuZ2VTaWRlSW5Hcm91cF0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNvbXBhcmVFdmVudHNGaWVsZChwcmV2RXZlbnQ6IE5neFRpbWVsaW5lRXZlbnQsIGV2ZW50OiBOZ3hUaW1lbGluZUV2ZW50LCAuLi5maWVsZHM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoKHJlcywgZmllbGQpID0+IHJlcyA9IHJlcyB8fCBwcmV2RXZlbnQudGltZXN0YW1wW2ZpZWxkXSgpICE9PSBldmVudC50aW1lc3RhbXBbZmllbGRdKCksICEhZmFsc2UpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldFBlcmlvZHMoKTogdm9pZCB7XG4gICAgdGhpcy5wZXJpb2RzID0gT2JqZWN0LmtleXModGhpcy5ncm91cHMpLm1hcCgocGVyaW9kS2V5KSA9PiB7XG4gICAgICBjb25zdCBzcGxpdCA9IHBlcmlvZEtleS5zcGxpdCh0aGlzLnNlcGFyYXRvcik7XG4gICAgICByZXR1cm4gdGhpcy5nZXRQZXJpb2RJbmZvKHNwbGl0LCBwZXJpb2RLZXkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQZXJpb2RJbmZvKHNwbGl0OiBzdHJpbmdbXSwgcGVyaW9kS2V5OiBzdHJpbmcpOiB7IHBlcmlvZEluZm86IE5neFRpbWVsaW5lUGVyaW9kSW5mbyB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGVyaW9kSW5mbzoge1xuICAgICAgICB5ZWFyOiBOdW1iZXIoc3BsaXRbMF0pLFxuICAgICAgICBtb250aDogTnVtYmVyKHNwbGl0WzFdKSxcbiAgICAgICAgZGF5OiBOdW1iZXIoc3BsaXRbMl0pLFxuICAgICAgICBwZXJpb2RLZXksXG4gICAgICAgIGZpcnN0RGF0ZTogdGhpcy5ncm91cHNbcGVyaW9kS2V5XVswXS50aW1lc3RhbXAgYXMgRGF0ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRQZXJpb2RLZXlGcm9tRXZlbnQoZXZlbnQ6IE5neFRpbWVsaW5lRXZlbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiBmaWVsZHNUb0FkZEV2ZW50R3JvdXBbdGhpcy5ncm91cEV2ZW50XS5tYXAoZmllbGQgPT4gZXZlbnQudGltZXN0YW1wW2ZpZWxkXSgpKS5qb2luKHRoaXMuc2VwYXJhdG9yKTtcbiAgfVxufVxuIl19