import React, {useState, Fragment} from 'react';

const C02contador = () => {
    const [numero, setNumero] = useState(0);

    const aumentar = () =>{
      console.log("Hacer click");
      setNumero(numero + 1);
    }

  return (
    <div>
        <h3>Mi primer componente {numero}</h3>
        <button onClick={aumentar}>Click para aumentar...</button>
    </div>
  )
}
export default C02contador;
