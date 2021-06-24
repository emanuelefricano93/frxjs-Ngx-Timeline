import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxTimelineService {

  constructor() { }

  sum(a: number, b: number): number {
    return a + b;
  }
}
