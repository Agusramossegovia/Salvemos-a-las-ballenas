//import logo from './logo.svg';
import './App.css';
import Title from './Componentes/Title';
import ContenedorTarjeta from './Componentes/Contenedor';
import Evento from './Componentes/Eventos';

function App() {
  return (
    <div className="App">
      <Title/>
      <ContenedorTarjeta/>
      <Evento/>
    </div>
  );
}

export default App;
