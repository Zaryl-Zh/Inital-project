import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
   id: 'e1',
   title: 'Toilet Paper',
   amount: 94.12,
   date: new Date(2023, 7, 14),

},
{
   id: 'e2',
   title: 'New TV',
   amount: 799.49,
   date: new Date(2021, 2, 12),
},
{
  id: 'e3',
  title: 'Car',
  amount: 999.49,
  date: new Date(2023, 5, 22),
},
{
  id: 'e4',
  title: 'Laptop',
  amount: 799.49,
  date: new Date(2024, 9, 19),
}
]


function App() {
 const [expenseData, setExpenseData] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setExpenseData([
      expense,
      ...expenseData
      

    ])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses = {expenseData} />
    </div>
  
  )
}
export default App;
