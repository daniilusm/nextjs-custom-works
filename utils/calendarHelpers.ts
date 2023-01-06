import { addHours, format } from 'date-fns';
import { defaultColorPickerColors } from 'src/components/LiveColorPicker/colorPickerData';
import { Event as EventType } from 'src/models/liveCalendar/types';
import { Colors } from 'src/types';

export const convertDateToLocale = (date: string) =>
  addHours(
    new Date(date),
    -(new Date(date).getTimezoneOffset() / 60)
  ).toISOString();

export const convertDateForBE = (date: string, time: string) => {
  const dateNow = new Date(date);
  dateNow.setHours(+time.slice(0, 2));
  dateNow.setMinutes(+time.slice(3, 5));
  const dateWithOffset = addHours(dateNow, dateNow.getTimezoneOffset() / 60);
  return `${format(dateWithOffset, 'yyyy-MM-dd')}T${format(
    dateWithOffset,
    'HH:mm'
  )}+00`;
};

export const getFontColor = (event: EventType) =>
  (defaultColorPickerColors.find(color => color.color === event.color)?.isDark
    ? Colors.white
    : Colors.black) || Colors.black;
