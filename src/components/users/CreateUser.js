///////////////---------Imports---------///////////////
import React, {useState} from 'react'
import axios from 'axios'

const CreateUser = (props) => {
    ///////////////---------Hooks/States---------///////////////
    let [errorMessage, setErrorMessage] = useState('')
    let [newPassword, setNewPassword] = useState('')
    let [newUsername, setNewUsername] = useState('')
    let [newUse, setNewUse] = useState('')

    ///////////////---------Function---------///////////////

    const changeHandlers = {
        usernameChange: (e) => {
            setNewUsername(e.target.value)
        },
        passwordChange: (e) => {
            setNewPassword(e.target.value)
        },
    }

    const handleNewUserCreation = (event) => {
        event.preventDefault()
        setErrorMessage(null)
        console.log(newUsername)
        console.log(newPassword)
        let pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (newPassword.match(pass)){
            axios.post(
              'https://assist-me-backend.herokuapp.com/api/users',
              {
                username:newUsername,
                password:newPassword,
              }
            ).then((response) => {
                props.getUsers()
                props.setCurrentUser(response.data)
            })
            props.setCurrentView('tasks')
        } else {
            setErrorMessage('Please Choose A Stronger Password')
        }
    }

    return (
        <div class='mb-3 w-50 mx-auto'>
            <div class='card'>
                <form onSubmit={handleNewUserCreation}>
                  <div class='card-header'>
                    <h3>Sign Up</h3>
                  </div>
                    <br/>
                    <label htmlFor='username' class="form-label">Username: </label>
                    <input type='text' onChange={changeHandlers.usernameChange} class="form-control" />
                    <label htmlFor='password' class="form-label">Password: </label>
                    <input type='password' onChange={changeHandlers.passwordChange} class="form-control" />
                    <br/>
                    <p>Password must be 7 to 15 characters which contain at least one numeric digit and a special character</p>
                    <br/>
                    <p>{errorMessage}</p>
                    <br/>
                  <div class='card-footer'>
                    <input type="submit" value="Sign Up" class="btn btn-outline-primary"/>
                  </div>
                    </form>
            </div>
        </div>
    )
}

export default CreateUser
