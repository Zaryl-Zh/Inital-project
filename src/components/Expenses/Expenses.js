import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
function Expenses (props){
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (selectedYear) => {
       console.log(selectedYear);
       setFilteredYear(selectedYear);
    }

    const filteredByYear = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    })


    return <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {
        filteredByYear.map((el) => {
          return <ExpenseItem 
          title = {el.title}
          amount = {el.amount}
          date = {el.date}
          key = {el.id}
          />

        })
      }
      
    </Card>
}

export default Expenses;