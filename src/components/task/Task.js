///////////////---------Imports---------///////////////
import React, {useState, useContext} from 'react'
import {TaskContext} from '../../context/TaskContext'
import axios from 'axios'

const Task = () => {
    ///////////////---------Hook/States---------///////////////
    const [tasks, setTasks] = useContext(TaskContext)

    ///////////////---------Return---------///////////////
    return (
        <div class='card flex-even'>
            {tasks.map((task) => {
                return (
                    <div class='card flex-even'>
                        <div class='card-header'>
                            <h4>Name: {task.name}</h4>
                        </div>
                        <div class='card-body'>
                            <p>Hours: {task.time}</p>
                        </div>
                        <div class='card-footer'>
                            <details>
                                <summary>Note</summary>
                                <p>{task.note}</p>
                            </details>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Task
