import React from "react"
import Contador from "./Contador"

export default function Item (data){

    return (
        <>
        <div className="card">
            <div className="contenedor">
            <h1>{data.nombre}</h1>
            
            <h2>$ {data.precio}</h2>
            </div>
            <Contador/>
        </div>
        </>

    )
}

