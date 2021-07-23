import { Grid, Card, TextField, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import styles from './EnterDetails.module.css';
import { useState } from "react";
import ShowError from "../modal/ShowError";

const EnterDetails = (props) => {

    const [messages, setMessage] = useState({
        header: '',
        messages: '',
        open: false
    });

    const [formData, setFormData] = useState({
        name: '',
        department: '',
        salary: 0
    });

    const onNameChangeHandler = (event) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                name: event.target.value
            }
        })
    }

    const onDeptChangeHandler = (event) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                department: event.target.value
            }
        })
    }

    const onSalaryChangeHandler = (event) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                salary: event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(formData.name && formData.department && formData.salary) {
            props.onSubmit(event, formData);
        } else {
            setMessage((prevState) => {
                return {
                    header: 'Error',
                    messages: 'Please enter all details',
                    open: true
                }
            })
        }

        setFormData({
            name: '',
            department: '',
            salary: 0
        })
    }

return (
<Card elevation={4}>
    <h1 className={styles['h1-style']}>Enter Details</h1>
    <form onSubmit={submitHandler} className={styles['form-control']} noValidate autoComplete="off">
        <Grid className={styles['grid-space']}>
            <TextField className={styles['form-input-style']} value={formData.name} id="outlined-basic" onChange={onNameChangeHandler} label="Name" variant="outlined" />
        </Grid>
        <Grid className={styles['grid-space']}>
            <TextField className={styles['form-input-style']} value={formData.department} id="outlined-basic" onChange = {onDeptChangeHandler} label="Department" variant="outlined" />
        </Grid> 
        <Grid className={styles['grid-space']}>
            <TextField className={styles['form-input-style']} value={formData.salary} id="outlined-basic" onChange = {onSalaryChangeHandler} label="Salary" variant="outlined" />
        </Grid>
        <Grid className={styles['grid-space']}>
            <Button type="submit" className={styles['form-input-style']} variant="contained" color="primary">
                Add
            </Button>
        </Grid>
    </form>
    <ShowError errorHeader = {messages.header} errorMessage={messages.messages} open={messages.open}></ShowError>
</Card>
)
}

export default EnterDetails;