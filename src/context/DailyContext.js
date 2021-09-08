///////////////---------Imports---------///////////////
import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

///////////////---------Exports---------///////////////
export const DailyContext = createContext()
export const DailyProvider = (props) => {

    ///////////////---------Hooks/State---------///////////////
    const [dailys, setDailys] = useState([])

    ///////////////---------Functions---------///////////////
    const getDaily = () => {
        axios
            .get('https://assist-me-backend.herokuapp.com/api/daily')
            .then((response) => {
                setDailys(response.data)
            })
    }

    useEffect(() => {
        axios
            .get('https://assist-me-backend.herokuapp.com/api/daily')
            .then((response) => {
                setDailys(response.data)
            })
    })

    ///////////////---------Return---------///////////////
    return (
        <DailyContext.Provider value={[dailys, setDailys, getDaily]}>
            {props.children}
        </DailyContext.Provider>
    )
}
