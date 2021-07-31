import React from "react"
import context from "./CartContext"
import { useContext } from "react"

export default function Carrito () {


    const  {carrito} = useContext (context)
    console.log(carrito)
    return (
        <>     
            <div>
                Productos Agregados: 
            </div>
            <div>
                {carrito.map((e) =>  ( 
                  <div> 
                      <h1>{e.item.title}</h1> 
                      <h1>{e.cantidad}</h1>                   
                     </div>
                     
                    )
                )}
            </div>
            
        </>
    )
}