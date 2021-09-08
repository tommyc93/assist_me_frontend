///////////////---------Imports---------///////////////
import React, {useState, useContext} from 'react'
import {DailyContext} from '../../context/DailyContext'
import axios from 'axios'

const Daily = (props) => {
    ///////////////---------Hook/States---------///////////////
    const [tasks, setTasks] = useContext(DailyContext)

    ///////////////---------Function---------///////////////

    ///////////////---------Return---------///////////////
    return (
        <div class='card flex-even todo'>
        <h1>To Do's</h1>
            {tasks.map((daily) => {
                return (
                    <div class='card flex-even'>
                        <div class='card-header'>
                            <h4>Name: {daily.name}</h4>
                        </div>
                        <div class='card-body'>
                            <p>Hours: {daily.time}</p>
                            <p>Due: {daily.due}</p>
                            <details>
                                <summary>Note</summary>
                                <h5>{daily.note}</h5>
                            </details>
                            <button onClick={props.handleDelete} value={daily.id} class='btn btn-outline-danger'>Done</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Daily
