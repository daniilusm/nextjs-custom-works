import { format } from 'date-fns';

const convertTimeInterval = (messageDate: string) => {
  const intervalMinutes = (new Date() - new Date(messageDate)) / (1000 * 60);
  if (intervalMinutes < 60) {
    return `${Math.ceil(intervalMinutes)}m`;
  }
  if (intervalMinutes >= 60 && intervalMinutes < 60 * 24) {
    return `${Math.ceil(intervalMinutes / 60)}h`;
  }
  if (intervalMinutes >= 60 * 24 && intervalMinutes < 60 * 24 * 7) {
    return `${Math.ceil(intervalMinutes / (60 * 24))}d`;
  }
  return format(new Date(messageDate), 'PP');
};

export default convertTimeInterval;
