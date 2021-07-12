import './App.css';
import NavBar from './componentes/NavBar';
import "./Styles/styles.css"
import Contador from './componentes/Contador';


function App() {
  return (
    <div>
      <div className="container">
          <NavBar/>
      </div>
    <h1 className="titulo">Productos</h1>
      
    <div className="contador_container">
      <Contador/>
    </div>

    </div>
  );
}

export default App;
