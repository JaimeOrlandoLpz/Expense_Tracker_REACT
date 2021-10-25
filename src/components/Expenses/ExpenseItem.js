import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // define state variable and state changing function
  const [title, setTitle]=useState(props.title);

  // Function to react to click event
  const clickHandler = ()=>{
    // Update title using the state hook, so page re-renders
    setTitle("Hieeee");
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        {/* We access the dynamic title value */}
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click me</button>
    </Card>
  );
}

export default ExpenseItem;
