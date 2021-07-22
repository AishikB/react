import './ExpenseItem.css'
import ExpenseDate  from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';
import ExpenseForm from '../NewExpense/ExpenseForm';

const ExpenseItem = (props) => {
    // useState is a react hook which returns a var and a function
    // var has the value which gets updated
    // the function is used to update the var 
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
        console.log(title)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;