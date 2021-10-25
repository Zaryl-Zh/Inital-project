import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem (props) {
    let expenseDate = props.date;
    let expenseTitle = props.title;
    let expenseAmount = props.amount;
 console.log(props);
 
    return (
        <div className='expense-item'>
         <ExpenseDate date={expenseDate}/>
           <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
           <div className='expense-item__price '>${expenseAmount}</div>
          </div>
        </div>
    )
} 

export default ExpenseItem;

