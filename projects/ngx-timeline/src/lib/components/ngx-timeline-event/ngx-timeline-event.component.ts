import { Component, OnInit, Input, Output, TemplateRef } from '@angular/core';
import { NgxTimelineItem, NgxTimelineItemPosition } from '../../models/NgxTimelineEvent';
import { DatePipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ngx-timeline-event',
  templateUrl: './ngx-timeline-event.component.html',
  styleUrls: ['./ngx-timeline-event.component.scss']
})
export class NgxTimelineEventComponent implements OnInit {

  @Input() event: NgxTimelineItem;
  @Input() colSidePosition: NgxTimelineItemPosition;
  @Input() langCode?: string;
  @Input() innerEventCustomTemplate?: TemplateRef<any>;
  @Output() clickEmitter: BehaviorSubject<NgxTimelineItem> = new BehaviorSubject(null);

  ON_LEFT = NgxTimelineItemPosition.ON_LEFT;
  ON_RIGHT = NgxTimelineItemPosition.ON_RIGHT;

  constructor() { }

  ngOnInit(): void {
  }

  getDateObj(): any {
    let day;
    let month;
    let year;
    const dateTimestamp = this.event?.eventInfo.timestamp;
    if (dateTimestamp) {
      const timestamp = new Date(dateTimestamp);
      const langCode = this.langCode === 'it' ? 'it-IT' : 'en-US';
      month = new DatePipe(langCode).transform(timestamp, 'MMMM');
      day = new DatePipe(langCode).transform(timestamp, 'dd');
      year = timestamp.getFullYear();
    }

    return {day, month, year};
  }

}
