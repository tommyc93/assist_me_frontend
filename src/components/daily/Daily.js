///////////////---------Imports---------///////////////
import React, {useState, useEffect, useContext} from 'react'
import {DailyContext} from '../../context/DailyContext'
import axios from 'axios'

const Daily = (props) => {
    ///////////////---------Hook/States---------///////////////
    const [tasks, setTasks] = useContext(DailyContext)
    const [sum, setSum] = useState(0)

    ///////////////---------Function---------///////////////
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
        <div class='card flex-even todo'>
        <h1>To Do's</h1>
        <h4>Total Hours: {sum}</h4>
            {tasks.map((daily) => {
                return (
                    <div class='card flex-even'>
                        <div class='card-header'>
                            <h4>Task: {daily.name}</h4>
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
