import { TemplateRef } from '@angular/core';
import { NgxTimelineItem, NgxTimelineItemPosition } from '../../models/NgxTimelineEvent';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NgxTimelineEventComponent {
    /**
     * Event to be displayed
     */
    event: NgxTimelineItem;
    /**
     * Event position respect to the vertical line (LEFT or RIGHT)
     */
    colSidePosition: NgxTimelineItemPosition;
    /**
     * Language code used to format the dates
     */
    langCode?: string;
    /**
     * Inner custom template used to display the event detail
     */
    innerEventCustomTemplate?: TemplateRef<any>;
    /**
     * Boolean used to enable or disable the animations
     */
    enableAnimation: boolean;
    /**
     * Output click event emitter
     */
    clickEmitter: BehaviorSubject<NgxTimelineItem>;
    ngxTimelineItemPosition: typeof NgxTimelineItemPosition;
    private readonly monthAbbr;
    private readonly dayFormat;
    constructor();
    protected getDateObj(): any;
    protected getLangCode(): string;
    static ɵfac: i0.ɵɵFactoryDef<NgxTimelineEventComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NgxTimelineEventComponent, "ngx-timeline-event", never, { "event": "event"; "colSidePosition": "colSidePosition"; "langCode": "langCode"; "innerEventCustomTemplate": "innerEventCustomTemplate"; "enableAnimation": "enableAnimation"; }, { "clickEmitter": "clickEmitter"; }, never, never>;
}
//# sourceMappingURL=ngx-timeline-event.component.d.ts.map