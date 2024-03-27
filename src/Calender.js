import React, { useState } from 'react';
import './Calendar.css'; // Styling for the calendar (You can create a CSS file)

const Calendar = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(null);

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(date.getMonth(), date.getFullYear());
  const firstDayOfMonth = getFirstDayOfMonth(date.getMonth(), date.getFullYear());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const prevMonth = () => {
    setDate(prevDate => {
      const prevMonthDate = new Date(prevDate);
      prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
      return prevMonthDate;
    });
  };

  const nextMonth = () => {
    setDate(prevDate => {
      const nextMonthDate = new Date(prevDate);
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      return nextMonthDate;
    });
  };

  const handleDateClick = day => {
    setSelectedDate(new Date(date.getFullYear(), date.getMonth(), day));
  };

  const renderDays = () => {
    const daysArray = [];

    // Fill in the space for the days from the previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    // Render days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(
        <div
          key={i}
          className={`day ${selectedDate && selectedDate.getDate() === i ? 'selected' : ''}`}
          onClick={() => handleDateClick(i)}
        >
          {i}
        </div>
      );
    }

    return daysArray;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>Previous</button>
        <h1>{monthNames[date.getMonth()]} {date.getFullYear()}</h1>
        <button onClick={nextMonth}>Next</button>
      </div>
      <div className="weekdays">
        {daysOfWeek.map(day => (
          <div key={day} className="weekday">{day}</div>
        ))}
      </div>
      <div className="days-grid">
        {renderDays()}
      </div>
      <div className="selected-date">
        Selected Date: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}
      </div>
    </div>
  );
};

export default Calendar;
