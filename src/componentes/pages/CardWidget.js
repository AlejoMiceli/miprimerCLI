import react from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"

export default function CardWidget(){
    return(
        <div className="icon">  
        <FontAwesomeIcon icon={faShoppingCart}/>
        </div>
    
    )
}

