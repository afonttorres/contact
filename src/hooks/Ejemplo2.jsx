/*Ejemplo de uso de:
    - useState() -> Cambio de estado
    - useRef() -> Referenciación dentro de la vista
    - useEffect() -> Visualización
*/

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    //Vamos a creador dos contadores distintos
    //cada uno en un estado diferente

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    //Vamos a crear una referencia con useRef() para
    //asociar una variable con un elemento del DOM del componente (vista HTML).

    const myRef = useRef(null);

    const increment1 = () => {
        setCounter1(counter1 + 1);
    }

    const increment2 = () => {
        setCounter2(counter2 + 1);
    }


    /*
    Trabajando con useEffect

    Caso 1: Ejecutar siempre un snippet de código ->
    Cada vez que haya un cambio en el estado del componente
    se ejecuta aquello que esté dentro del useEffect().

    */

    // useEffect(() => {
    //     console.log("CAMBIO EN EL ESTADO DEL COMPONENTE");
    //     console.log("Mostrando referencia a elemento del DOM:");
    //     console.log(myRef)
    // })

    /*
    Caso 2: Ejecutar solo cuando cambie el contador 1 ->
    Cada vez que haya un cambio en el contador 1 se ejecuta
    lo que diga el useEffect, en caso de que cambie el contador 2
    no habrá ejecución

    */

    // useEffect(() => {
    //     console.log("Counter 1 changed!")
    //     console.log("Ref element", myRef);
    // }, [counter1])


    /*
    Caso 2: Ejecutar solo cuando cambie el contador 1 o contador 2 ->
    Cada vez que haya un cambio en los contadores se ejecuta
    lo que diga el useEffect
    */

    useEffect(() => {
        console.log("Some counter has modified its value!")
        console.log("Ref element", myRef);
    }, [counter1, counter2])



    return (
        <section>
            <h1>useState, useRef & useEffect example</h1>
            <h2>Counter1 example</h2>
            <p>{counter1}</p>
            <h2>Counter2 example</h2>
            <p>{counter2}</p>
            <h2 ref={myRef}>Ref element example</h2>
            <div>
                <button onClick={increment1}>Increment 1</button>
                <button onClick={increment2}>Increment 2</button>
            </div>
        </section>
    );
}

export default Ejemplo2;
