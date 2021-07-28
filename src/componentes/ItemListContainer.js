import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Item from "./Item"

export default function Contenedor (){
    
    const [categorias, setCategorias] = useState ([])
    const { categoryId } = useParams ();

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
            let call = fetch(`http://localhost:4000/Products`, config)
                .then(res => res.json())
                .then(resp => setTimeout(() => {
                    if (categoryId == undefined){
                        setCategorias(resp)
                    }else{
                    let categoriaFiltrada = resp.flat().filter (e =>
                        e.categoria == categoryId
                        )
                       
                    setCategorias(categoriaFiltrada)}
                    
                }, 2000))
}

useEffect ( ()=> {
    fetchData()
},[])

return (
    <>
    <h1 className="titulo">Productos</h1>
    
    {categorias.map((item) =>
     
    <div>
       
        <Item 
          id={item.id}
          nombre={item.title}
          image={item.image}
          precio={item.price}
        />
     
    </div>
    )}
     </>
       
)
}


