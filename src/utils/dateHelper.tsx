import moment from 'moment-timezone';
import { DateTime } from 'luxon';
export function convertTimeZone(time: Date | string | number, includeFormat?: boolean) {
  if (!time) {
    return '';
  }
  const TIMEZONE = import.meta.env.VITE_CURRENT_TIMEZONE;
  if (includeFormat) {
    return moment.tz(time, TIMEZONE).startOf('day').format('YYYY-MM-DD');
  }
  return DateTime.fromJSDate(new Date(time), { zone: 'utc' }).setZone(TIMEZONE).startOf('day');
}
