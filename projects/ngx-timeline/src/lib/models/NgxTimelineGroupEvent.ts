/**
 * Enum used to set the group event logic
 */
export enum NgxTimelineEventGroup {
  YEAR = 'YEAR',
  MONTH_YEAR = 'MONTH_YEAR',
  DAY_MONTH_YEAR = 'DAY_MONTH_YEAR'
};

export enum NgxTimelineEventchangeSideInGroup {
  ALL = 'ALL',
  ON_DIFFERENT_HOURS_AND_MINUTES = 'ON_DIFFERENT_HOURS_AND_MINUTES',
  ON_DIFFERENT_DAY = 'ON_DIFFERENT_DAY',
  ON_DIFFERENT_MONTH = 'ON_DIFFERENT_MONTH'
};
