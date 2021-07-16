import React from "react"
import Item from "./Item"

const ItemList = ( data ) => {
    return (
        <>
              {data.prods.map((item) =>
              <Item 
                nombre={item.nombre}
                precio={item.precio}
             />
        )}
        
        </>
    )
}



export default ItemList