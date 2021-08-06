import React from "react"
import context from "./CartContext"
import { useContext, useState } from "react"

export default function Carrito () {


    const  {carrito, setCarrito, setCartCount, cartCount} = useContext (context)
    const [precioTotal,  setPrecioTotal] = useState(0)
    function vaciarCarrito (){
        setCarrito([])
        setCartCount(0)
    }

    function removerProducto(id){
        let filtro = carrito.filter((x) => x.item.id != id)
        setCarrito(filtro)
        let productoFiltrado = carrito.filter((x)=> x.item.id == id)
        setCartCount(cartCount - productoFiltrado[0].cantidad)
    }

    function precioFinal(){
        let total = 0
        carrito.map ((pf)=>{
        total = total + pf.item.price*pf.cantidad
         }
        
        )
        setPrecioTotal(total)
    }

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
                      <h1>${e.item.price}</h1> ={e.cantidad*e.item.price}
                      <button onClick={() => removerProducto (e.item.id)}>Quitar producto</button>                  
                     </div>
                     
                    )
                )}
            </div>
            <button onClick={precioFinal}>Calcular Total</button>
            <h1>{precioTotal}</h1>
            
        </>
    )
}