///////////////---------Imports---------///////////////
import React, {useState, useContext} from 'react'
import {TaskContext} from '../../context/TaskContext'
import axios from 'axios'

const Task = (props) => {
    ///////////////---------Hook/States---------///////////////
    const [tasks, setTasks] = useContext(TaskContext)

    ///////////////---------Return---------///////////////
    return (
        <div class='card flex-even tasks'>
        <h1>Daily Tasks</h1>
            {tasks.map((task) => {
                return (
                    <div class='card flex-even'>
                        <div class='card-header'>
                            <h4>Name: {task.name}</h4>
                        </div>
                        <div class='card-body'>
                            <p>Hours: {task.time}</p>
                            <details>
                                <summary>Note</summary>
                                <h5>{task.note}</h5>
                            </details>
                            <button onClick={props.handleDeleted} value={task.id} class='btn btn-outline-danger'>Done</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Task
