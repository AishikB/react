import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
const Expenses = (props) => {
    let expensesContent = <p>No data present</p>
    if(props.expenses.length > 0) {
        expensesContent = props.expenses.map(exp => <ExpenseItem key={exp.id} title={exp.title} amount={exp.amount} date={exp.date}></ExpenseItem>);
    }
    return (
        <Card>
            {expensesContent}
        </Card>
    )
}

export default Expenses;