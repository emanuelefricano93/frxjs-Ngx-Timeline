import { NgModule } from '@angular/core';
import { NgxTimelineComponent } from './components/ngx-timeline.component';
import { NgxTimelineService } from './services/ngx-timeline.service';
import { NgxTimelineEventComponent } from './components/ngx-timeline-event/ngx-timeline-event.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgxDatePipe } from './pipes/ngx-date-pipe';
import localeIt from '@angular/common/locales/it';

registerLocaleData(localeIt);

@NgModule({
  declarations: [NgxTimelineComponent, NgxTimelineEventComponent, NgxDatePipe],
  imports: [CommonModule],
  providers: [NgxTimelineService],
  exports: [NgxTimelineComponent]
})
export class NgxTimelineModule { }
