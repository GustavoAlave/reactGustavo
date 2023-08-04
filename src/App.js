import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C03dobleestado from './component/C03dobleestado';
import C05operadorTernario from './component/C05operadorTernario';
import C07matrizOperaciones from './component/C07matrizOperaciones';

function App() {
  return (
    <div>
      <h1>Componente 7</h1>
      <C07matrizOperaciones/>

      <h1>Componente 5</h1>
      <C05operadorTernario/>

      <h1>Componente 3</h1>
      <C03dobleestado/>

      <h1>Componente 1</h1>
      <C01componente/>
    </div>
  );
}

export default App;
