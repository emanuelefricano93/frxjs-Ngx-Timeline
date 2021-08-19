import { Component, Input, Output, TemplateRef } from '@angular/core';
import { NgxTimelineItem, NgxTimelineItemPosition } from '../../models/NgxTimelineEvent';
import { DatePipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { supportedLanguageCodes } from '../../models';

@Component({
  selector: 'ngx-timeline-event',
  templateUrl: './ngx-timeline-event.component.html',
  styleUrls: ['./ngx-timeline-event.component.scss']
})
export class NgxTimelineEventComponent {

  /**
   * Event to be displayed
   */
  @Input() event: NgxTimelineItem;
  /**
   * Event position respect to the vertical line (LEFT or RIGHT)
   */
  @Input() colSidePosition: NgxTimelineItemPosition;
  /**
   * Language code used to format the dates
   */
  @Input() langCode?: string;
  /**
   * Inner custom template used to display the event detail
   */
  @Input() innerEventCustomTemplate?: TemplateRef<any>;
  /**
   * Boolean used to enable or disable the animations
   */
  @Input() enableAnimation = true;
  /**
   * Output click event emitter
   */
  @Output() clickEmitter: BehaviorSubject<NgxTimelineItem> = new BehaviorSubject(null);

  ngxTimelineItemPosition = NgxTimelineItemPosition;

  private readonly monthAbbr = 'MMM';
  private readonly dayFormat = 'dd';

  constructor() { }

  getDateObj(): any {
    let day;
    let month;
    let year;
    const dateTimestamp = this.event?.eventInfo?.timestamp;
    if (dateTimestamp) {
      const timestamp = new Date(dateTimestamp);
      const langCode = this.getLangCode();
      month = new DatePipe(langCode).transform(timestamp, this.monthAbbr);
      day = new DatePipe(langCode).transform(timestamp, this.dayFormat);
      year = timestamp.getFullYear();
    }

    return {day, month, year};
  }

  protected getLangCode(): string  {
    return this.langCode && supportedLanguageCodes.includes(this.langCode) ? this.langCode : supportedLanguageCodes[0];
  }

}
