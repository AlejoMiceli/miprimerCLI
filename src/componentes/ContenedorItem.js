import ItemList from "./ItemList"
import { useState } from "react"

export default function Contenedor (){
    const array = [{
        id : 1,
        nombre : "Coca-Cola",
        precio : 100,
        img : "https://coca-colafemsa.com/wp-content/uploads/2019/11/2.png"
    },
    {
        id:2,
        nombre: "seven-up",
        precio: "80",
        img: "https://www.cocacola.es/content/dam/GO/sprite/spain/home/SP_1,5L_BA_800x654.jpg"
    }
]
    const [productos, setProductos] = useState ([])

    let promesa = new Promise ((resolve, reject) =>{
        setTimeout (()=> {
            resolve (setProductos(array))
        }, 2000)
    }
    )

return (

    <ItemList prods={productos}/>


)
}
