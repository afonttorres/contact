/*
Ejemplo de uso del método componentWillUnmount para el componente clase
y ejemplo del uso de hooks para componente funcional 
(Cuando el componente va a desaparcer)
*/

import React, { Component, useEffect } from 'react'

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log("Comportamiento antes de que el componente desaparezca")
    }

    render() {
        return (
            <div>
                <p>Will unmount!</p>
            </div>
        )
    }
}

export const WillUnmountHook = () => {


    useEffect(() => {
        return () => {
            console.log("Comportamiento antes de que el componente desaparezca")
        }
    }, [])

    return (
        <div>
            <p>Will unmount from useEffect!</p>
        </div>
    )
}
