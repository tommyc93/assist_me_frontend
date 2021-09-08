///////////////---------Imports---------///////////////
import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

///////////////---------Exports---------///////////////
export const BudgetContext = createContext()
export const BudgetProvider = (props) => {

    ///////////////---------Hooks/State---------///////////////
    const [budgets, setBudgets] = useState([])

    ///////////////---------Functions---------///////////////
    const getBudget = () => {
        axios
            .get('https://assist-me-backend.herokuapp.com/api/budget')
            .then((response) => {
                setBudgets(response.data)
            })
    }

    useEffect(() => {
        axios
            .get('https://assist-me-backend.herokuapp.com/api/budget')
            .then((response) => {
                setBudgets(response.data)
            })
    })

    ///////////////---------Return---------///////////////
    return (
        <BudgetContext.Provider value={[budgets, setBudgets, getBudget]}>
            {props.children}
        </BudgetContext.Provider>
    )
}
