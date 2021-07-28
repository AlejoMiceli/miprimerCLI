import { useEffect, useState } from "react"
import Contador from "./Contador"
import { Link } from "react-router-dom";

export default function ItemDetail (props){

    const [contador, setContador] = useState(0);

    function terminarCompra(cantidadSeleccionada) {
        if (cantidadSeleccionada == 0) {
            return <Contador setContador={setContador} contador={contador} stock={5} initial={1} onAdd={terminarCompra}/>
        }else if (cantidadSeleccionada > 0){
          return <Link to='/cart'><button>Terminar compra</button></Link> 
            
            } else {return null}
            
      } 
      

    return (
    <>
    <div className="itemDetail">
        <div>
            <h1>{props.producto.title}</h1> 
            <h1>${props.producto.price}</h1>
            <img className="imagenes" src={props.producto.image}></img>
            <div>{terminarCompra(contador)}</div>  
        </div>     
    </div>
    </>
       ) 
     

}
