import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {

  // Copy of the Date, which we'll use for the presentation/rendering
  let officialDate = props.date;
  console.log("Here Date " + props.date);

      // Add new expense and update our expenses state

      // As when we receive a date from the form it comes as a string, we need to reformat it to be a date object
      if (typeof props.date === 'string' || props.date instanceof String){
      
        const yearDate = props.date.substring(0, 4);
        const monthDate = props.date.substring(5, 7);
        const dayDate = props.date.substring(8, 10);
        officialDate = new Date(yearDate, monthDate - 1, dayDate);
        console.log("I'm the problem, bitch: " + officialDate);

      }

  const month = officialDate.toLocaleString('en-US', { month: 'long' });
  const day = officialDate.toLocaleString('en-US', { day: '2-digit' });
  const year = officialDate.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
