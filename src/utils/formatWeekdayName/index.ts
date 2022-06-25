import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

/*
* @Function formatWeekdayName
* Will format the given date to one of these values
* [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  * If the given date is current day, it will return Today
* */
export const formatWeekdayName = (datetime: Date) =>
  isToday(datetime) ? 'Today' : format(datetime, 'cccc');
