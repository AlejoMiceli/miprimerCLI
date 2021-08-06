import Item from "./Item"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router"

export default function ItemDeatilContainer (){
    
    const [item, setItem] = useState ([])
    const { id } = useParams ();
    
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
        {item.map ((e) =>(
            <ItemDetail producto={e}/>
        ))
        
    }
    </>
       )  
        
}

