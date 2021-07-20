import { useEffect, useState } from "react"

export default function ItemDetail (props){
    

return (
    <>
    <div className="itemDetail">
        <div>
            <h1>{props.producto.title}</h1> 
            <h1>${props.producto.price}</h1>
            <img src={props.producto.image}></img>
        </div>
    </div>
    </>
       ) 
     
       

}
