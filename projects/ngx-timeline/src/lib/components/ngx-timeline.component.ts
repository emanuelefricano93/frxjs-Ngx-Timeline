import {Component, OnInit, Input, TemplateRef, OnChanges, SimpleChanges, Output, IterableDiffers, IterableDiffer, DoCheck, inject} from '@angular/core';
import {
  NgxTimelineEvent,
  NgxTimelineItem,
  NgxTimelineItemPosition,
  NgxTimelinePeriodInfo,
  NgxDateFormat,
  NgxTimelineEventGroup,
  NgxTimelineEventChangeSideInGroup,
  periodKeyDateFormat,
  fieldsToCheckEventChangeSideInGroup,
  fieldsToAddEventGroup} from '../models';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'ngx-timeline',
  templateUrl: './ngx-timeline.component.html',
  styleUrls: ['./ngx-timeline.scss'],
})
export class NgxTimelineComponent implements OnInit, DoCheck {
  /**
   * List of events to be displayed
   */
  @Input() events: NgxTimelineEvent[];
  /**
   * Language code used to show the date formatted
   */
  @Input() langCode?: string;
  /**
   * Boolean used to enable or disable the animations
   */
  @Input() enableAnimation = true;
  /**
   * Boolean used to reverse sort order (default older first)
   */
  @Input() reverseOrder = false;
  /**
   * Logic to be applied in order to group events
   */
  @Input() groupEvent?: NgxTimelineEventGroup = NgxTimelineEventGroup.MONTH_YEAR;
  /**
   * Logic to be applied in order to put evetns on LEFT or RIGHT
   */
  @Input() changeSideInGroup?: NgxTimelineEventChangeSideInGroup = NgxTimelineEventChangeSideInGroup.ON_DIFFERENT_DAY;
  /**
   * Custom Template displayed before a group of events
   */
  @Input() periodCustomTemplate: TemplateRef<any>;
  /**
   * Custom Template displayed to show a single event
   */
  @Input() eventCustomTemplate: TemplateRef<any>;
  /**
   * Custom Template displayed to show an separator icon
   */
  @Input() centerIconCustomTemplate: TemplateRef<any>;
  /**
   * Custom Template displayed to show the side date
   */
  @Input() dateInstantCustomTemplate: TemplateRef<any>;
  /**
   * Custom Template displayed to show the inner event
   */
  @Input() innerEventCustomTemplate: TemplateRef<any>;
  /**
   * Output click event emitter
   */
  @Output()
    clickEmitter: BehaviorSubject<NgxTimelineItem> = new BehaviorSubject(null);

  groups: { [key: string]: NgxTimelineEvent[] } = {};
  periods: NgxTimelineItem[] = [];
  items: NgxTimelineItem[] = [];
  ngxTimelineItemPosition = NgxTimelineItemPosition;
  ngxDateFormat = NgxDateFormat;

  private differs: IterableDiffers = inject(IterableDiffers);
  private iterableDiffer: IterableDiffer<any> = this.differs.find([]).create();
  private readonly separator = '/';

  ngOnInit(): void {
    this.groupEvents(this.events);
  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.events);
    if (changes) {
      this.groupEvents(this.events);
    }
  }

  getPeriodKeyDateFormat(): string {
    return periodKeyDateFormat[this.groupEvent];
  }

  protected clear(): void {
    this.groups = {};
    this.periods = [];
    this.items = [];
  }

  protected groupEvents(events: NgxTimelineEvent[]): void {
    if (events) {
      this.clear();
      this.sortEvents(events);
      this.setGroupsAndPeriods(events);
      this.setItems();
    }
  }

  protected sortEvents(events: NgxTimelineEvent[]): void {
    events.sort((a, b) => {
      const aTime = a.timestamp.getTime();
      const bTime = b.timestamp.getTime();
      return this.reverseOrder ? bTime - aTime : aTime - bTime;});
  }

  protected setGroupsAndPeriods(events: NgxTimelineEvent[]): void {
    this.periods = [];
    events.forEach((event) => {
      // conversion from string to actual Date
      event.timestamp = new Date(event.timestamp);
      const periodKey = this.getPeriodKeyFromEvent(event);
      if (!this.groups[periodKey]) {
        this.groups[periodKey] = [];
        this.periods.push(this.getPeriodInfoFromPeriodKey(periodKey, event))
      }
      this.groups[periodKey].push(event);
    });
  }

  protected setItems(): void {
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

  protected addPeriodEvents(periodInfo: NgxTimelinePeriodInfo, onLeft: boolean): void {
    this.groups[periodInfo.periodKey].forEach((event, index) => {
      const prevEvent = this.groups[periodInfo.periodKey][index - 1];
      if (event.itemPosition) {
        onLeft = event.itemPosition && event.itemPosition === NgxTimelineItemPosition.ON_LEFT;
      } else if (index > 0 && this.compareEvents(prevEvent, event)) {
          onLeft = !onLeft;
      }
      this.pushEventOnItems(event, onLeft);
    });
    // return onLeft;
  }

  protected pushEventOnItems(event: NgxTimelineEvent, onLeft: boolean): void {
    this.items.push({
      eventInfo: {...event}, position: onLeft ?
        this.ngxTimelineItemPosition.ON_LEFT : this.ngxTimelineItemPosition.ON_RIGHT,
    });
  }

  /**
   * Compare the events inside the same group
   */
  protected compareEvents(prevEvent: NgxTimelineEvent, event: NgxTimelineEvent): boolean {
    return this.changeSideInGroup === NgxTimelineEventChangeSideInGroup.ALL ||
      this.compareEventsField(prevEvent, event, ...fieldsToCheckEventChangeSideInGroup[this.changeSideInGroup]);
  }

  protected compareEventsField(prevEvent: NgxTimelineEvent, event: NgxTimelineEvent, ...fields: string[]): boolean {
    return fields.reduce((res, field) => res = res || prevEvent.timestamp[field]() !== event.timestamp[field](), !!false);
  }

  protected getPeriodInfoFromPeriodKey(periodKey: string, firstGroupEvent: NgxTimelineEvent): { periodInfo: NgxTimelinePeriodInfo } {
      const split = periodKey.split(this.separator);
      return this.getPeriodInfo(split, periodKey, firstGroupEvent);
  }

  private getPeriodInfo(split: string[], periodKey: string, firstGroupEvent: NgxTimelineEvent): { periodInfo: NgxTimelinePeriodInfo } {
    return {
      periodInfo: {
        year: Number(split[0]),
        month: Number(split[1]),
        day: Number(split[2]),
        periodKey,
        firstDate: firstGroupEvent.timestamp as Date,
      },
    };
  }

  protected getPeriodKeyFromEvent(event: NgxTimelineEvent): string {
    return fieldsToAddEventGroup[this.groupEvent].map((field) => event.timestamp[field]()).join(this.separator);
  }
}
