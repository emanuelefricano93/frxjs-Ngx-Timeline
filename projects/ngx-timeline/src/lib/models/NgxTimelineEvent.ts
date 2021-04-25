export interface NgxTimelineEvent {
  timestamp: Date;
  title: string;
  description: string;
  periodKey?: string;
  onLeft?: boolean;
  type?: string;
}
