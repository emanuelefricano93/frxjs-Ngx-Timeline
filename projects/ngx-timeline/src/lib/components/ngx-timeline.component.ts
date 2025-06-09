import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, DoCheck, inject, IterableDiffer, IterableDiffers, OnChanges, TemplateRef, input, output, ChangeDetectionStrategy } from '@angular/core';

import {
  NgxTimelineEvent,
  NgxTimelineItem,
  NgxTimelineItemPosition,
  NgxTimelineOrientation,
  NgxTimelinePeriodInfo,
  NgxDateFormat,
  NgxTimelineEventGroup,
  NgxTimelineEventChangeSide,
  periodKeyDateFormat,
  fieldsToCheckEventChangeSideInGroup as fieldsToCheckEventChangeSide,
  fieldsToAddEventGroup, SupportedLanguageCode, defaultSupportedLanguageCode,
} from '../models';
import { NgxDatePipe } from '../pipes';
import { NgxTimelineEventComponent } from './ngx-timeline-event/ngx-timeline-event.component';

@Component({
  selector: 'ngx-timeline',
  imports: [
    NgClass,
    NgTemplateOutlet,
    NgxDatePipe,
    NgxTimelineEventComponent,
    ScrollingModule,
  ],
  templateUrl: './ngx-timeline.component.html',
  styleUrl: './ngx-timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxTimelineComponent implements OnChanges, DoCheck {
  /**
   * List of events to be displayed.
   */
  readonly events = input.required<NgxTimelineEvent[]>();
  /**
   * Language code used to show the date formatted.
   */
  readonly langCode = input<SupportedLanguageCode>(defaultSupportedLanguageCode);
  /**
   * Boolean used to enable or disable the animations.
   */
  readonly enableAnimation = input<boolean>(true);
  /**
   * Boolean used to reverse sort order (default older first).
   */
  readonly reverseOrder = input<boolean>(false);
  /**
   * Orientation of the timeline.
   */
  readonly orientation = input<NgxTimelineOrientation>(NgxTimelineOrientation.VERTICAL);
  /**
   * Logic to be applied in order to group events.
   */
  readonly groupEvent = input<NgxTimelineEventGroup>(NgxTimelineEventGroup.MONTH_YEAR);
  /**
   * Logic to be applied in order to put events on LEFT or RIGHT.
   */
  readonly changeSide = input<NgxTimelineEventChangeSide>(NgxTimelineEventChangeSide.ON_DIFFERENT_DAY_IN_GROUP);
  /**
   * Custom Template displayed before a group of events.
   */
  readonly periodCustomTemplate = input<TemplateRef<unknown>>();
  /**
   * Custom Template displayed to show a single event.
   */
  readonly eventCustomTemplate = input<TemplateRef<unknown>>();
  /**
   * Custom Template displayed to show a separator icon.
   */
  readonly centerIconCustomTemplate = input<TemplateRef<unknown>>();
  /**
   * Custom Template displayed to show the side date.
   */
  readonly dateInstantCustomTemplate = input<TemplateRef<unknown>>();
  /**
   * Custom Template displayed to show the inner event.
   */
  readonly innerEventCustomTemplate = input<TemplateRef<unknown>>();
  /**
   * Inner custom template used to display the event description.
   */
  readonly eventDescriptionCustomTemplate = input<TemplateRef<unknown>>();
  /**
   * Enable virtual scrolling, for rendering performance. Useful when rendering thousands of items.
   */
  readonly virtualScroll = input<boolean>(false);
  /**
   * The size of the items in the list (in pixels).
   */
  readonly virtualScrollItemSize = input<number>(100);
  /**
   * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
   */
  readonly virtualScrollMaxBufferPx = input<number>(200);
  /**
   * The minimum amount of buffer rendered beyond the viewport (in pixels).
   * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
   */
  readonly virtualScrollMinBufferPx = input<number>(100);
  /**
   * Output click event emitter.
   */
  readonly clickEmitter = output<NgxTimelineItem>();

  groups: Record<string, NgxTimelineEvent[]> = {};
  periods: NgxTimelineItem[] = [];
  items: NgxTimelineItem[] = [];
  ngxTimelineItemPosition = NgxTimelineItemPosition;
  ngxTimelineOrientation = NgxTimelineOrientation;
  ngxDateFormat = NgxDateFormat;

  private differs: IterableDiffers = inject(IterableDiffers);
  private iterableDiffer: IterableDiffer<unknown> = this.differs.find([]).create();
  private readonly separator = '/';

  ngOnChanges(): void {
    this.groupEvents(this.events());
  }

  ngDoCheck(): void {
    const changes = this.iterableDiffer.diff(this.events());
    if (changes) {
      this.groupEvents(this.events());
    }
  }

  getPeriodKeyDateFormat(): string {
    return periodKeyDateFormat[this.groupEvent()];
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
      const aTime: number = a.timestamp.getTime();
      const bTime: number = b.timestamp.getTime();
      return this.reverseOrder() ? bTime - aTime : aTime - bTime;
    });
  }

  protected setGroupsAndPeriods(events: NgxTimelineEvent[]): void {
    this.periods = [];
    events.forEach((event) => {
      // conversion from string to actual Date
      event.timestamp = new Date(event.timestamp);
      const periodKey = this.getPeriodKeyFromEvent(event);
      if (!this.groups[periodKey]) {
        this.groups[periodKey] = [];
        this.periods.push({ periodInfo: this.getPeriodInfoFromPeriodKey(periodKey, event) });
      }
      this.groups[periodKey].push(event);
    });
  }

  protected setItems(): void {
    let isLastItemOnLeft = false;
    this.periods.forEach((p) => {
      // insert first the period
      this.items.push(p);
      // in each period putting items on left
      let onLeft = true;
      if (this.changeSide() === NgxTimelineEventChangeSide.ALL) {
        onLeft = !isLastItemOnLeft;
      }
      const periodInfo: NgxTimelinePeriodInfo | undefined = p.periodInfo;
      if (periodInfo) {
        // insert then all the events in this period
        isLastItemOnLeft = this.addPeriodEvents(periodInfo, onLeft);
        // onLeft = this.addEventItemsAndGetIfOnLeft(periodInfo, onLeft);
      }
    });
  }

  protected addPeriodEvents(periodInfo: NgxTimelinePeriodInfo, onLeft: boolean): boolean {
    const periodKey = periodInfo?.periodKey;
    if (periodKey == undefined) {
      return onLeft;
    }
    this.groups[periodKey].forEach((event: NgxTimelineEvent, index: number) => {
      const prevEvent = this.groups[periodKey][index - 1];
      if (event.itemPosition) {
        onLeft = event.itemPosition && event.itemPosition === NgxTimelineItemPosition.ON_LEFT;
      }
      else if (index > 0 && this.compareEvents(prevEvent, event)) {
        onLeft = !onLeft;
      }
      this.pushEventOnItems(event, onLeft);
    });
    return onLeft;
  }

  protected pushEventOnItems(event: NgxTimelineEvent, onLeft: boolean): void {
    this.items.push({
      eventInfo: { ...event }, position: onLeft
        ? this.ngxTimelineItemPosition.ON_LEFT
        : this.ngxTimelineItemPosition.ON_RIGHT,
    });
  }

  /**
   * Compare the events inside the same group
   */
  protected compareEvents(prevEvent: NgxTimelineEvent, event: NgxTimelineEvent): boolean {
    return this.shouldChangeEventsInPeriod()
      || this.compareEventsField(prevEvent, event, ...(fieldsToCheckEventChangeSide[this.changeSide()] ?? []));
  }

  protected compareEventsField(prevEvent: NgxTimelineEvent, event: NgxTimelineEvent, ...fields: string[]): boolean {
    return fields.reduce((res, field) => res = res || (prevEvent.timestamp[field as keyof Date] as () => number)() !== (event.timestamp[field as keyof Date] as () => number)(), false);
  }

  protected getPeriodInfoFromPeriodKey(periodKey: string, firstGroupEvent: NgxTimelineEvent): NgxTimelinePeriodInfo {
    const split = periodKey.split(this.separator);
    return this.getPeriodInfo(split, periodKey, firstGroupEvent);
  }

  private getPeriodInfo(split: string[], periodKey: string, firstGroupEvent: NgxTimelineEvent): NgxTimelinePeriodInfo {
    return {
      year: Number(split[0]),
      month: Number(split[1]),
      day: Number(split[2]),
      periodKey,
      firstDate: firstGroupEvent.timestamp,
    };
  }

  private shouldChangeEventsInPeriod(): boolean {
    return [NgxTimelineEventChangeSide.ALL_IN_GROUP, NgxTimelineEventChangeSide.ALL].includes(this.changeSide());
  }

  protected getPeriodKeyFromEvent(event: NgxTimelineEvent): string {
    return fieldsToAddEventGroup[this.groupEvent()].map(field => (event.timestamp[field as keyof Date] as () => number)()).join(this.separator);
  }

  protected getOrientationForVirtualScroll(): Lowercase<NgxTimelineOrientation.HORIZONTAL | NgxTimelineOrientation.VERTICAL> {
    return this.orientation().toLowerCase() as Lowercase<NgxTimelineOrientation>;
  }
}
