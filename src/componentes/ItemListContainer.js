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
                        console.log(producto)
                        setProducto(producto)
                    }, 2000)


                })
                .catch((error) => {
                    console.log(error)
                })
    },[])

 
return (
    <>
    {/* ]<h1>{producto[0].title}</h1> */}
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


