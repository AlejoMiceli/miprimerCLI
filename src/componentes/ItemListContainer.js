
import { useEffect, useState } from "react"
import Item from "./Item"

export default function Contenedor (){
    
    const [productos, setProductos] = useState ([])

    const config = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow'

    }
        const fetchData = async () => {
            let call = fetch('http://localhost:4000/Products', config)
                .then(res => res.json())
                .then(resp => setTimeout(() => {
                    setProductos(resp)
                }, 2000))
}

useEffect ( ()=> {
    fetchData()
},[])

return (
    <>
    {productos.map((item) => 
        <Item 
          nombre={item.title}
          precio={item.price}
        />
       )  }
     </>
       
)
}


