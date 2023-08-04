import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C02contador from './component/C02contador';
import C03dobleestado from './component/C03dobleestado';
import C04variable from './component/C04variable';
import C05operadorTernario from './component/C05operadorTernario';
import C06matriz from './component/C06matriz';
import C07matrizOperaciones from './component/C07matrizOperaciones';

function App() {
  return (
    <div>
      <h1>Componente 6</h1>
      <C06matriz/>

      <h1>Componente 4</h1>
      <C04variable/>

      <h1>Componente 2</h1>
      <C02contador/>

      <h1>Componente 1</h1>
      <C01componente/>
    </div>
  );
}

export default App;
