import { DatePipe } from '@angular/common';
import { Pipe } from '@angular/core';
import { supportedLanguageCodes, fieldConfigDate, dateConfigMap } from '../models';
import * as i0 from "@angular/core";
export class NgxDatePipe {
    constructor() {
    }
    transform(date, dateFormat, langCode) {
        let transformedDate = null;
        if (date) {
            const objDate = this.getDateConfig(langCode);
            transformedDate = new DatePipe(objDate.code).transform(new Date(date), this.dateFormat(dateFormat, objDate));
        }
        return transformedDate;
    }
    dateFormat(dateFormat, configDate) {
        return configDate[fieldConfigDate[dateFormat]];
    }
    getDateConfig(langCode) {
        const code = langCode || supportedLanguageCodes[0];
        const configDate = dateConfigMap[code] || dateConfigMap[supportedLanguageCodes[0]];
        return configDate;
    }
}
NgxDatePipe.ɵfac = function NgxDatePipe_Factory(t) { return new (t || NgxDatePipe)(); };
NgxDatePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "ngxdate", type: NgxDatePipe, pure: false });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDatePipe, [{
        type: Pipe,
        args: [{ name: 'ngxdate', pure: false }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGUtcGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10aW1lbGluZS9zcmMvbGliL3BpcGVzL25neC1kYXRlLXBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBK0Msc0JBQXNCLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFHaEksTUFBTSxPQUFPLFdBQVc7SUFFdEI7SUFDQSxDQUFDO0lBRUQsU0FBUyxDQUFDLElBQW1CLEVBQUUsVUFBbUIsRUFBRSxRQUFpQjtRQUNuRSxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxJQUFJLEVBQUU7WUFDUixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLGVBQWUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDOUc7UUFDRCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBRU8sVUFBVSxDQUFDLFVBQWtCLEVBQUUsVUFBeUI7UUFDOUQsT0FBTyxVQUFVLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVPLGFBQWEsQ0FBQyxRQUFnQjtRQUNwQyxNQUFNLElBQUksR0FBRyxRQUFRLElBQUksc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7O3NFQXRCVSxXQUFXOzZEQUFYLFdBQVc7a0RBQVgsV0FBVztjQUR2QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmd4Q29uZmlnRGF0ZSwgTmd4RGF0ZU9iak1hcCwgTmd4RGF0ZUZvcm1hdCwgc3VwcG9ydGVkTGFuZ3VhZ2VDb2RlcywgZmllbGRDb25maWdEYXRlLCBkYXRlQ29uZmlnTWFwIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ25neGRhdGUnLCBwdXJlOiBmYWxzZSB9KVxyXG5leHBvcnQgY2xhc3MgTmd4RGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZSB8IHN0cmluZywgZGF0ZUZvcm1hdD86IHN0cmluZywgbGFuZ0NvZGU/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRyYW5zZm9ybWVkRGF0ZSA9IG51bGw7XHJcbiAgICBpZiAoZGF0ZSkge1xyXG4gICAgICBjb25zdCBvYmpEYXRlID0gdGhpcy5nZXREYXRlQ29uZmlnKGxhbmdDb2RlKTtcclxuICAgICAgdHJhbnNmb3JtZWREYXRlID0gbmV3IERhdGVQaXBlKG9iakRhdGUuY29kZSkudHJhbnNmb3JtKG5ldyBEYXRlKGRhdGUpLCB0aGlzLmRhdGVGb3JtYXQoZGF0ZUZvcm1hdCwgb2JqRGF0ZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkRGF0ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGF0ZUZvcm1hdChkYXRlRm9ybWF0OiBzdHJpbmcsIGNvbmZpZ0RhdGU6IE5neENvbmZpZ0RhdGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNvbmZpZ0RhdGVbZmllbGRDb25maWdEYXRlW2RhdGVGb3JtYXRdXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RGF0ZUNvbmZpZyhsYW5nQ29kZTogc3RyaW5nKTogTmd4Q29uZmlnRGF0ZSB7XHJcbiAgICBjb25zdCBjb2RlID0gbGFuZ0NvZGUgfHwgc3VwcG9ydGVkTGFuZ3VhZ2VDb2Rlc1swXTtcclxuICAgIGNvbnN0IGNvbmZpZ0RhdGUgPSBkYXRlQ29uZmlnTWFwW2NvZGVdIHx8IGRhdGVDb25maWdNYXBbc3VwcG9ydGVkTGFuZ3VhZ2VDb2Rlc1swXV07XHJcbiAgICByZXR1cm4gY29uZmlnRGF0ZTtcclxuICB9XHJcbn1cclxuIl19