import Item from "./Item"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams, useHistory } from "react-router"
import { getFirestore } from "../firebase"


export default function ItemDeatilContainer (){
    
    const [item, setItem] = useState (false)
    const { id } = useParams ();
    const history = useHistory()
    
    
    useEffect (()=> {

       const firestore = getFirestore() 
       const collection = firestore.collection("productos")
       let query = collection.doc(id).get()

            query
                .then(doc => {
                    if(doc.exists) {
                        setItem(doc.data())
                        console.log(doc)
                    }else{
                        history.push("/")
                    }
                    
                })
                .catch(error => {
                    console.log(error)
                })
            },[])
return (
    <>
    <div className="card">
        <ItemDetail  producto={item}/>
    </div>
    </>
       )  
        
}

