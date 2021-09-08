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
//====Login====//
// import CreateUser from './components/users/CreateUser'
// import Login from './components/users/Login'


const App = () => {
    ///////////////---------Hook/States---------///////////////
    let [currentView, setCurrentView] = useState(['showTasks'])
    ///////////////---------Functions---------///////////////

    ///////////////---------Return---------///////////////
    return (
        <>

            <Banner />
            <NavBar
                setCurrentView={setCurrentView}
            />
            <TaskProvider>
                {currentView == 'addTask' &&
                <AddTask
                    setCurrentView={setCurrentView}
                />
                }
                {currentView == 'tasks' &&
                <Task />
                }
            </TaskProvider>
        </>
    )
}
export default App;
