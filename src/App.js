import './App.css';
import NavBar from './componentes/NavBar';
import "./Styles/styles.css"
import Contador from './componentes/Contador';


function App() {
  function agregarProducto(cantidadSeleccionada) {
    alert("Agregaste " + cantidadSeleccionada + " productos al carrito")
  }
  agregarProducto("")
  return (
    <div>
      <div className="container">
          <NavBar/>
      </div>
    <h1 className="titulo">Productos</h1>
      
    <div className="contador_container">
      <Contador initial={1} stock={5} onAdd={agregarProducto}/>
    </div>

    </div>
  );
}


export default App;
