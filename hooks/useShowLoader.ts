import { useSelector } from 'react-redux';
import { isPendingSelector as calendarPendingSelector } from 'src/models/liveCalendar/selectors';

export default () => {
  const isPendingCalendar = useSelector(calendarPendingSelector);

  return { showLoader: isPendingCalendar };
};
