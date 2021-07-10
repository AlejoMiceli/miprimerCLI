import logo from './logo.svg';
import './App.css';
import Text from "./componentes/Text"
import NavBar from './componentes/NavBar';
import "./Styles/styles.css"
import FuncionalComponent from './componentes/FuncionalComponents';
import ItemListContainer from './componentes/ItemListContainer';

var data = [
  {
    greeting: "Bienvenido a mi nuevo e-commerce de React."
  }
]

function App() {
  return (
    <div>
      <div className="container">
          <NavBar/>
      </div>
      {data.map(bienvenida => {
        return(
          <ItemListContainer
            greeting = { bienvenida.greeting }
          />
        )
      })}
    </div>
  );
}

export default App;
