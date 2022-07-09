import './App.css';
import Informacion from './componentes/informacion.js'
import './style/informacion.css';
import Habilidades from './componentes/habilidades.js'
import './style/habilidades.css';
import Proyecto from './componentes/proyecto.js'
import './style/proyecto.css';


function App() {
  return (
    <div className="App">
      <Informacion />
      <Habilidades />
      <Proyecto />
    </div>
  );
}

export default App;