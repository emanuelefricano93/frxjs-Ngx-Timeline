import { Component } from '@angular/core';
import { NgxTimelineEvent } from 'ngx-timeline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';
  events: NgxTimelineEvent[];
  color = 0;
  backgroundColor = 'red';

  constructor() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const nextMonth = new Date();
    nextMonth.setMonth(today.getMonth() + 1);

    this.events = [
      {description: 'This is the description of the event', timestamp: today, title: 'title'},
      {description: 'This is the description of the event', timestamp: today, title: 'title'},
      {description: 'This is the description of the event', timestamp: tomorrow, title: 'title'},
      {description: 'This is the description of the event', timestamp: tomorrow, title: 'title'},
      {description: 'This is the description of the event', timestamp: nextMonth, title: 'title'},
    ];

    setTimeout(() => {
      this.events[0].description = "italian description";
    }, 2000);

  }

  handleClick(event: any) {
    if (event) {
      const a = 5;
      window.console.log('',event);
      // set iterable differ
      this.events[0].description = "italian description";
    }
  }
}
