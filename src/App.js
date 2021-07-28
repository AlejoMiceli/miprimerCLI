import './App.css';
import NavBar from './componentes/NavBar';
import "./Styles/styles.css"
import Contador from './componentes/Contador';
import Item from "./componentes/Item"
import Contenedor from "./componentes/ItemListContainer"
import ItemDeatilContainer from './componentes/ItemDetailConteiner';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './componentes/pages/Home'
import Productos from './componentes/pages/Productos'
import Nosotros from './componentes/pages/Nosotros'
import ItemListContainer from './componentes/ItemListContainer'
import Carrito from './componentes/Cart';



function App() {
  
  return (
    <BrowserRouter>
      <div>
          <div className="container">
              <NavBar/>
          </div>
          <Switch>
            <Route path={'/Home'} exact component={Home}/>
            <Route path={'/'} exact component={ItemListContainer}/>      
            <Route path={'/Detalle/:id'} exact component={ItemDeatilContainer}/>      
            <Route path={'/category/:categoryId'} exact component={ItemListContainer}/>  
            <Route path={'/cart'} exact component={Carrito}/>              
          </Switch>
         
      </div>
    </BrowserRouter>
  );
}


export default App;
