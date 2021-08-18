import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgxDatePipe implements PipeTransform {
    constructor();
    transform(date: Date | string, dateFormat?: string, langCode?: string): string;
    private dateFormat;
    private getDateConfig;
    static ɵfac: i0.ɵɵFactoryDef<NgxDatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDefWithMeta<NgxDatePipe, "ngxdate">;
}
//# sourceMappingURL=ngx-date-pipe.d.ts.map