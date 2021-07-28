import react from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function CardWidget(){
    return(
        <div className="icon">  
        <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart}/></Link>
        </div>
    
    )
}

