import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTimelineComponent } from './ngx-timeline.component';
import { NgxDateFormat, NgxTimelineEventGroup } from '../models';

describe('NgxTimelineComponent', () => {
  let component: NgxTimelineComponent;
  let fixture: ComponentFixture<NgxTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTimelineComponent);
    component = fixture.componentInstance;
    component.events = null;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the groupEvents when ngOnChanges', () => {
    const spy = spyOn<any>(component, 'groupEvents');
    component.ngOnChanges({});
    expect(spy).toHaveBeenCalled();
  });

  it('should clear', () => {
    component['clear']();
    expect(component.groups).toEqual({});
    expect(component.periods).toEqual([]);
    expect(component.items).toEqual([]);
  });

  describe('should getPeriodKeyDateFormat', () => {
    it('when default groupEvent is provided', () => {
      const res = component.getPeriodKeyDateFormat();
      expect(res).toEqual(NgxDateFormat.MONTH_YEAR);
    });

    [{groupEvent: NgxTimelineEventGroup.YEAR, formatDate: NgxDateFormat.YEAR},
      {groupEvent: NgxTimelineEventGroup.DAY_MONTH_YEAR, formatDate: NgxDateFormat.DAY_MONTH_YEAR}
    ].forEach(elem => {
      it(`when groupEvent ${elem.groupEvent} is provided`, () => {
        component.groupEvent =  elem.groupEvent;
        expect(component.getPeriodKeyDateFormat()).toEqual(elem.formatDate);
      });
    });

  });


  describe('should groupEvents', ()=> {
    it('when no events', () => {
      const spies = [];
      spies.push(spyOn<any>(component, 'clear'));
      spies.push(spyOn<any>(component, 'sortEvents'));
      spies.push(spyOn<any>(component, 'setGroups'));
      spies.push(spyOn<any>(component, 'setPeriods'));
      spies.push(spyOn<any>(component, 'setItems'));
      component['groupEvents'](null);
      spies.forEach(spy => expect(spy).not.toHaveBeenCalled());
    });
    it('when events', () => {
      const spies = [];
      spies.push(spyOn<any>(component, 'clear'));
      spies.push(spyOn<any>(component, 'sortEvents'));
      spies.push(spyOn<any>(component, 'setGroups'));
      spies.push(spyOn<any>(component, 'setPeriods'));
      spies.push(spyOn<any>(component, 'setItems'));
      component['groupEvents']([]);
      spies.forEach(spy => expect(spy).toHaveBeenCalled());
    });
  });

  describe('should sortEvents', ()=> {
    it('when events', () => {
      const event = {timestamp: new Date(2021, 11, 10)};
      const event2 = {timestamp: new Date(2021, 8, 10)};
      const events = [event, event2];
      component['sortEvents'](events);
      expect(events[0]).toEqual(event2);
      expect(events[1]).toEqual(event);
    });
  });

  describe('should setGroups', ()=> {
    it('when events', () => {
      const event = {timestamp: new Date(2021, 11, 10)};
      const event2 = {timestamp: new Date(2021, 8, 10)};
      const event3 = {timestamp: new Date(2021, 8, 11)};
      const events = [event, event2, event3];
      component['setGroups'](events);
      expect(Object.keys(component.groups).length).toEqual(2);
    });
  });

  describe('should setItems', ()=> {
    it('when events', () => {
      const period = {periodInfo: {periodKey: '2021/7'}};
      const period2 = {periodInfo: {periodKey: '2021/8'}};
      component.periods = [period, period2];
      const event = {timestamp: new Date(2021, 7, 10)};
      const event2 = {timestamp: new Date(2021, 8, 10)};
      const event3 = {timestamp: new Date(2021, 8, 11)};
      component.groups['2021/7'] = [event];
      component.groups['2021/8'] = [event2, event3];
      component['setItems']();
      expect(component.items.length).toEqual(5);
    });
  });

  describe('should setPeriods', ()=> {
    it('when events', () => {
      const date = new Date(2021, 7, 10);
      const date2 = new Date(2021, 8, 10);
      const date3= new Date(2021, 8, 11);
      const event = {timestamp: date}
      const event2 = {timestamp: date2};
      const event3 = {timestamp: date3};
      component.groups['2021/7'] = [event];
      component.groups['2021/8'] = [event2, event3];
      component['setPeriods']();
      expect(component.periods.length).toEqual(2);
      expect(component.periods[0]).toEqual({periodInfo: {year: 2021, month: 7, day: NaN, periodKey: '2021/7', firstDate: date }})
      expect(component.periods[1]).toEqual({periodInfo: {year: 2021, month: 8, day: NaN, periodKey: '2021/8', firstDate: date2 }})
    });
  });

  describe('should getPeriodKeyFromEvent', ()=> {
    it('when groupEvent by year', () => {
      component.groupEvent = NgxTimelineEventGroup.YEAR;
      const event = {timestamp: new Date(2021, 7, 10)};
      const event2 = {timestamp: new Date(2021, 8, 9)};
      expect(component['getPeriodKeyFromEvent'](event)).toBe('2021');
      expect(component['getPeriodKeyFromEvent'](event2)).toBe('2021');
    });
    it('when groupEvent by month year', () => {
      component.groupEvent = NgxTimelineEventGroup.MONTH_YEAR;
      const event = {timestamp: new Date(2021, 7, 10)};
      const event2 = {timestamp: new Date(2021, 8, 9)};
      expect(component['getPeriodKeyFromEvent'](event)).toBe('2021/7');
      expect(component['getPeriodKeyFromEvent'](event2)).toBe('2021/8');
    });
    it('when groupEvent by day month year', () => {
      component.groupEvent = NgxTimelineEventGroup.DAY_MONTH_YEAR;
      const event = {timestamp: new Date(2021, 7, 10)};
      const event2 = {timestamp: new Date(2021, 8, 9)};
      expect(component['getPeriodKeyFromEvent'](event)).toBe('2021/7/10');
      expect(component['getPeriodKeyFromEvent'](event2)).toBe('2021/8/9');
    });
  });

});
