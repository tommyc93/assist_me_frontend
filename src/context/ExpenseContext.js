///////////////---------Imports---------///////////////
import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

///////////////---------Exports---------///////////////
export const ExpenseContext = createContext()
export const ExpenseProvider = (props) => {

    ///////////////---------Hooks/State---------///////////////
    const [expenses, setExpenses] = useState([])

    ///////////////---------Functions---------///////////////
    const getExpense = () => {
        axios
            .get('https://assist-me-backend.herokuapp.com/api/expense')
            .then((response) => {
                setExpenses(response.data)
            })
    }

    useEffect(() => {
        axios
            .get('https://assist-me-backend.herokuapp.com/api/expense')
            .then((response) => {
                setExpenses(response.data)
            })
    })

    ///////////////---------Return---------///////////////
    return (
        <ExpenseContext.Provider value={[expenses, setExpenses, getExpense]}>
            {props.children}
        </ExpenseContext.Provider>
    )
}
