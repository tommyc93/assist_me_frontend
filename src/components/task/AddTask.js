///////////////---------Imports---------///////////////
import React, {useState, useContext} from 'react'
import {TaskContext} from '../../context/TaskContext'
import axios from 'axios'

const AddTask = (props) => {
    ///////////////---------Hook/States---------///////////////
    const [task, setTask] = useState({name:'', time:'', note:''})
    const [tasks, setTasks] = useContext(TaskContext)
    ///////////////---------Functions---------///////////////
    const handleChange = (event) => {
        setTask({...task, [event.target.name]: event.target.value})
    }

    const plusTask = (event) => {
        event.preventDefault()
        setTasks([...tasks, task])
    }
    ///////////////---------Return---------///////////////
    return (
        <div class='mb-3 w-50 mx-auto'>
            <form onSubmit={plusTask}>
                <label htmlFor='name' class='form-label'>Name: </label>
                <input type='text' name='name' class='form-control'onChange={handleChange}/>
                <label htmlFor='time' class='form-label'>Hours: </label>
                <input type='number' name='time' class='form-control' onchange={handleChange}/>
                <label htmlFor='note' class='form-label'>Note: </label>
                <textarea type='text' name='note' class='form-control'onChange={handleChange}/>
                <input type='submit' class='btn btn-outline-dark' />
            </form>
        </div>
    )
}

export default AddTask