import Item from "./Item"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

export default function ItemDeatilContainer (){
    
    const [item, setItem] = useState ([])

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
            console.log("hola")
            let call = fetch('http://localhost:4000/product/1', config)
                .then(res => res.json())
                .then(resp => setTimeout(() => {
                    console.log(resp)
                    setItem(resp)
                }, 2000))
}

useEffect ( ()=> {
    fetchData()
},[]) 

return (
    <>
        {item.map ((e) =>(
            <ItemDetail producto={e}/>
        ))
        
    }
    </>
       )  
        
}

