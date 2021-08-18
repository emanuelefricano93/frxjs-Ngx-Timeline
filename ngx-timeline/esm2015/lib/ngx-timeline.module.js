import { NgModule } from '@angular/core';
import { NgxTimelineComponent } from './components/ngx-timeline.component';
import { NgxTimelineEventComponent } from './components/ngx-timeline-event/ngx-timeline-event.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgxDatePipe } from './pipes/ngx-date-pipe';
import localeIt from '@angular/common/locales/it';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import localeEs from '@angular/common/locales/es';
import * as i0 from "@angular/core";
registerLocaleData(localeIt);
registerLocaleData(localeFr);
registerLocaleData(localeDe);
registerLocaleData(localeEs);
export class NgxTimelineModule {
}
NgxTimelineModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxTimelineModule });
NgxTimelineModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxTimelineModule_Factory(t) { return new (t || NgxTimelineModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxTimelineModule, { declarations: [NgxTimelineComponent, NgxTimelineEventComponent, NgxDatePipe], imports: [CommonModule], exports: [NgxTimelineComponent, NgxDatePipe] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxTimelineModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxTimelineComponent, NgxTimelineEventComponent, NgxDatePipe],
                imports: [CommonModule],
                exports: [NgxTimelineComponent, NgxDatePipe]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpbWVsaW5lLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aW1lbGluZS9zcmMvbGliL25neC10aW1lbGluZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sUUFBUSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xELE9BQU8sUUFBUSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xELE9BQU8sUUFBUSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xELE9BQU8sUUFBUSxNQUFNLDRCQUE0QixDQUFDOztBQUVsRCxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM3QixrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM3QixrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM3QixrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQU83QixNQUFNLE9BQU8saUJBQWlCOztxREFBakIsaUJBQWlCO2lIQUFqQixpQkFBaUIsa0JBSG5CLENBQUMsWUFBWSxDQUFDO3dGQUdaLGlCQUFpQixtQkFKYixvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSxXQUFXLGFBQ2pFLFlBQVksYUFDWixvQkFBb0IsRUFBRSxXQUFXO2tEQUVoQyxpQkFBaUI7Y0FMN0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLHlCQUF5QixFQUFFLFdBQVcsQ0FBQztnQkFDNUUsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLENBQUM7YUFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4VGltZWxpbmVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmd4LXRpbWVsaW5lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hUaW1lbGluZUV2ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25neC10aW1lbGluZS1ldmVudC9uZ3gtdGltZWxpbmUtZXZlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgcmVnaXN0ZXJMb2NhbGVEYXRhIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5neERhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy9uZ3gtZGF0ZS1waXBlJztcbmltcG9ydCBsb2NhbGVJdCBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy9pdCc7XG5pbXBvcnQgbG9jYWxlRnIgZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2xvY2FsZXMvZnInO1xuaW1wb3J0IGxvY2FsZURlIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9sb2NhbGVzL2RlJztcbmltcG9ydCBsb2NhbGVFcyBmcm9tICdAYW5ndWxhci9jb21tb24vbG9jYWxlcy9lcyc7XG5cbnJlZ2lzdGVyTG9jYWxlRGF0YShsb2NhbGVJdCk7XG5yZWdpc3RlckxvY2FsZURhdGEobG9jYWxlRnIpO1xucmVnaXN0ZXJMb2NhbGVEYXRhKGxvY2FsZURlKTtcbnJlZ2lzdGVyTG9jYWxlRGF0YShsb2NhbGVFcyk7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05neFRpbWVsaW5lQ29tcG9uZW50LCBOZ3hUaW1lbGluZUV2ZW50Q29tcG9uZW50LCBOZ3hEYXRlUGlwZV0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTmd4VGltZWxpbmVDb21wb25lbnQsIE5neERhdGVQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hUaW1lbGluZU1vZHVsZSB7IH1cbiJdfQ==