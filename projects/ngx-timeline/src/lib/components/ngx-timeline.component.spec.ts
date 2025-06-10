/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDateFormat, NgxTimelineEventChangeSide, NgxTimelineEventGroup, NgxTimelineItemPosition, NgxTimelineOrientation } from '../models';
import { NgxTimelineComponent } from './ngx-timeline.component';

describe('NgxTimelineComponent', () => {
  let component: NgxTimelineComponent;
  let componentRef: ComponentRef<NgxTimelineComponent>;
  let fixture: ComponentFixture<NgxTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTimelineComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTimelineComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('events', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the groupEvents when ngOnChanges', () => {
    const spy = spyOn<any>(component, 'groupEvents');
    component.ngOnChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should call the groupEvents when ngDoCheck and iterable diff find some changes', () => {
    componentRef.setInput('events', []);
    const spy = spyOn<any>(component, 'groupEvents');
    component.events().push({ timestamp: new Date() });
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should clear', () => {
    // @ts-expect-error TS2445
    component.clear();
    expect(component.groups).toEqual({});
    expect(component.periods).toEqual([]);
    expect(component.items).toEqual([]);
  });

  describe('should getPeriodKeyDateFormat', () => {
    it('when default groupEvent is provided', () => {
      const res = component.getPeriodKeyDateFormat();
      expect(res).toEqual(NgxDateFormat.MONTH_YEAR);
    });

    [{ groupEvent: NgxTimelineEventGroup.YEAR, formatDate: NgxDateFormat.YEAR },
      { groupEvent: NgxTimelineEventGroup.DAY_MONTH_YEAR, formatDate: NgxDateFormat.DAY_MONTH_YEAR },
    ].forEach((elem) => {
      it(`when groupEvent ${elem.groupEvent} is provided`, () => {
        componentRef.setInput('groupEvent', elem.groupEvent);
        expect(component.getPeriodKeyDateFormat()).toEqual(elem.formatDate);
      });
    });
  });

  describe('should getOrientationForVirtualScroll', () => {
    it('when default orientation is provided', () => {
      const res = component.getOrientationForVirtualScroll();
      expect(res).toEqual(NgxTimelineOrientation.VERTICAL.toLowerCase());
    });

    [{ orientation: NgxTimelineOrientation.HORIZONTAL },
      { orientation: NgxTimelineOrientation.VERTICAL },
    ].forEach((elem) => {
      it(`when orientation ${elem.orientation} is provided`, () => {
        componentRef.setInput('orientation', elem.orientation);
        expect(component.getOrientationForVirtualScroll()).toEqual(elem.orientation.toLowerCase());
      });
    });
  });

  describe('should groupEvents', () => {
    it('when null as events (legacy)', () => {
      const spies = [];
      spies.push(spyOn<any>(component, 'clear'));
      spies.push(spyOn<any>(component, 'sortEvents'));
      spies.push(spyOn<any>(component, 'setGroupsAndPeriods'));
      spies.push(spyOn<any>(component, 'setItems'));
      // @ts-expect-error legacy non-strict test
      component.groupEvents(null);
      spies.forEach(spy => expect(spy).not.toHaveBeenCalled());
    });
    it('when no events', () => {
      const spies = [];
      spies.push(spyOn<any>(component, 'clear'));
      spies.push(spyOn<any>(component, 'sortEvents'));
      spies.push(spyOn<any>(component, 'setGroupsAndPeriods'));
      spies.push(spyOn<any>(component, 'setItems'));
      // @ts-expect-error TS2445
      component.groupEvents([]);
      spies.forEach(spy => expect(spy).toHaveBeenCalled());
    });
    it('when events with itemPosition', () => {
      const spies = [];
      spies.push(spyOn<any>(component, 'clear'));
      spies.push(spyOn<any>(component, 'sortEvents'));
      spies.push(spyOn<any>(component, 'setGroupsAndPeriods').and.callThrough());
      spies.push(spyOn<any>(component, 'setItems').and.callThrough());
      const event = { timestamp: new Date(2021, 11, 10) };
      const event2 = { timestamp: new Date(2021, 11, 11), itemPosition: NgxTimelineItemPosition.ON_LEFT };
      const event3 = { timestamp: new Date(2021, 11, 12), itemPosition: NgxTimelineItemPosition.ON_RIGHT };
      const events = [event, event2, event3];
      // @ts-expect-error TS2445
      component.groupEvents(events);
      spies.forEach(spy => expect(spy).toHaveBeenCalled());
    });
  });

  describe('should sortEvents', () => {
    it('when events', () => {
      const event = { timestamp: new Date(2021, 11, 10) };
      const event2 = { timestamp: new Date(2021, 8, 10) };
      const events = [event, event2];
      // @ts-expect-error TS2445
      component.sortEvents(events);
      expect(events[0]).toEqual(event2);
      expect(events[1]).toEqual(event);
    });
  });

  describe('should sortEvents in reverse order', () => {
    it('when events', () => {
      const event = { timestamp: new Date(2021, 11, 10) };
      const event2 = { timestamp: new Date(2021, 8, 10) };
      const events = [event, event2];
      componentRef.setInput('reverseOrder', true);
      // @ts-expect-error TS2445
      component.sortEvents(events);
      expect(events[0]).toEqual(event);
      expect(events[1]).toEqual(event2);
    });
  });

  describe('should setGroupsAndPeriodsAndPeriods', () => {
    it('when events', () => {
      const date = new Date(2021, 11, 10);
      const date2 = new Date(2021, 8, 10);
      const event = { timestamp: new Date(2021, 11, 10) };
      const event2 = { timestamp: new Date(2021, 8, 10) };
      const event3 = { timestamp: new Date(2021, 8, 11) };
      const events = [event, event2, event3];
      // @ts-expect-error TS2445
      component.setGroupsAndPeriods(events);
      expect(Object.keys(component.groups).length).toEqual(2);
      expect(component.periods.length).toEqual(2);
      expect(component.periods[0]).toEqual({ periodInfo: { year: 2021, month: 11, day: NaN, periodKey: '2021/11', firstDate: date } });
      expect(component.periods[1]).toEqual({ periodInfo: { year: 2021, month: 8, day: NaN, periodKey: '2021/8', firstDate: date2 } });
    });
  });

  describe('should setItems', () => {
    it('when events', () => {
      const period = { periodInfo: { periodKey: '2021/7' } };
      const period2 = { periodInfo: { periodKey: '2021/8' } };
      component.periods = [period, period2];
      const event = { timestamp: new Date(2021, 7, 10) };
      const event2 = { timestamp: new Date(2021, 8, 10) };
      const event3 = { timestamp: new Date(2021, 8, 11) };
      component.groups['2021/7'] = [event];
      component.groups['2021/8'] = [event2, event3];
      // @ts-expect-error TS2445
      component.setItems();
      expect(component.items.length).toEqual(5);
    });
    it('when events and changeSide is set to NgxTimelineEventChangeSide.ALL', () => {
      const period = { periodInfo: { periodKey: '2021/7' } };
      const period2 = { periodInfo: { periodKey: '2021/8' } };
      component.periods = [period, period2];
      const event = { timestamp: new Date(2021, 7, 10) };
      const event2 = { timestamp: new Date(2021, 8, 10) };
      const event3 = { timestamp: new Date(2021, 8, 11) };
      component.groups['2021/7'] = [event];
      component.groups['2021/8'] = [event2, event3];
      componentRef.setInput('changeSide', NgxTimelineEventChangeSide.ALL);
      // @ts-expect-error TS2445
      component.setItems();
      expect(component.items.length).toEqual(5);
      expect(component.items[1].position).toEqual(NgxTimelineItemPosition.ON_LEFT);
      expect(component.items[3].position).toEqual(NgxTimelineItemPosition.ON_RIGHT);
      expect(component.items[4].position).toEqual(NgxTimelineItemPosition.ON_LEFT);
    });
    it('when events with no periodKey and changeSide is set to NgxTimelineEventChangeSide.ALL', () => {
      const period = { periodInfo: { periodKey: '2021/7' } };
      const period2 = { periodInfo: { } };
      component.periods = [period, period2];
      const event = { timestamp: new Date(2021, 7, 10) };
      const event2 = { timestamp: new Date(2021, 8, 10) };
      const event3 = { timestamp: new Date(2021, 8, 11) };
      component.groups['2021/7'] = [event];
      component.groups['2021/8'] = [event2, event3];
      componentRef.setInput('changeSide', NgxTimelineEventChangeSide.ALL);
      // @ts-expect-error TS2445
      component.setItems();
      expect(component.items.length).toEqual(3);
      expect(component.items[0].position).toEqual(undefined);
      expect(component.items[1].position).toEqual(NgxTimelineItemPosition.ON_LEFT);
      expect(component.items[2].position).toEqual(undefined);
    });
    it('when events with no periodKey and changeSide is set to a wrong param', () => {
      const period = { periodInfo: { periodKey: '2021/7' } };
      const period2 = { periodInfo: { periodKey: '2021/8' } };
      component.periods = [period, period2];
      const event = { timestamp: new Date(2021, 7, 10) };
      const event2 = { timestamp: new Date(2021, 8, 10) };
      const event3 = { timestamp: new Date(2021, 8, 11) };
      component.groups['2021/7'] = [event];
      component.groups['2021/8'] = [event2, event3];
      componentRef.setInput('changeSide', 'wrong param');
      // @ts-expect-error TS2445
      component.setItems();
      expect(component.items.length).toEqual(5);
      expect(component.items[0].position).toEqual(undefined);
      expect(component.items[1].position).toEqual(NgxTimelineItemPosition.ON_LEFT);
      expect(component.items[2].position).toEqual(undefined);
    });
  });

  describe('should getPeriodKeyFromEvent', () => {
    it('when groupEvent by year', () => {
      componentRef.setInput('groupEvent', NgxTimelineEventGroup.YEAR);
      const event = { timestamp: new Date(2021, 7, 10) };
      const event2 = { timestamp: new Date(2021, 8, 9) };
      // @ts-expect-error TS2445
      expect(component.getPeriodKeyFromEvent(event)).toBe('2021');
      // @ts-expect-error TS2445
      expect(component.getPeriodKeyFromEvent(event2)).toBe('2021');
    });
    it('when groupEvent by month year', () => {
      componentRef.setInput('groupEvent', NgxTimelineEventGroup.MONTH_YEAR);
      const event = { timestamp: new Date(2021, 7, 10) };
      const event2 = { timestamp: new Date(2021, 8, 9) };
      // @ts-expect-error TS2445
      expect(component.getPeriodKeyFromEvent(event)).toBe('2021/7');
      // @ts-expect-error TS2445
      expect(component.getPeriodKeyFromEvent(event2)).toBe('2021/8');
    });
    it('when groupEvent by day month year', () => {
      componentRef.setInput('groupEvent', NgxTimelineEventGroup.DAY_MONTH_YEAR);
      const event = { timestamp: new Date(2021, 7, 10) };
      const event2 = { timestamp: new Date(2021, 8, 9) };
      // @ts-expect-error TS2445
      expect(component.getPeriodKeyFromEvent(event)).toBe('2021/7/10');
      // @ts-expect-error TS2445
      expect(component.getPeriodKeyFromEvent(event2)).toBe('2021/8/9');
    });
  });
});
