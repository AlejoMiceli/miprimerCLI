import './App.css';
import NavBar from './componentes/NavBar';
import "./Styles/styles.css"
import Contador from './componentes/Contador';
import Item from "./componentes/Item"
import Contenedor from "./componentes/ItemListContainer"
import ItemDeatilContainer from './componentes/ItemDetailConteiner';


function App() {
  
  return (
    <div>
        <div className="container">
            <NavBar/>
        </div>
      <h1 className="titulo">Productos</h1>
        <Contenedor/>
        <ItemDeatilContainer/>
    </div>
  );
}


export default App;
