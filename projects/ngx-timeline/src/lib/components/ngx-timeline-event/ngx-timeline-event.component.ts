import { DatePipe, NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { Component, output, TemplateRef, input, ChangeDetectionStrategy, computed } from '@angular/core';

import { defaultSupportedLanguageCode, NgxTimelineOrientation, SupportedLanguageCode } from '../../models';
import { NgxTimelineItem, NgxTimelineItemPosition } from '../../models/NgxTimelineEvent';

@Component({
  selector: 'ngx-timeline-event',
  imports: [
    NgTemplateOutlet,
    TitleCasePipe,
  ],
  templateUrl: './ngx-timeline-event.component.html',
  styleUrl: './ngx-timeline-event.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxTimelineEventComponent {
  /**
   * Event to be displayed.
   */
  readonly event = input.required<NgxTimelineItem>();
  /**
   * Event position respect to the vertical line (LEFT or RIGHT).
   */
  readonly colSidePosition = input<NgxTimelineItemPosition>();
  /**
   * Language code used to format the dates.
   */
  readonly langCode = input<SupportedLanguageCode>(defaultSupportedLanguageCode);
  /**
   * Inner custom template used to display the event detail.
   */
  readonly innerEventCustomTemplate = input<TemplateRef<unknown>>();
  /**
   * Inner custom template used to display the event description.
   */
  readonly eventDescriptionCustomTemplate = input<TemplateRef<unknown>>();
  /**
   * Boolean used to enable or disable the animations.
   */
  readonly enableAnimation = input(true);
  /**
   * Orientation of the timeline.
   */
  readonly orientation = input<NgxTimelineOrientation>(NgxTimelineOrientation.VERTICAL);
  /**
   * Output click event emitter.
   */
  readonly clickEmitter = output<NgxTimelineItem>();

  ngxTimelineItemPosition = NgxTimelineItemPosition;
  ngxTimelineOrientation = NgxTimelineOrientation;
  readonly dateObjSignal = computed(() => !this.event() ? null : this.getDateObj());

  private readonly monthAbbr = 'MMM';
  private readonly dayFormat = 'dd';

  getDateObj(): { day: unknown; month: unknown; year: unknown } {
    let day = undefined;
    let month = undefined;
    let year = undefined;
    const dateTimestamp = this.event().eventInfo?.timestamp;
    if (dateTimestamp) {
      const timestamp = new Date(dateTimestamp);
      const langCode = this.getLangCode();
      month = new DatePipe(langCode).transform(timestamp, this.monthAbbr);
      day = new DatePipe(langCode).transform(timestamp, this.dayFormat);
      year = timestamp.getFullYear();
    }

    return { day, month, year };
  }

  protected getLangCode(): SupportedLanguageCode {
    return this.langCode();
  }
}
