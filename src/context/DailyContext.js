///////////////---------Imports---------///////////////
import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'

///////////////---------Exports---------///////////////
export const DailyContext = createContext()
export const DailyProvider = (props) => {
    useEffect(() => {
        axios
            .get('https://assist-me-backend.herokuapp.com/api/daily')
            .then((response) => {
                setDailys(response.data)
            })
    })

    ///////////////---------Hooks/State---------///////////////
    const [dailys, setDailys] = useState([])

    ///////////////---------Return---------///////////////
    return (
        <DailyContext.Provider value={[dailys, setDailys]}>
            {props.children}
        </DailyContext.Provider>
    )
}
