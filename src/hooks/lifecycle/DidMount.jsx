/*
Ejemplo de uso del método de ciclo de vida en componente clase
y el hook de ciclo de vida en componente funcional
(Cuando se crea)
*/

/*
Métodos life cycle
    - Introducido en versiones iniciales
    - Funciona con ES5
    - Incorporado en componentes de clase
    - Necesita de un constructor para inicializarse
    - Uso de THIS bindeado de la clase
*/

/*
Hooks life cycle
    - Introducido en 2018
    - Funciona con >=ES6
    - Incorporado en componentes funcionales
    - No necesita de un constructor para inicializarse
    - No necesita THIS para ser usado
*/

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log("Comportamiento antes de que el componente sea añadido al DOM (renderice)")
    }

    render() {
        return (
            <div>
                <h1>Did mount!</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea añadido al DOM (renderice)")
    }, [])

    return (
        <div><h1>Did mount from useEffect!</h1></div>
    )
}