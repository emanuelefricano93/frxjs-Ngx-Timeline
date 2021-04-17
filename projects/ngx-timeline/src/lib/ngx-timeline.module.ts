import { NgModule } from '@angular/core';
import { NgxTimelineComponent } from './components/ngx-timeline.component';
import { NgxTimelineService } from './services/ngx-timeline.service';



@NgModule({
  declarations: [NgxTimelineComponent],
  imports: [],
  providers: [NgxTimelineService],
  exports: [NgxTimelineComponent]
})
export class NgxTimelineModule { }
