import React from "react"
import Contador from "./Contador"

export default function Item (data){
    function agregarProducto(cantidadSeleccionada) {
        alert("Agregaste " + cantidadSeleccionada + " productos al carrito")
      }
      
    return (
        <>
        <div className="card">
            <div className="contenedor">
            <h1>{data.nombre}</h1>
            
            <h2>$ {data.precio}</h2>
            </div>
            <Contador stock={5} initial={1} y onAdd={agregarProducto} />
        </div>
        </>

    )
}

