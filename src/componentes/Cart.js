import React from "react"
import context from "./CartContext"
import { useContext, useState } from "react"
import { getFirestore } from "../firebase"
import firebase from "firebase/app";



export default function Carrito () {


    const  {carrito, setCarrito, setCartCount, cartCount} = useContext (context)
    const [precioTotal,  setPrecioTotal] = useState(0)
    const [confirmacion, setConfirmacion] = useState(false)
    const [mail, setMail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [nombre, setNombre] = useState("")
    const [id, setOrderId] = useState("")
    const [error, setError] = useState("")

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

     const db = getFirestore();

     const orders = db.collection("orders")
        
    const newORder = {
        buyer: {name:nombre, tel:telefono, correo:mail},
        items: {cart:carrito},
        total: precioTotal
    };
    
    

    // orders.add(newORder).then(( resultado ) => {
    //     setOrderId(resultado.id);
    // }).catch(error => {
    //     setError(error);
    // })

    function handleNombreChange(e) {
        setNombre(e.target.value);
     }
     function handleTelefonoChange(e) {
        setTelefono(e.target.value);
     }
     function handleMailChange(e) {
        setMail(e.target.value);
     }

     function confirmacionCompra(){
         alert("Tu orden fue creada: " + nombre + " por un importe de $" + precioTotal)
     }

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
            
            <form action="/my-handling-form-page" method="post">
                <ul>
                    <li>
                        <label for="name">Nombre</label>
                        <input type="text" id="name" name="user_name" value={nombre} onChange={handleNombreChange}/>
                    </li>
                    <li>
                        <label for="mail" >Teléfono</label>
                        <input value={telefono} onChange={handleTelefonoChange}/>
                    </li>
                    <li>
                        <label for="mail" >Mail</label>
                        <input type="email" id="mail" name="user_email" value={mail} onChange={handleMailChange} />
                    </li>
                </ul>
                <button disabled={!  (nombre !== "" && mail !== "" && telefono !== "")} onClick={confirmacionCompra}>Confirmar compra</button>
            </form>

        </>
    )
}