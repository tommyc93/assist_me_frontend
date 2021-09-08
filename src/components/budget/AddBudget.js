///////////////---------Imports---------///////////////
import React, {useState, useContext} from 'react'
import {BudgetContext} from '../../context/BudgetContext'
import axios from 'axios'

const AddBudget = (props) => {
    ///////////////---------Hook/States---------///////////////
    const [budget, setBudget] = useState({name: '', time: '', note: '', due: ''})
    const [budgets, setBudgets, getBudget] = useContext(BudgetContext)
    ///////////////---------Functions---------///////////////
    const handleChange = (event) => {
        setBudget({...budget, [event.target.name]: event.target.value})
    }

    const plusBudget = (event) => {
        event.preventDefault()
        setBudgets([...budgets, budget])
        props.setCurrentView('tasks')
        axios
            .post('https://assist-me-backend.herokuapp.com/api/budget', event)
            .then((response) => {
                getBudget()
            })
    }
    ///////////////---------Return---------///////////////
    return (
        <div class='mb-3 w-50 mx-auto'>
            <h2>Add Monthly Expense</h2>
            <form onSubmit={plusBudget}>
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

export default AddBudget
