import React from "react"
import context from "./CartContext"
import { useContext } from "react"

export default function Carrito () {

    const  {productos} = useContext (context)
    console.log(productos)
    return (
        <>     
            <div>
                Productos Agregados: 
            </div>
            <div>
                {productos.map((e) => ( 
                    <img src={e.image}></img>
                    )
                )}
            </div>
            
        </>
    )
}