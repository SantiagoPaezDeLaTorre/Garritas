import logo from './logo.svg';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="contenedor">
      <NavBar />
      <ItemListContainer estadoUno="loreeeeeem" estadoDos="ipsuuuummm" />
    </div>
  );
}

export default App;
