import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [milliSeconde, setMilliSeconde] = useState(0)
    const [heures, setHeure] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [secondes, setSecondes] = useState(0)
    const [stopped, setStopped] = useState(true)
    const [changeStartButton, setChangeStartButton] = useState(true)

    const handleClick = () => {
        setStopped(currentValue => !currentValue)
        setChangeStartButton(currentValue => !currentValue)
    }

    const handleReset = () => {
        setHeure(0)
        setMinutes(0)
        setSecondes(0)
        setMilliSeconde(0)

        if(stopped === false) {
            setStopped(true)
            setChangeStartButton(currentValue => !currentValue)
        }
    }
    
    

    useEffect( () => {
        const setTime = setTimeout(() => {
            if (!stopped) {
                console.log(secondes)
                if(milliSeconde >= 1000 ){
                    setMilliSeconde(0)
                    setSecondes(currentValue => currentValue +1)
                }
                else{
                    setMilliSeconde(currentValue => currentValue +1)
                }
                if(secondes >= 59){
                    setSecondes(0)
                    setMinutes(currentValue => currentValue + 1)
        
                }
                
        
                if(minutes >= 60){
                    setMinutes(0)
                    setHeure(currentValue => currentValue + 1)
                }
                
                if(heures >= 24){
                    setHeure(0)
                }
            }
    
    
    
        }, 1)
    return () => {
        clearTimeout(setTime)
    }}, [milliSeconde, stopped]
    )
    return (
        <p>
        {heures} : {minutes} : {secondes} : {milliSeconde}
        <span><button onClick={handleClick}>{changeStartButton ? "Start" : "Stop"}</button></span>
        <span><button onClick={handleReset}>Reset</button></span>
        </p>
    )
}

export default Timer
