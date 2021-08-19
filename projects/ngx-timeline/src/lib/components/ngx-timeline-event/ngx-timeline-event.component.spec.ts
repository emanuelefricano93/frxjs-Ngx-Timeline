import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTimelineEventComponent } from './ngx-timeline-event.component';
import { NgxTimelineItemPosition } from '../../models';
import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeIt);

const year = 2021;
const monthIndex = 7;
const day = 19;
const event = {
  type: "event",
  position: NgxTimelineItemPosition.ON_LEFT,
  periodInfo: {
    periodKey: '08/2021',
    year: year,
    month: monthIndex + 1,
    day: day,
    firstDate: new Date(year, monthIndex, day)
  },
  eventInfo: {
    timestamp: new Date(year, monthIndex, day),
    title: 'event title',
    description: 'event description',
    id: '1'
  }
};
describe('NgxTimelineEventComponent', () => {
  let component: NgxTimelineEventComponent;
  let fixture: ComponentFixture<NgxTimelineEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTimelineEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTimelineEventComponent);
    component = fixture.componentInstance;
    component.event = event;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should getDateObj', () => {
    it('without event', () => {
      component.event = null;
      const res = component.getDateObj();
      expect(res).toEqual({day: undefined, month: undefined, year: undefined});
    });
    it('without event info', () => {
      component.event = {};
      const res = component.getDateObj();
      expect(res).toEqual({day: undefined, month: undefined, year: undefined});
    });
    it('without event info timestamp', () => {
      component.event = {eventInfo: null};
      const res = component.getDateObj();
      expect(res).toEqual({day: undefined, month: undefined, year: undefined});
    });
    it('should getDateObj without langCode', () => {
      const res = component.getDateObj();
      expect(res).toEqual({day: '19', month: 'Aug', year: 2021});
    });
    it('should getDateObj with supported langCode', () => {
      component.langCode = 'en';
      const res = component.getDateObj();
      expect(res).toEqual({day: '19', month: 'Aug', year: 2021});
    });
    it('should getDateObj with another supported langCode', () => {
      component.langCode = 'it';
      const res = component.getDateObj();
      expect(res).toEqual({day: '19', month: 'ago', year: 2021});
    });
    it('should getDateObj with unsupported langCode', () => {
      component.langCode = 'xx';
      const res = component.getDateObj();
      expect(res).toEqual({day: '19', month: 'Aug', year: 2021});
    });
  });

});
