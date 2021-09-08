///////////////---------Imports---------///////////////
import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

///////////////---------Exports---------///////////////
export const TaskContext = createContext()
export const TaskProvider = (props) => {

    ///////////////---------Hooks/State---------///////////////
    const [tasks, setTasks] = useState([])

    ///////////////---------Functions---------///////////////
    const getTask = () => {
        axios
            .get('https://assist-me-backend.herokuapp.com/api/task')
            .then((response) => {
                response.data
            })
    }

    useEffect(() => {
        axios
            .get('https://assist-me-backend.herokuapp.com/api/task')
            .then((response) => {
                setTasks(response.data)
            })
    })

    ///////////////---------Return---------///////////////
    return (
        <TaskContext.Provider value={[tasks, setTasksm, getTask]}>
            {props.children}
        </TaskContext.Provider>
    )
}
