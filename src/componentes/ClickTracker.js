import { cleanup } from "@testing-library/react";
import React from "react"
import { useState, useEffect } from "react"

export default function ClickTracker(){
    
    const [count,setCount] = useState(0);
    const [date,setDate] = useState(new Date); 
    
    useEffect(()=>{
        window.addEventListener("click",getClick)

        return() =>{
            window.removeEventListener("click",getClick)
        }
    })

    const getClick = () => {
        setCount(count + 1);
        setDate(new Date());
    }


    return(
        <div>
            <h1>Total de Click {count}</h1>
            <h2>Tu ultimo click fue : {count == 0 ? "no hay click registrados" : date.toLocaleDateString()}</h2>
        </div>
    )
}