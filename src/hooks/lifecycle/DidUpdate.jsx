/*
Ejemplo de uso de método componentDidUpdate en componente de clase
y uso de hook en componente funcional
(Cuando se actualiza)
*/

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log("Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado")
    }

    render() {
        return (
            <div>
                <p>Did update!</p>
            </div>
        );
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
    });

    return (
        <div>
        <p>Did update from useEffect!</p>
    </div>
    )
}
