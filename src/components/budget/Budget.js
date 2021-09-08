///////////////---------Imports---------///////////////
import React, {useState, useContext} from 'react'
import {BudgetContext} from '../../context/BudgetContext'
import axios from 'axios'

const Budget = (props) => {
    ///////////////---------Hook/States---------///////////////
    const [budgets, setBudgets] = useContext(BudgetContext)

    ///////////////---------Function---------///////////////

    ///////////////---------Return---------///////////////
    return (
        <div class='card flex-even tasks'>
        <h1>Monthly Expenses</h1>
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
                            <button onClick={props.handleDelete} value={budget.id} class='btn btn-outline-danger'>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Budget
