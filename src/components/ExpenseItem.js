import './ExpenseItem.css'
import ExpenseDate  from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurace';
    const expenseAmt = 292.23;
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;