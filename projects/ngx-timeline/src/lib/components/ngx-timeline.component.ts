import { Component, OnInit, Input, TemplateRef, OnChanges, SimpleChanges, Output } from '@angular/core';
import { NgxTimelineEvent, NgxTimelineItem, NgxTimelineItemPosition } from '../models/NgxTimelineEvent';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NgxDateFormat } from '../models/NgxDateObj';
import { NgxTimelineEventGroup, NgxTimelineEventchangeSideInGroup } from '../models/NgxTimelineGroupEvent';

@Component({
  selector: 'ngx-timeline',
  templateUrl: './ngx-timeline.component.html',
  styleUrls: ['./ngx-timeline.scss'],
})
export class NgxTimelineComponent implements OnInit, OnChanges {
  /**
   * List of events, to be used in order to trigger changes when a sub property of an event has been
   */
  @Input() events: NgxTimelineEvent[];
  /**
   * Lang code used to show the date formatted
   */
  @Input() langCode?: string;
  /**
   * Lang code used to show the date formatted
   */
  @Input() groupEvent?: NgxTimelineEventGroup = NgxTimelineEventGroup.MONTH_YEAR;
  /**
   * Lang code used to show the date formatted
   */
  @Input() changeSideInGroup?: NgxTimelineEventchangeSideInGroup = NgxTimelineEventchangeSideInGroup.ON_DIFFERENT_DAY;
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
   * Custom Template displayed to show the date
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
  ON_LEFT = NgxTimelineItemPosition.ON_LEFT;
  ON_RIGHT = NgxTimelineItemPosition.ON_RIGHT;
  ngxDateFormat = NgxDateFormat;

  constructor() {}


  ngOnInit(): void {
    this.groupEvents(this.events);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.groupEvents(this.events);
  }

  clear() {
    this.groups = {};
    this.periods = [];
    this.items = [];
  }

  groupEvents(events: NgxTimelineEvent[]) {
    if (events) {
      this.clear();
      this.setGroups(events);
      this.setPeriods();
      this.setItems();
    }
  }

  getPeriodKeyDateFormat(): string {
    let periodKeyDateFormat = NgxDateFormat.MONTH_YEAR;
    if (this.groupEvent === NgxTimelineEventGroup.YEAR) {
      periodKeyDateFormat = NgxDateFormat.YEAR;
    } else if (this.groupEvent === NgxTimelineEventGroup.DAY_MONTH_YEAR) {
      periodKeyDateFormat = NgxDateFormat.DAY_MONTH_YEAR;
    }
    return periodKeyDateFormat;
  }

  private sortEvents(events: NgxTimelineEvent[]) {
    events.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  }

  private setGroups(events: NgxTimelineEvent[]) {
    events.forEach((event) => {
      // conversion from string to actual Date
      event.timestamp = new Date(event.timestamp);
      const periodKey = this.getPeriodKeyFromEvent(event);
      if (!this.groups[periodKey]) {
        this.groups[periodKey] = [];
      }
      this.groups[periodKey].push(event);
    });
    Object.keys(this.groups).forEach(key => this.sortEvents(this.groups[key]));
  }

  private setItems() {
    this.periods.forEach((p) => {
      this.items.push(p);
      let onLeft = true;
      const periodInfo = p.periodInfo;
      onLeft = this.isOnLeft(periodInfo, onLeft);
    });
  }

  private isOnLeft(periodInfo: { periodKey?: string; year?: number; month: number; firstDate: any; }, onLeft: boolean) {
    this.groups[periodInfo.periodKey].forEach((event, index) => {
      const prevEvent = this.groups[periodInfo.periodKey][index - 1];
      if (index > 0 && this.compareEvents(prevEvent, event)) {
        onLeft = !onLeft;
      }
      this.items.push({ eventInfo: { ...event }, position: onLeft ? this.ON_LEFT : this.ON_RIGHT });
    });
    return onLeft;
  }

  /**
   * Compare the events inside the same group
   */
  private compareEvents(prevEvent: NgxTimelineEvent, event: NgxTimelineEvent) {
    let res = prevEvent.timestamp.getFullYear() !== event.timestamp.getFullYear() ||
      prevEvent.timestamp.getMonth() !== event.timestamp.getMonth() ||
      prevEvent.timestamp.getDay() !== event.timestamp.getDay();
    if (this.changeSideInGroup === NgxTimelineEventchangeSideInGroup.ON_DIFFERENT_MONTH) {
      res = prevEvent.timestamp.getFullYear() !== event.timestamp.getFullYear() || prevEvent.timestamp.getMonth() !== event.timestamp.getMonth();
    } else if (this.changeSideInGroup === NgxTimelineEventchangeSideInGroup.ON_DIFFERENT_HOURS_AND_MINUTES) {
      res = res || prevEvent.timestamp.getHours() !== event.timestamp.getHours() ||
        prevEvent.timestamp.getMinutes() !== event.timestamp.getMinutes();
    } else if (this.changeSideInGroup === NgxTimelineEventchangeSideInGroup.ALL) {
      res = true;
    }
    return res;
  }

  private setPeriods() {
    this.periods = Object.keys(this.groups).map((periodKey) => {
      const split = periodKey.split('/');
      return {
        periodInfo: {
          year: Number(split[0]),
          month: Number(split[1]),
          periodKey,
          firstDate: this.groups[periodKey][0].timestamp as Date,
        },
      };
    });
  }

  private getPeriodKeyFromEvent(event: NgxTimelineEvent) {
    //todo set a parameter to group per day / month
    const array = [];
    if (this.groupEvent === NgxTimelineEventGroup.YEAR) {
      array.push(event.timestamp.getFullYear());
    } else if (this.groupEvent === NgxTimelineEventGroup.DAY_MONTH_YEAR) {
      array.push(event.timestamp.getFullYear(), event.timestamp.getMonth(), event.timestamp.getDate());
    } else {
      array.push(event.timestamp.getFullYear(), event.timestamp.getMonth());
    }
    return array.join('/');
  }
}
