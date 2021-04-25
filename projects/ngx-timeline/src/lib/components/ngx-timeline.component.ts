
import { Component, OnInit, Input } from '@angular/core';
import { NgxTimelineEvent } from '../models/NgxTimelineEvent';

@Component({
  selector: 'ngx-timeline',
  templateUrl: './ngx-timeline.component.html',
  styleUrls: ['./ngx-timeline.scss']
})
export class NgxTimelineComponent implements OnInit {

  @Input() totalPages: number;
  @Input() size: number;
  @Input() langCode?: string;

  items: NgxTimelineEvent[];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {description: 'descrizione', timestamp: new Date(), title: 'title'},
      {description: 'descrizione', timestamp: new Date(), title: 'title', onLeft: true}
    ];
  }

}
