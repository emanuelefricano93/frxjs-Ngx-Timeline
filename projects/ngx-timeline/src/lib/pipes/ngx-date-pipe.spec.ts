import { NgxDatePipe } from './ngx-date-pipe';
import { NgxDateFormat } from '../models';

describe('NgxDatePipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new NgxDatePipe();
  let consoleWarnSpy: jasmine.Spy; // Using a union type for Jest/Jasmine compatibility

  beforeEach(() => {
    // 1. Create a spy on console.warn
    // Jest:
    // Jasmine:
    if (typeof jasmine !== 'undefined') {
      consoleWarnSpy = spyOn(console, 'warn');
    }
  });

  it('transforms from date to string (language: it)', () => {
    const date = new Date('2024-07-10');
    expect(pipe.transform(date, NgxDateFormat.DAY_MONTH_YEAR, 'it')).toBe('10 luglio 2024');
  });

  it('transforms from date to string', () => {
    const date = new Date('2024-07-10');
    expect(pipe.transform(date, NgxDateFormat.DAY_MONTH_YEAR)).toBe('10 July 2024');
  });

  it('should call console.warn when dateFormat is undefined', () => {
    const testDate = new Date(2023, 0, 15); // Jan 15, 2023
    pipe.transform(testDate, undefined); // Call transform with undefined dateFormat
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
    expect(consoleWarnSpy).toHaveBeenCalledWith('frxjs-ngx-timeline: no date format defined.');
  });

  it('should call console.warn when dateFormat is undefined', () => {
    const date = new Date(2023, 0, 15); // Jan 15, 2023
    expect(pipe.transform(date, 'yyyy-MM-dd')).toBe('2023-01-15');
  });
});
