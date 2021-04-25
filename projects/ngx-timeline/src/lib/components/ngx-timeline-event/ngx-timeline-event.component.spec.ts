import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTimelineEventComponent } from './ngx-timeline-event.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
