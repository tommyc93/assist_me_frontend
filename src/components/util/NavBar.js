///////////////---------Imports---------///////////////
import React, {useState, useEffect} from 'react'

const NavBar = (props) => {
    ///////////////---------Functions---------///////////////
    const logOut = () => {
      props.setCurrentUser(undefined)
      props.setCurrentView('tasks')
 }

    ///////////////---------Return---------///////////////
    return (
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <ul class="navbar-nav nav-fill w-100">
                <li class='nav-item'>
                    <button class="btn btn-nav mx-auto" onClick={()=> {props.setCurrentView('addTask')}}>Add Task</button>
                    <button class="btn btn-nav mx-auto" onClick={()=> {props.setCurrentView('tasks')}}>Tasks</button>
                </li>
                <li class="nav-item">
                 {props.currentUser ?
                    <>
                        <button className="btn btn-nav" onClick={()=> logOut()}>Log Out</button>
                    </>:
                    <>
                        <button className="btn btn-nav" onClick={()=>props.setCurrentView('logIn')}>Log In</button>
                        <button className="btn btn-nav" onClick={()=>props.setCurrentView('signUp')}>Sign Up</button>
                    </>
                 }
            </li>
            </ul>
        </nav>
    )
}

export default NavBar
