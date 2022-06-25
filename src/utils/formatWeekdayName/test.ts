import { addDays, subDays } from 'date-fns';
import { formatWeekdayName } from './index';

describe('formatWeekdayName()', () => {
  it('should return Today, if the date is current day', () => {
    expect(formatWeekdayName(new Date())).toBe('Today');
  });
  it('should return the correct name of day, parsed from the given date', () => {
    const date = new Date();
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const currentDay = date.getDay();
    let testDate;
    let expectedDay;
    if (currentDay === 6) {
      testDate = subDays(new Date(), 1);
      expectedDay = days[currentDay - 1];
    } else {
      testDate = addDays(new Date(), 1);
      expectedDay = days[currentDay + 1];
    }
    expect(formatWeekdayName(testDate)).toBe(expectedDay);
  });
});
