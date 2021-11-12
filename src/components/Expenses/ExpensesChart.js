import React from 'react';
import Chart from '../Chart/Chart';


const ExpenseChart = props => {
    const charBarPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}
    ]

    console.log(props.expenses);
    for(const expense of props.expenses){

        // Jan = 0, Feb = 1, ..., Dec = 11
        const expenseMonth = expense.date.getMonth();

        charBarPoints[expenseMonth].value += expense.amount;
    }

    return(<Chart dataPoints = {charBarPoints}></Chart>);
}

export default ExpenseChart;