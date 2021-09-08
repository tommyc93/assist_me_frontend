///////////////---------Imports---------///////////////
import React, {useState, useEffect, useContext} from 'react'
import {ExpenseContext} from '../../context/ExpenseContext'
import axios from 'axios'

const Expense = (props) => {
    ///////////////---------Hook/States---------///////////////
    const [expenses, setExpenses, getExpense] = useContext(ExpenseContext)
    const [sum, setSum] = useState(0)

    ///////////////---------Function---------///////////////
    //====Delete====//
    const handleDelete = (data) => {
        axios
            .delete(`https://assist-me-backend.herokuapp.com/api/expense/${data.id}`)
            .then(() => {
              getExpense();
            })
    }

    //====Total====//
    const addSum = () => {
        let total = 0
        for(let i = 0; i < expenses.length; i++){
            total += expenses[i].cost
        }
        setSum(total)
    }

    useEffect(() => {
        addSum()
    }, [])

    ///////////////---------Return---------///////////////
    return (
        <div class='card flex-even todo'>
        <h1>Daily Expenses</h1>
        <h4>Total Spending ${sum}</h4>
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
                            <button onClick={() => handleDelete(expense)} class='btn btn-outline-danger'>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Expense
