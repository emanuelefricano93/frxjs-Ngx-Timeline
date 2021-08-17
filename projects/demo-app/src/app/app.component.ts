import { Component } from '@angular/core';
import { NgxTimelineEvent, NgxTimelineEventGroup, NgxTimelineEventchangeSideInGroup } from 'ngx-timeline';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';
  events: NgxTimelineEvent[];
  events$: BehaviorSubject<NgxTimelineEvent[]> = new BehaviorSubject(null);
  color = 0;
  backgroundColor = 'red';
  form: FormGroup;

  configurations = [
    {
      label: 'Custom class',
      formControlName: 'customClass',
      options: [
        {name: 'No Custom Template', value: false},
        {name: 'Custom Class', value: true}
      ]
    },
    {
      label: 'Inner event custom template',
      formControlName: 'innerEventCustomTemplate',
      options: [
        {name: 'No Custom class', value: false},
        {name: 'Custom Inner Event Template', value: true}
      ]
    },
    {
      label: 'Center icon custom template',
      formControlName: 'centerIconCustomTemplate',
      options: [
        {name: 'No Custom Template', value: false},
        {name: 'Custom Icon Template', value: true}
      ]
    },
    {
      label: 'Group events by',
      formControlName: 'groupEvent',
      options: [
        {name: 'Month Year', value: NgxTimelineEventGroup.MONTH_YEAR},
        {name: 'Day Month Year', value: NgxTimelineEventGroup.DAY_MONTH_YEAR},
        {name: 'Year', value: NgxTimelineEventGroup.YEAR}
      ]
    },
    {
      label: 'Change event side in group',
      formControlName: 'changeSideInGroup',
      options: [
        {name: 'On different day', value: NgxTimelineEventchangeSideInGroup.ON_DIFFERENT_DAY},
        {name: 'All', value: NgxTimelineEventchangeSideInGroup.ALL},
        {name: 'On different hours and minutes', value: NgxTimelineEventchangeSideInGroup.ON_DIFFERENT_HOURS_AND_MINUTES},
        {name: 'On different month', value: NgxTimelineEventchangeSideInGroup.ON_DIFFERENT_MONTH}
      ]
    }
  ];
  constructor() {
    this.form = new FormGroup({});
    this.configurations.forEach(configuration => this.form.addControl(configuration.formControlName, new FormControl(configuration.options[0].value)));
    this.initEvents();
  }

  private initEvents() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const nextMonth = new Date();
    nextMonth.setMonth(today.getMonth() + 1);

    this.events = [
      { description: 'This is the description of the event', timestamp: today, title: 'title' },
      { description: 'This is the description of the event', timestamp: today, title: 'title' },
      { description: 'This is the description of the event', timestamp: tomorrow, title: 'title' },
      { description: 'This is the description of the event', timestamp: tomorrow, title: 'title' },
      { description: 'This is the description of the event', timestamp: nextMonth, title: 'title' },
    ];
  }

  handleClick(event: any) {
    if (event) {
      const a = 5;
      window.console.log('',event);
      // set iterable differ
      this.events[2].description = "italian description";
      this.events$.next(this.events);
    }
  }
}
