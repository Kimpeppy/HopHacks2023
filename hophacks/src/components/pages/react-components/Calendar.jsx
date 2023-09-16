import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

var myEventsList = [{
    title: 'Event 1',
    date: '2023-09-20',
  },
  {
    title: 'Event 2',
    date: '2023-09-25',
  }]

const MyCalendar = (props) => (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
)

export default MyCalendar