import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Item from "./Item"
import { getFirestore } from "../firebase"

export default function Contenedor (){
    
    const [categorias, setCategorias] = useState ([])
    const { categoryId } = useParams ();
   


    const [producto, setProducto] = useState ([])
    
    useEffect (()=> {
       const firestore = getFirestore() 
       const collection = firestore.collection("productos")
       const query = collection.get()
            query
                .then((snapshot) => {
                    const documentos = snapshot.docs
                    
                    const productos = documentos.map((doc) => { 
                        // Determinar que productos queremos mostrar
                        // Agarrar la categoria y fijate si es igual a categoryId
                        let producto = doc.data();
                       
                        if (producto.categoria  === categoryId || categoryId === undefined) {
                            
                            return { id: doc.id, ...producto }
                        }
                        // Si son iguales queremos retornar esa informacion   
                        
                    })                    
                        setProducto(productos)
                       
                })
                .catch((error) => {
                    console.log(error)
                })
    },[categoryId])

 
return (
    <>
    
    <h1 className="titulo">Productos</h1> 

    <div className="card_container">
        {producto.map((item) => {
        return item !== undefined && (
            <div>
        
            <Item 
            id={item.id}
            nombre={item.title}
            image={item.image}
            precio={item.price}
            />
        
        </div>
        )

    })}
    </div>
     </>
       
)
}


