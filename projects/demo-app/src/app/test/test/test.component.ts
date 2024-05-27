import { Component } from '@angular/core';
import { NgxTimelineModule, NgxTimelineOrientation } from 'ngx-timeline';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgxTimelineModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  NgxTimelineOrientation = NgxTimelineOrientation;
  events = [{ id: 5, description: 'This is the description inside a standalone', timestamp: new Date(), title: 'title 1' }];
}
