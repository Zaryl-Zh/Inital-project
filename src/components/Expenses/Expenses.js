import React, {useState} from "react";
import './Expenses.css'
import Card from "../../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
      <ExpensesChart items={filteredByYear}/>
      <ExpensesList expenses={filteredByYear}/>
     
    </Card>
}

export default Expenses;