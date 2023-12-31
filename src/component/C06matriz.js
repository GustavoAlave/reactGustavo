import React, {useState, Fragment} from 'react';

const C06matriz = () => {

    const [lista, setLista] = useState([1,2,3,4,5]);
    return (
        <div>
            <h1>Lectura sin index y sin html</h1>
            {lista.map((item) => <span> {item} </span>)}
        <br/>

            <h1>Listas con index y sin key</h1>
            {lista.map((item, index) => <p> {item}</p>)}
        <br/>

            <h1>Listas con index y con key</h1>
            {
                lista.map((item, index) => 
                    <p key ={index}>
                        {item} - {index}
                    </p>
                )
            }
            <br/>

        </div>
    )
}
export default C06matriz;