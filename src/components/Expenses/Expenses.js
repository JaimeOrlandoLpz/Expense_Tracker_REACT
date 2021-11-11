/* Author: Jaime Orlando López Ramos */ 
import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangedHandler = (value) =>{
    setFilteredYear(value);
  }

  // Obtain the expenses that correspond to the selected year
  const filteredExpenses = props.items.filter((item) => {
      const itemYear = item.date.getFullYear()
      return (itemYear.toString() === filteredYear);
  })
  
  let expensesContent = <p> NONE FOUND </p>;

  if(filteredExpenses.length > 0){

    expensesContent = filteredExpenses.map((expense)=>{
      return(
        <ExpenseItem 
          key = {expense.id}
          title = {expense.title}
          amount = {expense.amount}
          date = {expense.date}
        />
      );
    })

  }

  return (
    <>
      <ExpensesFilter onChangeFilter = {filterChangedHandler} selected = {filteredYear}></ExpensesFilter>
      <Card className="expenses">

      

      {
        // Dynamically access the JSX expensesContent variable to render its content
        expensesContent
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
