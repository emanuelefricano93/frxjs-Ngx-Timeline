import { TestBed } from '@angular/core/testing';

import { NgxTimelineService } from './ngx-timeline.service';

describe('NgxTimelineService', () => {
  let service: NgxTimelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTimelineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
