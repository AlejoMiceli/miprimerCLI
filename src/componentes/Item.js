import React from "react"
import Contador from "./Contador"
import { Link } from "react-router-dom"

export default function Item (data){
    function agregarProducto(cantidadSeleccionada) {
        alert("Agregaste " + cantidadSeleccionada + " productos al carrito")
      }
      
    return (
        <>
        <div className="card">
            <Link to={`/Detalle/${data.id}`}><div className="contenedor">
            <h1>{data.nombre}</h1>
            <img className="imagenes" src={data.image}></img>      
            <h2>$ {data.precio}</h2>
            </div></Link>
            
        </div>
        </>

    )
}

