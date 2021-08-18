import { OnInit, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import { NgxTimelineEvent, NgxTimelineItem, NgxTimelineItemPosition, NgxTimelinePeriodInfo, NgxDateFormat, NgxTimelineEventGroup, NgxTimelineEventChangeSideInGroup } from '../models';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NgxTimelineComponent implements OnInit, OnChanges {
    /**
     * List of events to be displayed
     */
    events: NgxTimelineEvent[];
    /**
     * Language code used to show the date formatted
     */
    langCode?: string;
    /**
     * Boolean used to enable or disable the animations
     */
    enableAnimation: boolean;
    /**
     * Logic to be applied in order to group events
     */
    groupEvent?: NgxTimelineEventGroup;
    /**
     * Logic to be applied in order to put evetns on LEFT or RIGHT
     */
    changeSideInGroup?: NgxTimelineEventChangeSideInGroup;
    /**
     * Custom Template displayed before a group of events
     */
    periodCustomTemplate: TemplateRef<any>;
    /**
     * Custom Template displayed to show a single event
     */
    eventCustomTemplate: TemplateRef<any>;
    /**
     * Custom Template displayed to show an separator icon
     */
    centerIconCustomTemplate: TemplateRef<any>;
    /**
     * Custom Template displayed to show the side date
     */
    dateInstantCustomTemplate: TemplateRef<any>;
    /**
     * Custom Template displayed to show the inner event
     */
    innerEventCustomTemplate: TemplateRef<any>;
    /**
     * Output click event emitter
     */
    clickEmitter: BehaviorSubject<NgxTimelineItem>;
    groups: {
        [key: string]: NgxTimelineEvent[];
    };
    periods: NgxTimelineItem[];
    items: NgxTimelineItem[];
    ngxTimelineItemPosition: typeof NgxTimelineItemPosition;
    ngxDateFormat: typeof NgxDateFormat;
    private readonly separator;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    getPeriodKeyDateFormat(): string;
    protected clear(): void;
    protected groupEvents(events: NgxTimelineEvent[]): void;
    protected sortEvents(events: NgxTimelineEvent[]): void;
    protected setGroups(events: NgxTimelineEvent[]): void;
    protected setItems(): void;
    protected addPeriodEvents(periodInfo: NgxTimelinePeriodInfo, onLeft: boolean): void;
    protected pushEventOnItems(event: NgxTimelineEvent, onLeft: boolean): void;
    /**
     * Compare the events inside the same group
     */
    protected compareEvents(prevEvent: NgxTimelineEvent, event: NgxTimelineEvent): boolean;
    protected compareEventsField(prevEvent: NgxTimelineEvent, event: NgxTimelineEvent, ...fields: string[]): boolean;
    protected setPeriods(): void;
    private getPeriodInfo;
    protected getPeriodKeyFromEvent(event: NgxTimelineEvent): string;
    static ɵfac: i0.ɵɵFactoryDef<NgxTimelineComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NgxTimelineComponent, "ngx-timeline", never, { "events": "events"; "langCode": "langCode"; "enableAnimation": "enableAnimation"; "groupEvent": "groupEvent"; "changeSideInGroup": "changeSideInGroup"; "periodCustomTemplate": "periodCustomTemplate"; "eventCustomTemplate": "eventCustomTemplate"; "centerIconCustomTemplate": "centerIconCustomTemplate"; "dateInstantCustomTemplate": "dateInstantCustomTemplate"; "innerEventCustomTemplate": "innerEventCustomTemplate"; }, { "clickEmitter": "clickEmitter"; }, never, never>;
}
//# sourceMappingURL=ngx-timeline.component.d.ts.map