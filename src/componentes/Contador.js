import React from "react";
import ItemListContainer from "./ItemListContainer";

var data = [
    {
      producto: "Coca-Cola",
      precio: 100,
      
    }
  ]

export default function Contador () {
    const [contador, setContador] = React.useState(0);

    const aumentar = () => setContador(contador + 1)
    const disminuir = () => setContador(contador - 1)
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

        </div>
    )
}