import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangedHandler = (value) =>{
    console.log("function triggered");
    console.log(value);
    setFilteredYear(value);

  }
  return (
    <>
      <ExpensesFilter onChangeFilter = {filterChangedHandler} selected = {filteredYear}></ExpensesFilter>
      <Card className="expenses">

      { // Dynamically rendering our array
          props.items.map((expense)=>{
            return(
              <ExpenseItem 
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}
              />
            );
        })
      }

       { // STATIC RENDERING (NOT GOOD)
         /* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </>
  );
}

export default Expenses;
