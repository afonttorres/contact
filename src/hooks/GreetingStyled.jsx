import React, { useState } from 'react';

//Definiendo estilos en constantes
//Estilo para usuario loggeado
const loggedStyle = {
    color: 'violet',
    fontWeight: 'bold'
}

//Estilo para usuario no loggeado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bolder'
}

const GreetingStyled = (props) => {

    //Generamos un estado para el componente
    //y así controlar si el usuario está logueado ono

    const [logged, setLogged] = useState(false);

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            {logged ? <p>Hola, {props.name}</p> : <p>Plz, login</p>}
            <button onClick={() => setLogged(!logged)}>{logged ? "Logout" : "Login"}</button>
        </div>
    );
}

export default GreetingStyled;
