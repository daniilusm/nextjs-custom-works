import { utcToZonedTime } from 'date-fns-tz';

export const parseUTCDate = (date: string) => {
  return utcToZonedTime(date, 'UTC');
};
