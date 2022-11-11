/*
Ejemplo para entender el uso de props.children
*/

import React from 'react'

function Ejemplo4(props) {
    return (
        <div>
            <h1>Children props example</h1>
            <h2>{props.name}</h2>
            {/*props.children pintará aquello que se encuentre entre las 
            etiquetas de apertura y cierre de este componente des del componente de orden superior*/}
            {props.children}
        </div>
    )
}

export default Ejemplo4;
