import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EventPopup from '../global/EventPopup';

const localizer = momentLocalizer(moment);

const initialEvents = [
  { id: 1, title: 'sport', start: moment().add(1, 'days').set({ hour:10, minute:0 }).toDate(), end: moment().add(1, 'days').set({ hour:11, minute:0 }).toDate() },
  { id: 2, title: 'name',  start: moment().add(20, 'days').set({ hour:13, minute:0 }).toDate(), end: moment().add(20, 'days').set({ hour:18, minute:0 }).toDate() },
  { id: 3, title: 'sport', start: moment().add(12, 'days').set({ hour:1, minute:0 }).toDate(),  end: moment().add(12, 'days').set({ hour:9, minute:0 }).toDate() },
];

const Calendar1 = () => {
  const [events, setEvents] = useState(initialEvents);
  const [isOpen, setIsOpen] = useState(false);
  const [popupEvent, setPopupEvent] = useState(null);
  const [popupDate, setPopupDate] = useState(null);

  const handleSave = data => {
    if (data.id) {
      setEvents(prev => prev.map(ev => ev.id === data.id ? data : ev));
    } else {
      data.id = events.length + 1;
      setEvents(prev => [...prev, data]);
    }
    setIsOpen(false);
  };
  const handleSlot = slot => {
    setPopupDate(slot.start);
    setPopupEvent(null);
    setIsOpen(true);
  };
  const handleEventClick = ev => {
    setPopupEvent(ev);
    setPopupDate(null);
    setIsOpen(true);
  };

  return (
    <div className="px-8 py-6">
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        onSelectSlot={handleSlot}
        onSelectEvent={handleEventClick}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        className="bg-white rounded shadow"
      />
      {isOpen && (
        <EventPopup
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSave={handleSave}
          date={popupDate}
          event={popupEvent}
        />
      )}
    </div>
  );
};

export default Calendar1;
