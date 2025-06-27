import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { ComponentRef, provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxTimelineItemPosition } from '../../models';

import { NgxTimelineEventComponent } from './ngx-timeline-event.component';

registerLocaleData(localeIt);

const year = 2021;
const monthIndex = 7;
const day = 19;
const event = {
  type: 'event',
  position: NgxTimelineItemPosition.ON_LEFT,
  periodInfo: {
    periodKey: '08/2021',
    year: year,
    month: monthIndex + 1,
    day: day,
    firstDate: new Date(year, monthIndex, day),
  },
  eventInfo: {
    timestamp: new Date(year, monthIndex, day),
    title: 'event title',
    description: 'event description',
    id: '1',
  },
};
describe('NgxTimelineEventComponent', () => {
  let component: NgxTimelineEventComponent;
  let componentRef: ComponentRef<NgxTimelineEventComponent>;
  let fixture: ComponentFixture<NgxTimelineEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTimelineEventComponent],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxTimelineEventComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('event', event);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('should getDateObj', () => {
    it('without event info', () => {
      componentRef.setInput('event', {});
      const res = component.getDateObj();
      expect(res).toEqual({ day: undefined, month: undefined, year: undefined });
    });
    it('should getDateObj without langCode', () => {
      const res = component.getDateObj();
      expect(res).toEqual({ day: '19', month: 'Aug', year: 2021 });
    });
    it('should getDateObj with supported langCode', () => {
      componentRef.setInput('langCode', 'en');
      const res = component.getDateObj();
      expect(res).toEqual({ day: '19', month: 'Aug', year: 2021 });
    });
    it('should getDateObj with another supported langCode', () => {
      componentRef.setInput('langCode', 'it');
      const res = component.getDateObj();
      expect(res).toEqual({ day: '19', month: 'ago', year: 2021 });
    });
  });
  describe('should type error', () => {
    it('without event', () => {
      componentRef.setInput('event', null);
      expect(() => {
        component.getDateObj();
      }).toThrowError(TypeError);
    });
    it('without event info timestamp', () => {
      componentRef.setInput('event', undefined);
      expect(() => {
        component.getDateObj();
      }).toThrowError(TypeError);
    });
  });
});
