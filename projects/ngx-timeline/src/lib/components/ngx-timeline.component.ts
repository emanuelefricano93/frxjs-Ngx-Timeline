import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { NgxTimelineEvent, NgxTimelineItem } from '../models/NgxTimelineEvent';

@Component({
  selector: 'ngx-timeline',
  templateUrl: './ngx-timeline.component.html',
  styleUrls: ['./ngx-timeline.scss'],
})
export class NgxTimelineComponent implements OnInit {
  @Input() events: NgxTimelineEvent[];
  @Input() langCode?: string;

  @Input() periodCustomTemplate: TemplateRef<any>;
  @Input() eventCustomTemplate: TemplateRef<any>;
  @Input() centerIconCustomTemplate: TemplateRef<any>;

  groups: { [key: string]: any[] } = {};
  periods: NgxTimelineItem[] = [];
  items: NgxTimelineItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.groupEvents();
  }

  groupEvents() {
    this.events.forEach((event) => {
      // conversion from string to actual Date
      event.timestamp = new Date(event.timestamp);
      const periodKey = this.getPeriodKeyFromEvent(event);
      if (!this.groups[periodKey]) {
        this.groups[periodKey] = [];
      }
      this.groups[periodKey].push(event);
    });
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

    this.periods.forEach((p) => {
      this.items.push(p);
      let onLeft = true;
      const periodInfo = p.periodInfo;
      this.groups[periodInfo.periodKey].forEach((event, index) => {
        const prevEvent = this.groups[periodInfo.periodKey][index - 1];
        if (index > 0 && prevEvent.timestamp.getDay() !== event.timestamp.getDay()) {
          onLeft = !onLeft;
        }
        this.items.push({ eventInfo: { ...event }, position: onLeft ? 'ON_LEFT' : 'ON_RIGHT' });
      });
    });
  }

  getPeriodKeyFromEvent(event: NgxTimelineEvent) {
    //todo set a parameter to group per day / month
    return [event.timestamp.getFullYear(), event.timestamp.getMonth()].join('/');
    //return [event.timestamp.getFullYear(), event.timestamp.getMonth(), event.timestamp.getDate()].join('/');
  }
}
