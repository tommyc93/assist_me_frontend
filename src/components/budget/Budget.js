///////////////---------Imports---------///////////////
import React, {useState, useEffect, useContext} from 'react'
import {BudgetContext} from '../../context/BudgetContext'
import axios from 'axios'

const Budget = (props) => {
    ///////////////---------Hook/States---------///////////////
    const [budgets, setBudgets, getBudget] = useContext(BudgetContext)
    const [sum, setSum] = useState(0)

    ///////////////---------Function---------///////////////
    //====Delete====//
    const handleDelete = (data) => {
        axios
            .delete(`https://assist-me-backend.herokuapp.com/api/budget/${data.id}`)
            .then(() => {
              getBudget();
            })
    }

    //====Total====//
    const addSum = () => {
        let total = 0
        for(let i = 0; i < budgets.length; i++){
            total += budgets[i].cost
        }
        setSum(total)
    }

    useEffect(() => {
        addSum()
    }, [])

    ///////////////---------Return---------///////////////
    return (
        <div class='card flex-even tasks'>
        <h1>Monthly Expenses</h1>
        <h4>Total Spending ${sum}</h4>
            {budgets.map((budget) => {
                return (
                    <div class='card flex-even'>
                        <div class='card-header'>
                            <h4>Name: {budget.name}</h4>
                        </div>
                        <div class='card-body'>
                            <p>Cost: ${budget.cost}</p>
                            <details>
                                <summary>Note</summary>
                                <h5>{budget.note}</h5>
                            </details>
                            <button onClick={() => handleDelete(budget)} class='btn btn-outline-danger'>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Budget
