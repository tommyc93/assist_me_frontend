///////////////---------Imports---------///////////////
import React, {useState, useContext} from 'react'
import {DailyContext} from '../../context/DailyContext'
import axios from 'axios'

const AddDaily = (props) => {
    ///////////////---------Hook/States---------///////////////
    const [task, setTask] = useState({name: '', time: '', note: '', due: ''})
    const [tasks, setTasks, getDaily] = useContext(DailyContext)
    ///////////////---------Functions---------///////////////
    const handleChange = (event) => {
        setTask({...task, [event.target.name]: event.target.value})
    }

    const plusTask = (event) => {
        event.preventDefault()
        setTasks([...tasks, task])
        props.setCurrentView('tasks')
        axios
            .post('https://assist-me-backend.herokuapp.com/api/daily', task)
            .then((response) => {
                getDaily()
            })
    }
    ///////////////---------Return---------///////////////
    return (
        <div class='mb-3 w-50 mx-auto'>
            <h2>Add To-Do's</h2>
            <form onSubmit={plusTask}>
                <label htmlFor='name' class='form-label'>Name: </label>
                <input type='text' name='name' class='form-control'onChange={handleChange}/>
                <label htmlFor='time' class='form-label'>Hours: </label>
                <input type='number' name='time' class='form-control' onChange={handleChange}/>
                <label htmlFor='note' class='form-label'>Note: </label>
                <textarea type='text' name='note' class='form-control'onChange={handleChange}/>
                <label htmlFor='due' class='form-label'>Date: </label>
                <input type='date' name='due' class='form-control' onChange={handleChange}/>
                <input type='submit' class='btn btn-outline-dark' />
            </form>
        </div>
    )
}

export default AddDaily
