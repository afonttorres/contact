/*
Ejemplo Hooks:
    - useState();
    - useContext();
*/

import React, { useState, useContext } from 'react';

const myContext = React.createContext(null);

/*
El componente 1 dispone de un contexto que va a tener
un valor que recibe des de el padre.
*/

const Componente1 = () => {

    //Inicializamos un estado vacio que va a rellenarse
    //con los datos del contexto del padre.

    const state = useContext(myContext);

    return (
        <div>
            El token es: {state.token};
            <Componente2 />
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(myContext);

    return (
        <div>
            <p>Sesion is: {state.session}</p>
        </div>
    );
}

export default function ComponenteConContexto() {

    const initState = {
        token: '1234567',
        session: 1
    }

    const [state, setState] = useState(initState);
    const actSession = () => {
        setState({ ...state, token: 'JWT1234567', session: state.session + 1 })
    }

    return (
        <myContext.Provider value={state}>
            {/*Todo lo que esté aquí dentro puedo leer los datos del estado del ComponenteConContexto*/}
            {/*Los componentes anidados cambiaran su valor si el estado con contexto varia*/}
            <h1>useState & useContext example</h1>
            <Componente1 />
            <button onClick={actSession}>Change context</button>
        </myContext.Provider>
    )
}
