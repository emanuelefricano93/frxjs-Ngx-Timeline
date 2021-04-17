import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTimelineComponent } from './ngx-timeline.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
