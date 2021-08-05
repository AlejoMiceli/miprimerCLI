import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Item from "./Item"
import { getFirestore } from "../firebase"

export default function Contenedor (){
    
    const [categorias, setCategorias] = useState ([])
    const { categoryId } = useParams ();

    const [producto, setProducto] = useState ({})
    useEffect (()=> {
       const firestore = getFirestore() 
       const collection = firestore.collection("productos")
       const query = collection.get()
            query
                .then((snapshot) => {
                    const documentos = snapshot.docs
                    const producto = documentos.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    })

                    setTimeout(() => {
                        
                        setProducto(producto)
                    }, 2000)


                })
                .catch((error) => {
                    console.log(error)
                })
    })

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
                    console.log(resp)
                    if (categoryId == undefined){
                        setCategorias(resp)
                    }else{
                    let categoriaFiltrada = resp.filter (e =>
                        e.categoria == categoryId
                        )
                       
                    setCategorias(categoriaFiltrada)}
                    
                }, 2000))
}

useEffect ( ()=> {
    fetchData()
},[categoryId])

return (
    <>
    {/* <h1>{producto[0].title}</h1> */}
    <h1 className="titulo">Productos</h1>
    <div className="card_container">
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
    </div>
     </>
       
)
}


