import React, { useState } from 'react'
import "./ExpenseForm.css"

// This Component will handle the form logic specifically
const ExpenseForm = () => {


    const[userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    // Function to be executed every time title input changes
    const titleChangeHandler = (event) =>{

        /* IMPROPER APPROACH */ 
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });


        /* CORRECT APPROACH */
        setUserInput((prevState)=>{
            return {
                ...prevState, 
                enteredTitle: event.target.value
            };
        });

    }

    const amountChangeHandler = (event) => {

        setUserInput((prevState)=>{
            return {
                ...prevState, 
                enteredAmount: event.target.value
            };
        });
    }

    const dateChangeHandler = (event) => {
 

        setUserInput((prevState)=>{
            return {
                ...prevState, 
                enteredDate: event.target.value
            };
        });
    }

    return(
        <form>

            <div className = "new-expense__controls">
                <div className = "new-expense__control">
                    <label>Title: { userInput.enteredTitle } </label>
                    <input type="text" onChange={ titleChangeHandler }/>
                </div>

                <div className = "new-expense__control">
                    <label>Amount: { userInput.enteredAmount }</label>
                    <input type="number" min = "0.01" step = "0.01" onChange={ amountChangeHandler }/>
                </div>

                <div className = "new-expense__control">
                    <label>Date: { userInput.enteredDate }</label>
                    <input type="date" min="2021-10-24" max = "2022-12-31" onChange = { dateChangeHandler }/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>

        </form>
    );
}

export default ExpenseForm;