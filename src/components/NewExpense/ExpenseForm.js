import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

//  1st method
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    // 2nd mehtod
    // const [userInput, setUserInput] =  useState({
    //     title: "",
    //     amount: "",
    //     date: "",
    // })


    const titleChangeHandler = (e) =>{
        setTitle(e.target.value);
        // setUserInput({
        //     // spread operator in order to save other data
        //     ...userInput,    
        //     title: e.target.value
        // })
    }
    const amountChangeHandler = (e) =>{
        setAmount(e.target.value);
        // setUserInput({
        //      // spread operator in order to save other data
        //      ...userInput, 
        //     amount: e.target.value
        // })
    }
    const dateChangeHandler = (e) =>{
        setDate(e.target.value);
        
        // setUserInput({
        //      // spread operator in order to save other data
        //      ...userInput, 
        //     date: e.target.value
        // })
    } 

    const submitHandler = (e) => {
        e.preventDefault();

        let data = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),

            // enteredTitle: userInput.user,
            // eneteredAmount: userInput.amount,
            // enteredDate: new Date(userInput.date),
        }
        // console.log(data);
        props.onSaveExpenseData(data);


        setTitle('');
        setAmount('');
        setDate('');
    }

return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label htmlFor='title'>Title</label>
            <input
              type = "text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
        </div>

    </div>

    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Amount</label>
            <input
              type = "number"
              min = "0.01"
              step = "0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
              />
        </div>

    </div>

    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Date</label>
            <input
              type = "date"
              min = "2021-01-01"
              max = "2023-12-21"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
        </div>

    </div>
    <div className="new-expense__actions">
        <button type = "submit">Add Expense</button>
    </div>
</form>
}

export default ExpenseForm;