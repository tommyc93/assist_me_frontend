///////////////---------Imports---------///////////////
import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

///////////////---------Exports---------///////////////
export const TaskContext = createContext()
export const TaskProvider = (props) => {
    useEffect(() => {
        axios
            .get('https://assist-me-backend.herokuapp.com/api/task')
            .then((response) => {
                setTasks(response.data)
            })
    })

    ///////////////---------Hooks/State---------///////////////
    const [tasks, setTasks] = useState([])

    ///////////////---------Return---------///////////////
    return (
        <TaskContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </TaskContext.Provider>
    )
}
