import React from "react";
import Item from "./Item"
import { useState } from "react";
import { useContext } from "react";
import context from "./CartContext";


export default function Contador (props) {

    const[sumar, setSumar] = useState(0)

    const {carrito, setCarrito, setCartCount, cartCount} = useContext(context)
    

    function aumentar() {
        if (sumar < props.stock) {
        setSumar(sumar + 1)
    }else{
        alert("No hay stock")
    }}     
    
    function disminuir() {
        if (sumar > 1) {
            setSumar(sumar - 1)
        } 
    }
    
    function agregar(){
        props.setContador(sumar)
        props.onAdd(sumar)
        setCartCount(cartCount + sumar)
        
        let existe = carrito.find ((x) => x.item.id === props.producto.id) 
        
            if (existe) {
            let arrayContent = carrito.map((itemCart) => {
                return  itemCart.item.id == props.producto.id ? { item: itemCart.item, cantidad: itemCart.cantidad + sumar } : itemCart
              }
              ) 
              setCarrito(arrayContent)      
               }else{
                    let objeto = {item: props.producto, cantidad: sumar}
                    let array = carrito
                    array.push(objeto)       
                    setCarrito(array)
                    console.log(array)
                     
                }  
        
    }
                
    


    return (
        <div>

            <div className="contador">   

                <button onClick={disminuir}>-</button>     
                <h1>Cantidad: {sumar}</h1>
                <button onClick={aumentar}>+</button>

            </div>  
            <div>
                <button onClick={agregar}>Agregar</button>
            </div>
        </div>
    )
}