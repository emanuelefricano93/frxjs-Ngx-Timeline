import { Component, OnInit, Input, TemplateRef, OnChanges, SimpleChanges, Output } from '@angular/core';
import { NgxTimelineEvent, NgxTimelineItem, NgxTimelineItemPosition } from '../models/NgxTimelineEvent';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ngx-timeline',
  templateUrl: './ngx-timeline.component.html',
  styleUrls: ['./ngx-timeline.scss'],
})
export class NgxTimelineComponent implements OnInit, OnChanges {
  /**
   * List of events
   */
  @Input() events: NgxTimelineEvent[];
  /**
   * Lang code used to show the date formatted
   */
  @Input() langCode?: string;
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

  groups: { [key: string]: any[] } = {};
  periods: NgxTimelineItem[] = [];
  items: NgxTimelineItem[] = [];
  ON_LEFT = NgxTimelineItemPosition.ON_LEFT;
  ON_RIGHT = NgxTimelineItemPosition.ON_RIGHT;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //if (changes.events && changes.events.previousValue != changes.events.currentValue) {
      this.groupEvents();
    //}
  }

  groupEvents() {
    this.setGroups();
    this.setPeriods();
    this.setItems();
  }

  private setGroups() {
    this.events.forEach((event) => {
      // conversion from string to actual Date
      event.timestamp = new Date(event.timestamp);
      const periodKey = this.getPeriodKeyFromEvent(event);
      if (!this.groups[periodKey]) {
        this.groups[periodKey] = [];
      }
      this.groups[periodKey].push(event);
    });
  }

  private setItems() {
    this.periods.forEach((p) => {
      this.items.push(p);
      let onLeft = true;
      const periodInfo = p.periodInfo;
      this.groups[periodInfo.periodKey].forEach((event, index) => {
        const prevEvent = this.groups[periodInfo.periodKey][index - 1];
        if (index > 0 && prevEvent.timestamp.getDay() !== event.timestamp.getDay()) {
          onLeft = !onLeft;
        }
        this.items.push({ eventInfo: { ...event }, position: onLeft ? this.ON_LEFT : this.ON_RIGHT });
      });
    });
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

  getPeriodKeyFromEvent(event: NgxTimelineEvent) {
    //todo set a parameter to group per day / month
    return [event.timestamp.getFullYear(), event.timestamp.getMonth()].join('/');
    //return [event.timestamp.getFullYear(), event.timestamp.getMonth(), event.timestamp.getDate()].join('/');
  }
}
