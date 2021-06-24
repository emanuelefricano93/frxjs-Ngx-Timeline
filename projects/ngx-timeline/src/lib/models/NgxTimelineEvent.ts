export interface NgxTimelineEvent {
  timestamp?: Date;
  title?: string;
  description?: string;
}

export interface NgxTimelineItem {
  type?: string;
  position?: NgxTimelineItemPosition.ON_LEFT | NgxTimelineItemPosition.ON_RIGHT;
  periodInfo?: {
    periodKey?: string;
    year?: number;
    month: number;
    firstDate: any;
  };
  eventInfo?: {
    timestamp?: Date;
    title?: string;
    description?: string;
  };
}

export enum NgxTimelineItemPosition {
  ON_LEFT, ON_RIGHT
}
