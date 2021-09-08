///////////////---------Imports---------///////////////
import React, {useState, useEffect, useContext} from 'react'
import {TaskContext} from '../../context/TaskContext'
import axios from 'axios'
import EditTask from './EditTask'

const Task = (props) => {
    ///////////////---------Hook/States---------///////////////
    const [tasks, setTasks, getTask] = useContext(TaskContext)
    const [sum, setSum] = useState(0)

    ///////////////---------Function---------///////////////
    //====Delete====//
    const handleDelete = (data) => {
        axios
            .delete(`https://assist-me-backend.herokuapp.com/api/task/${data.id}`)
            .then(() => {
              getTask();
            })
    }

    //====Total====//
    const addSum = () => {
        let total = 0
        for(let i = 0; i < tasks.length; i++){
            total += tasks[i].time
        }
        setSum(total)
    }

    useEffect(() => {
        addSum()
    }, [])

    ///////////////---------Return---------///////////////
    return (
        <div class='card flex-even tasks'>
        <h1>Daily Tasks</h1>
        <h4>Total Hours: {sum}</h4>
            {tasks.map((task) => {
                return (
                    <div class='card flex-even'>
                        <div class='card-header'>
                            <h4>Task: {task.name}</h4>
                        </div>
                        <div class='card-body'>
                            <p>Hours: {task.time}</p>
                            <details>
                                <summary>Note</summary>
                                <h5>{task.note}</h5>
                            </details>
                            <details>
                                <summary>Edit</summary>
                                <EditTask />
                            </details>
                            <button onClick={() => handleDelete(task)} class='btn btn-outline-danger'>Done</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Task
