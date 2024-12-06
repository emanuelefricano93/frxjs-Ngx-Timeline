import { NgxDatePipe } from './ngx-date-pipe';
import { NgxDateFormat } from '../models';

describe('NgxDatePipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new NgxDatePipe();

  it('transforms from date to string (language: it)', () => {
    const date = new Date('2024-07-10');
    expect(pipe.transform(date, NgxDateFormat.DAY_MONTH_YEAR, 'it')).toBe('10 luglio 2024');
  });

  it('transforms from date to string', () => {
    const date = new Date('2024-07-10');
    expect(pipe.transform(date, NgxDateFormat.DAY_MONTH_YEAR)).toBe('10 July 2024');
  });
});
