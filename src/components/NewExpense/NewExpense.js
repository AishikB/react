import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {
    const onFormSubmitHandler = (expenseData) => {
        //console.log(expenseData);
        expenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onFormSubmit={onFormSubmitHandler}/>
        </div>
    )
}

export default NewExpense;