import './App.css';
import NavBar from './componentes/NavBar';
import "./Styles/styles.css"
import Contador from './componentes/Contador';
import Item from "./componentes/Item"
import ContenedorItem from "./componentes/ContenedorItem"


function App() {
  function agregarProducto(cantidadSeleccionada) {
    alert("Agregaste " + cantidadSeleccionada + " productos al carrito")
  }
  
  return (
    <div>
        <div className="container">
            <NavBar/>
        </div>
      <h1 className="titulo">Productos</h1>
        <ContenedorItem/>
    </div>
  );
}


export default App;
