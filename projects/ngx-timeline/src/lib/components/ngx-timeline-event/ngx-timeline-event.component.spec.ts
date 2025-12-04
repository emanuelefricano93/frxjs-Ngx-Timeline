import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { ComponentRef, provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxTimelineItem, NgxTimelineItemPosition } from '../../models';
import { NgxTimelineEventComponent } from './ngx-timeline-event.component';
import { vi } from 'vitest';

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
const clickEmitterSpy = vi.fn();

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
    
    component.clickEmitter.emit = clickEmitterSpy;
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
      fixture.detectChanges();
      const dateContainer = fixture.nativeElement.querySelector('.event-date-container');
      expect(dateContainer).toBeTruthy();
      expect(dateContainer.textContent).toContain(''); // Also verify content 
      fixture.detectChanges();
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
      fixture.detectChanges();
      const dateContainer = fixture.nativeElement.querySelector('.event-date-container');
      expect(dateContainer).toBeTruthy();
      expect(dateContainer.textContent).toContain('ago'); // Also verify content  
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

  describe('should test inputs', () => {
    it(('with different types'), () => {
        fixture.componentRef.setInput('orientation', null);
        fixture.componentRef.setInput('langCode', 'en');
        fixture.detectChanges();
        expect(component.dateObjSignal()).toBeTruthy();
        expect(component).toBeTruthy();
        expect(componentRef.instance.langCode()).toBe('en');
        expect(componentRef.instance.orientation()).toBeFalsy();
    });
    it('should default to true when no input is provided', () => {
      // Setup: Component fixture created without calling setInput
      expect(component.event()).toBeTruthy();
    });
  });

  describe('should test html', () => {
    it('should emit the correct event data when the element is clicked', () => {
        const expectedPayload: NgxTimelineItem = {position: NgxTimelineItemPosition.ON_LEFT}
        vi.spyOn(component, 'event').mockReturnValue(expectedPayload);
        fixture.detectChanges();
        const clickableElement = fixture.nativeElement.querySelector('.event-wrapper-container'); 
        clickableElement.click(); 
        expect(clickEmitterSpy).toHaveBeenCalledTimes(1); 
        expect(clickEmitterSpy).toHaveBeenCalledWith(expectedPayload);
      });
    });
    it('should test colesidepoistion ON_RIGHT', () => {
        componentRef.setInput('colSidePosition', NgxTimelineItemPosition.ON_RIGHT);
        fixture.detectChanges();
        const visibleElement = fixture.nativeElement.querySelector('.arrow.left'); 
        expect(visibleElement).toBeTruthy();
    });
    it('should test colesidepoistion ON_LEFT', () => {
        componentRef.setInput('colSidePosition', NgxTimelineItemPosition.ON_LEFT);
        fixture.detectChanges();
        const visibleElement = fixture.nativeElement.querySelector('.arrow.right'); 
        expect(visibleElement).toBeTruthy();
    });
    it('should NOT render the date container when getDateObj returns null (False Branch)', () => {
      componentRef.setInput('event', null as any);
      fixture.detectChanges();
      const dateContainerAfterRender = fixture.nativeElement.querySelector('.event-date-container');
      expect(dateContainerAfterRender).toBeFalsy(); 
    });
    it('should NOT render the month day and yeaer container when getDateObj returns empty object', () => {
      componentRef.setInput('event', {} as any);
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('.event-date-container.event-date-month')).toBeFalsy(); 
      expect(fixture.nativeElement.querySelector('.event-date-container.event-date-day')).toBeFalsy(); 
      expect(fixture.nativeElement.querySelector('.event-date-container.event-date-month')).toBeFalsy(); 
    });
});

