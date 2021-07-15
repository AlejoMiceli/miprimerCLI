import React from "react";
import ItemListContainer from "./ItemListContainer";

var data = [
    {
      producto: "Coca-Cola",
      precio: 100,    
    }
  ]

export default function Contador (props) {
    const [contador, setContador] = React.useState(0);
    console.log(props)
    function aumentar() {
        if (contador < props.stock) {
        setContador(contador + 1)
    }else{
        alert("No hay stock")
    }}     
    
    function disminuir() {
        if (contador > 0) {
            setContador(contador - 1)
        } 
    }
    
    function agregar(){
        props.onAdd(contador)
    }

    return (

        <div className="card"> 

            <div className="productos">
                {data.map(bienvenida => {
                    return(
                    <ItemListContainer
                        producto = { bienvenida.producto }
                        precio = { bienvenida.precio }
                    />
                    )
                })}
            </div>

            <div className="contador">   

                <button onClick={disminuir}>-</button>     
                <h1>Cantidad: {contador}</h1>
                <button onClick={aumentar}>+</button>

            </div>  
            <div>
                <button onClick={agregar}>Agregar</button>
            </div>
        </div>
    )
}