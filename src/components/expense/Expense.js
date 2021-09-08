///////////////---------Imports---------///////////////
import React, {useState, useContext} from 'react'
import {ExpenseContext} from '../../context/ExpenseContext'
import axios from 'axios'

const Expense = (props) => {
    ///////////////---------Hook/States---------///////////////
    const [expenses, setExpenses] = useContext(ExpenseContext)

    ///////////////---------Function---------///////////////

    ///////////////---------Return---------///////////////
    return (
        <div class='card flex-even todo'>
        <h1>Daily Expenses</h1>
            {expenses.map((expense) => {
                return (
                    <div class='card flex-even'>
                        <div class='card-header'>
                            <h4>Name: {expense.name}</h4>
                        </div>
                        <div class='card-body'>
                            <p>Cost: ${expense.cost}</p>
                            <details>
                                <summary>Note</summary>
                                <h5>{expense.note}</h5>
                            </details>
                            <button onClick={props.handleDelete} value={expense.id} class='btn btn-outline-danger'>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Expense