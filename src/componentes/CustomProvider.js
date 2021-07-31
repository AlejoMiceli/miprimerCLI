import { Children, useState } from "react";
import { Provider } from "./CartContext";

export default function CustomProvider ({children}){
    
    const [carrito, setCarrito] = useState ([])
    const [cartCount, setCartCount] = useState (0)
   
    

    return (
        <>
            <Provider value={{carrito, cartCount, setCartCount, setCarrito }}>
                 {children}
            </Provider>
        </>

    )
}