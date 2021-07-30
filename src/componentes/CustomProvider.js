import { Children, useState } from "react";
import { Provider } from "./CartContext";

export default function CustomProvider ({children}){
    
    const [productos, setProductos] = useState ([])
    const [cartCount, setCartCount] = useState (0)
      
    return (
        <>
            <Provider value={{productos, cartCount, setCartCount, setProductos }}>
                 {children}
            </Provider>
        </>

    )
}