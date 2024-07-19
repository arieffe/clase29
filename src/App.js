import logo from './logo.svg';
import './App.css';
import Head from './pagina/head.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pagina/home.js'
import Boton from './pagina/boton.js';
import Footer from './pagina/footer.js';

function App() {
  const company = "Recetas Inc.";
  const year = "2024";
  return (
    <div className="App">
      <Head />
      <Home />
      <Footer company = {company} year = {year}/>
      <Boton /> 
    </div>
  );
}
export default App;