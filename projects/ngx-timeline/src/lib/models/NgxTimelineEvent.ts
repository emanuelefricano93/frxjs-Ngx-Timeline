/**
 * Event to be provided from outside the timeline.
 */
export interface NgxTimelineEvent {
  timestamp: Date;
  title?: string;
  description?: string;
  id?: unknown;
  itemPosition?: NgxTimelineItemPosition;
}

export interface NgxTimelinePeriodInfo {
  periodKey?: string;
  year?: number;
  month?: number;
  day?: number;
  firstDate?: Date;
}

/**
 * Item used inside the timeline.
 */
export interface NgxTimelineItem {
  position?: NgxTimelineItemPosition.ON_LEFT | NgxTimelineItemPosition.ON_RIGHT;
  periodInfo?: NgxTimelinePeriodInfo;
  eventInfo?: NgxTimelineEvent;
}

export enum NgxTimelineItemPosition {
  ON_LEFT = 'ON_LEFT',
  ON_RIGHT = 'ON_RIGHT'
}
