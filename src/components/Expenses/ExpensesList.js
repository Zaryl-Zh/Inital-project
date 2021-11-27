import React from "react";
import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
   if (props.expenses.length === 0) {
     return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
 } 
    return <ul className='expenses-list'>
          {
              props.expenses.map((el) => {
                return <ExpenseItem 
                title = {el.title}
                amount = {el.amount}
                date = {el.date}
                key = {el.id}
                />
          
              })
          }
    </ul>
}

export default ExpensesList;