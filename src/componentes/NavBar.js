import react from "react"
import CardWidget from "./pages/CardWidget"

export default function NavBar(){
    return(
    <header>
        <div className="nav_container">       
                <div className="menu">
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Productos
                        </li>
                        <li>
                            Nosotros
                        </li>
                        <li className="nav_item"> 
                            <CardWidget/>
                        </li> 
                    </ul>

                </div>  

        </div>
    </header> 
    )
}