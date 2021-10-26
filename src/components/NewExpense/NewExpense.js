import React from 'react'
import './NewExpense.css'
import "./ExpenseForm"
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{

     const saveExpenseDataHandler = (enteredExpenseData) => {
         // enteredExpenseData Comes from the child
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString()
        }
        console.log(enteredExpenseData);
        props.onAddExpense(expenseData);
     }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {/* Pass pointer to function we want to execute in child */ saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;