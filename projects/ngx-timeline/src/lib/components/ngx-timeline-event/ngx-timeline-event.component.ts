import { Component, OnInit, Input, Output } from '@angular/core';
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
  @Input() position: NgxTimelineItemPosition;
  @Input() langCode?: string;
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
      month = new DatePipe(this.langCode === 'it' ? 'it-IT' : 'en-US').transform(timestamp, 'MMMM');
      day = new DatePipe(this.langCode === 'it' ? 'it-IT' : 'en-US').transform(timestamp, 'dd');
      year = timestamp.getFullYear();
    }

    return {day, month, year};
  }

  getIcon() {
    let icon = 'bell-outline';
    const type = this.event?.type;
    if (type === 'EXPIRATION_NOTICE') {
      icon = 'calendar-outline';
    } else if (type === 'DOCUMENT') {
      icon = 'file-outline';
    }
    return icon;
  }

  getUrlLabel() {
    let label = 'CLAIMS.EVENT_GO_TO_DETAIL';
    const type = this.event?.type;
    if (type === 'DOCUMENT') {
      label = 'CLAIMS.EVENT_DOWNLOAD_DOCUMENT';
    }
    return label;
  }

}
