///////////////---------Imports---------///////////////
import React, {useState, useContext} from 'react'
import {TaskContext} from '../../context/TaskContext'
import axios from 'axios'

const EditTask = (props) => {
    ///////////////---------Hook/States---------///////////////
    const [task, setTask] = useState({name: '', time: '', note: ''})
    const [tasks, setTasks, getTask] = useContext(TaskContext)

    ///////////////---------Functions---------///////////////
    const handleChange = (event) => {
        setTask({...task, [event.target.name]: event.target.value})
    }

    const changeTask = (event) => {
        event.preventDefault()
        setTasks([...tasks, task])
        props.setCurrentView('tasks')
        axios
            .put('https://assist-me-backend.herokuapp.com/api/task', task)
            .then((response) => {
                getTask()
            })
    }
    ///////////////---------Return---------///////////////
    return (
        <>
        <h2>Add Daily Tasks</h2>
        <form>
            <label htmlFor='name' class='form-label'>Name: </label>
            <input type='text' name='name' class='form-control'onChange={handleChange}/>
            <label htmlFor='time' class='form-label'>Hours: </label>
            <input type='number' name='time' class='form-control' onChange={handleChange}/>
            <label htmlFor='note' class='form-label'>Note: </label>
            <textarea type='text' name='note' class='form-control'onChange={handleChange}/>
            <input type='submit' class='btn btn-outline-dark' />
        </form>
        </>
    )
}

export default EditTask
