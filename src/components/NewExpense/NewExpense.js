import React, { useState } from 'react'
import './NewExpense.css'
import "./ExpenseForm"
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{

    const [editing, setEditing] = useState(false);

    const startEditingHandler = () => {
        setEditing(true);
    }

    const onCancel = () => {
        setEditing(false);
    }

     const saveExpenseDataHandler = (enteredExpenseData) => {

         // enteredExpenseData Comes from the child

         // Date comes as String, so we need to format it prperly YYYY-MM-DD
        const dateString = enteredExpenseData.date;
        const year = dateString.substring(0,4);
        const month = dateString.substring(5,7);
        const day = dateString.substring(8,10);
        const dateInFormat = new Date(year, month - 1, day);
        const expenseData = {
            ...enteredExpenseData,
            date: dateInFormat,
            id: Math.random.toString()
        }
        console.log("Expected" + expenseData.date);
        props.onAddExpense(expenseData);
     }

    return(
        <div className="new-expense">
            {editing !== true ? <button onClick ={startEditingHandler}>Add New Expense</button> : <ExpenseForm onSaveExpenseData = {/* Pass pointer to function we want to execute in child */ saveExpenseDataHandler} onCancel = {onCancel}/>}    
        </div>
    );
}

export default NewExpense;