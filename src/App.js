///////////////---------Imports---------///////////////
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/util/NavBar'
import Banner from './components/util/Banner'
//====Task====//
import Task from './components/task/Task'
import AddTask from './components/task/AddTask'
import {TaskProvider} from './context/TaskContext'
//====Daily====//
import Daily from './components/daily/Daily'
import AddDaily from './components/daily/AddDaily'
import {DailyProvider} from './context/DailyContext'
//====Budget====//
import Budget from './components/budget/Budget'
import AddBudget from './components/budget/AddBudget'
import {BudgetProvider} from './context/BudgetContext'
//====Expense====//
import Expense from './components/expense/Expense'
import AddExpense from './components/expense/AddExpense'
import {ExpenseProvider} from './context/ExpenseContext'
//====Login====//
import CreateUser from './components/users/CreateUser'
import Login from './components/users/Login'


const App = () => {
    ///////////////---------Hook/States---------///////////////
    let [currentView, setCurrentView] = useState(['showTasks'])
    let [currentUser, setCurrentUser] = useState(undefined)
    let [users, setUsers] = useState([])
    let [dailys, setDailys] = useState([])
    let [tasks, setTasks] = useState([])
    const income = 80000
    ///////////////---------Functions---------///////////////

    //====Create====//
    const handleCreate = (addDaily) => {
        axios
            .post('https://assist-me-backend.herokuapp.com/api/daily', addDaily)
            .then((response) => {
                console.log(response)
                getDaily()
            })
    }
    //====Delete====//
    const handleDelete = (event) => {
        axios
            .delete('https://assist-me-backend.herokuapp.com/api/daily' + event.target.value)
            .then(() => {
                getDaily()
            })
    }
    const handleDeleted = (event) => {
        axios
            .delete('https://assist-me-backend.herokuapp.com/api/task' + event.target.value)
            .then(() => {
                getTask()
            })
    }
    //====Show====//
    const getDaily = () => {
        axios
            .get('https://assist-me-backend.herokuapp.com/api/daily')
            .then((response) => {
                setDailys(response.data)
            })
    }
    const getTask = () => {
        axios
            .get('https://assist-me-backend.herokuapp.com/api/task')
            .then((response) => {
                setTasks(response.data)
            })
    }
    //====Login====//
    const getUsers = () => {
        axios
            .get('https://assist-me-backend.herokuapp.com/api/users')
            .then((response) => {
                setUsers(response.data)
            })
    }

    useEffect(() => {
        getDaily()
        getTask()
        getUsers()
    }, [])
    ///////////////---------Return---------///////////////
    return (
        <>
            <Banner />
            <NavBar
                setCurrentView={setCurrentView}
                getUsers={getUsers}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
            />
            <div class='container'>
            <div class='mx-auto text-center'>
                <div class='row'>
                    {currentView == 'signUp' &&
                        <CreateUser
                            setCurrentUser={setCurrentUser}
                            setCurrentView={setCurrentView}
                            getUsers={getUsers}
                        />
                    }
                    {currentView == 'logIn' &&
                        <Login
                            setCurrentUser={setCurrentUser}
                            setCurrentView={setCurrentView}
                            users={users}
                        />
                    }
                    <TaskProvider>
                        {currentView == 'addTask' &&
                        <AddTask
                            setCurrentView={setCurrentView}
                        />
                        }
                        {currentView == 'tasks' &&
                        <Task
                            handleDeleted={handleDeleted}
                        />
                        }
                    </TaskProvider>
                    <DailyProvider>
                        {currentView == 'addDaily' &&
                        <AddDaily
                            setCurrentView={setCurrentView}
                        />
                        }
                        {currentView == 'tasks' &&
                        <Daily
                            handleDelete={handleDelete}
                        />
                        }
                    </DailyProvider>
                    <BudgetProvider>
                        {currentView == 'addBudget' &&
                        <AddBudget
                            setCurrentView={setCurrentView}
                        />
                        }
                        {currentView == 'budgets' &&
                        <Budget
                            handleDeleted={handleDeleted}
                        />
                        }
                    </BudgetProvider>
                    <ExpenseProvider>
                        {currentView == 'addExpense' &&
                        <AddExpense
                            setCurrentView={setCurrentView}
                        />
                        }
                        {currentView == 'budgets' &&
                        <Expense
                            handleDelete={handleDelete}
                        />
                        }
                    </ExpenseProvider>
                </div>
            </div>
            </div>
        </>
    )
}
export default App;
