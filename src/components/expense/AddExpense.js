///////////////---------Imports---------///////////////
import React, {useState, useContext} from 'react'
import {ExpenseContext} from '../../context/ExpenseContext'
import axios from 'axios'

const AddExpense = (props) => {
    ///////////////---------Hook/States---------///////////////
    const [expense, setExpense] = useState({name: '', time: '', note: '', due: ''})
    const [expenses, setExpenses, getExpense] = useContext(ExpenseContext)
    ///////////////---------Functions---------///////////////
    const handleChange = (event) => {
        setExpense({...expense, [event.target.name]: event.target.value})
    }

    const plusExpense = (event) => {
        event.preventDefault()
        setExpenses([...expenses, expense])
        props.setCurrentView('budgets')
        axios
            .post('https://assist-me-backend.herokuapp.com/api/expense', expense)
            .then((response) => {
                getExpense()
            })
    }
    ///////////////---------Return---------///////////////
    return (
        <div class='mb-3 w-50 mx-auto'>
            <h2>Add Daily Expense</h2>
            <form onSubmit={plusExpense}>
                <label htmlFor='name' class='form-label'>Name: </label>
                <input type='text' name='name' class='form-control'onChange={handleChange}/>
                <label htmlFor='cost' class='form-label'>Cost: </label>
                <input type='number' name='cost' class='form-control' onChange={handleChange}/>
                <label htmlFor='note' class='form-label'>Note: </label>
                <textarea type='text' name='note' class='form-control'onChange={handleChange}/>
                <input type='submit' class='btn btn-outline-dark' />
            </form>
        </div>
    )
}

export default AddExpense
