/*
Ejemplo useState
Crear un componente de tipo función y acceder a su estado a través de un Hook
y además poder modificarlo.
*/

import React, { useState } from 'react'

export default function Ejemplo1() {

    // Valor inicial
    const initValue = 0;

    // Valor inicial para una persona
    const initPerson = {
        name: "Agnes",
        email: "afonttorres@gmail.com"
    }

    //Queremos que el valor inicial y la persona inicial
    //sean parte del estado del componente para así poder gestionar
    //su cambio y que éste se vea reflejado en la vista del componente.

    const [counter, setCounter] = useState(initValue);
    const [person, setPerson] = useState(initPerson);

    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    const actualizePerson = (name, email) => {
        setPerson({ ...person, name: name, email: email })
    }

    return (
        <section>
            <h1>useState example</h1>
            <h2>Counter example</h2>
            <p>{counter}</p>
            <button onClick={incrementCounter}>Add</button>
            <br />
            <h2>Person example</h2>
            <p>{person.name}</p>
            <p>{person.email}</p>
            <button onClick={() => actualizePerson("Pepe", "pepe@gmail.com")}>🔄</button>
        </section>
    )
}
