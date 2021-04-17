
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-timeline',
  template: `
    <p>
      Hello ngx-timeline works! {{size}}
    </p>
  `,
  styles: [
  ]
})
export class NgxTimelineComponent implements OnInit {

  @Input() totalPages: number;
  @Input() size: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
