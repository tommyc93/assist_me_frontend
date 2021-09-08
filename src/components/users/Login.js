import React, {useState} from 'react'
import axios from 'axios'

const Login = (props) => {

    let [logInUsername, setLogInUsername] = useState('')
    let [logInPassword, setLogInPassword] = useState('')
    let [errorMessage, setErrorMessage] = useState('')

    const validateLogin = (e) => {
        e.preventDefault()
        setErrorMessage(null)

        axios.put(
          'https://assist-me-backend.herokuapp.com/api/users/login',
          {
            username:logInUsername,
            password:logInPassword
          }
        ).then((response) => {
            if (response.data.username != undefined){
                props.setCurrentUser(response.data)
                props.setCurrentView('tasks')
            } else {
                setErrorMessage('Invalid Username/Password')
            }
        })
    }

    const handleChangeUsername = (e) => {
        setLogInUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setLogInPassword(e.target.value)
    }

    return (
        <>
        <form onSubmit={(e)=>validateLogin(e)}>
        <br/><br/>
          <div class='card w-50 mx-auto'>
          <div class='card-header'>
            <h1>Log In</h1>
          </div>
            <label htmlFor='username'>Username: </label>
            <input type='text' id='username' onChange={(e)=>handleChangeUsername(e)} />
            <label htmlFor='password'>Password: </label>
            <input type='password' id='password' onChange={(e)=>handleChangePassword(e)} />
            <br/>
            <p>{errorMessage}</p>
            <br/>
          <div class='card-footer'>
            <input type='submit' value='Log In' class="btn btn-outline-primary" />
          </div>
          </div>
        </form>
        </>
    )
}

export default Login
