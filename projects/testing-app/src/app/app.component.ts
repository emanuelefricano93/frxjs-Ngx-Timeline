import { Component } from '@angular/core';
import { NgxTimelineService } from 'ngx-timeline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testing-app';

  constructor(private timelineService: NgxTimelineService) {
    this.timelineService.sum(1, 2);
  }
}
