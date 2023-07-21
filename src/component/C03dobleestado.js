import React, {useState, Fragment} from 'react';

 const C03dobleestado = () => {

    const [valor, setValor] = useState(0);
    const [numero, setNumero] = useState(0);

    const IncrementoDos = () =>{
        setNumero(numero + 1);
        console.log("Mensaje de contador");
    }

  return (
    <div>
        <button onClick={()=>setValor(valor+1)}>Contador 1</button>
        <span>Incrmento de contador 1: {valor}</span>
        <hr/>
        <button onClick={IncrementoDos}>Contador2</button>      
        <span>Incremento de contador2: {numero}</span>
    </div>
  );
}
export default C03dobleestado;
