import React, { Component, useState, useEffect } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        // Estado privado del component
        this.state = {
            // Se genera una fecha como estado inicial del componente
            fecha: new Date(),
            edad: 0,
            nombre: "Martín",
            apellidos: "San José"
        };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div>
                <h2>
                    Hora Actual:
                    {this.state.fecha.toLocaleTimeString()}
                </h2>
                <h3>{this.state.nombre} {this.state.apellidos}</h3>
                <h1>Edad: {this.state.edad}</h1>
            </div>
        )
    }
    tick() {
        this.setState((prevState) => {
            let edad = prevState.edad + 1;
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        });
    }
}

export const FunctionalClock = () => {

    const initialClockData = {
        date: new Date(),
        age: 0,
        name: "Martín",
        surname: "San José"
    }

    const [clockData, setClockData] = useState(initialClockData);

    const tick = () => {
        setClockData({ ...clockData, date: new Date(), age: clockData.age + 1 })
    }

    useEffect(() => {
        let timerID = setInterval(tick, 1000);
        return () => {
            clearInterval(timerID);
        }
    })

    return (
        <article>
            <p>Hora actual: {clockData.date.toLocaleTimeString()}</p>
            <p>{clockData.name} {clockData.surname}</p>
            <p>Edad: {clockData.age}</p>
        </article>
    )
}