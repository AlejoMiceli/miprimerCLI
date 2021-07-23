import react from "react"
import CardWidget from "./pages/CardWidget"
import { Link, NavLink } from "react-router-dom"

export default function NavBar(){
    return(
    <header>
        <div className="nav_container">       
                <div className="menu">
                    <ul>
                        <li>
                            <Link to='/Home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/'>Productos</Link>
                        </li>
                        <li>
                            <Link to='/item/:id'>Item Detail</Link>
                        </li>
                        <li>
                            <Link to='/category/Procesadores'>Procesadores</Link>
                        </li>
                        <li>
                            <Link to='/category/Placas-de-video'>Placas de video</Link>
                        </li>
                        <li>
                            <Link to='/category/perifericos'>Perifericos</Link>
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