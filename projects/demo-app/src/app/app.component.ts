import { Component } from '@angular/core';
import { NgxTimelineService, NgxTimelineEvent } from 'ngx-timeline';

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

  constructor(private timelineService: NgxTimelineService) {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const nextMonth = new Date();
    nextMonth.setMonth(today.getMonth() + 1);

    this.events = [
      {description: 'descrizione', timestamp: today, title: 'title'},
      {description: 'descrizione', timestamp: today, title: 'title'},
      {description: 'descrizione', timestamp: tomorrow, title: 'title'},
      {description: 'descrizione', timestamp: tomorrow, title: 'title'},
      {description: 'descrizione', timestamp: nextMonth, title: 'title'},
    ];

    /* setInterval(() => {
      this.color += 100;
      this.backgroundColor = `${this.getHexColor(this.color)}`;
      if(this.color > 80000) {
        this.color = 0;
      }
    }, 1); */
  }


  getHexColor(number){
    return "#"+((number)>>>0).toString(16).slice(-6);
}

  handleClick(event: any) {
    const a = 5;
    window.console.log('',event);
  }
}
