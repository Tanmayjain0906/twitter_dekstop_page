import React, { useState } from 'react';
import "./style.css";

const DropDown = ({ setMonth, setDate, setYear }) => {
  // Generate an array of days
  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  // Generate an array of months
  const months = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 }
  ];

  // Generate an array of years
  const startYear = 2000; // Change this to the starting year
  const endYear = new Date().getFullYear(); // Current year
  const years = Array.from({ length: endYear - startYear + 1 }, (_, index) => startYear + index);

  // State to manage selected date
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // Event handlers for day, month, and year selection
  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
    setDate(e.target.value)
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setYear(e.target.value);
  };

  return (
    <div className='drop-down-container'>
      
      <select id="month" value={selectedMonth} onChange={handleMonthChange}>
        <option value="">Month</option>
        {months.map((month, index) => (
          <option key={index} value={month.value}>
            {month.name}
          </option>
        ))}
      </select>


      <select id="day" value={selectedDay} onChange={handleDayChange}>
        <option value="">Day</option>
        {days.map((day, index) => (
          <option key={index} value={day}>
            {day}
          </option>
        ))}
      </select>


      <select id="year" value={selectedYear} onChange={handleYearChange}>
        <option value="">Year</option>
        {years.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
