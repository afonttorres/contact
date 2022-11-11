# Ejercicios Open Bootcamp

En este proyecto se encuentran tanto los ejercicios como la teoría impartida
en el curso de React.js Intermedio de Open Bootcamp.

## Teoría

### Introducción a React JS

### Componentes y jerarquía

### Presentación del proyecto evolutivo

### Los Hooks de React

### Avance en el proyecto evolutivo
 + [Ejercicio1.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/Ejemplo1.jsx)
 + [Ejercicio2.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/Ejemplo2.jsx)
 + [Ejercicio3.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/Ejemplo3.jsx)
 + [Ejercicio4.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/Ejemplo4.jsx)
 + [LifeCycleExample.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/lifecycle/LifeCycleExample.jsx)
 + [AllCycles.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/lifecycle/AllCycles.jsx)
 + [DidMount.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/lifecycle/DidMount.jsx)
 + [DidUpdate.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/lifecycle/DidUpdate.jsx)
 + [WillUnmount.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/lifecycle/WillUnmount.jsx)

### Dando estilos a un proyecto ReactJS
 + [GreetingStyled.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/GreetingStyled.jsx)

## Ejercicios

### Ejercicios sesiones 1, 2 y 3
Para este primer reto de programación en React vamos a poner en practica lo aprendido hasta ahora para crear dos componentes.

Cada uno de estos componentes tendrá sus propias características.

Componente A: Este componente va a tener disponer un Contacto(crea una clase para ello), que va a contar con las siguientes características:

Nombre: que será un String.

Apellido: también un String.

Email: de nuevo un String.

Conectado: será un booleano que nos indicará si la persona está conectada o no.

Componente B: Por otro lado, tenemos el componente B que va a recibir por props un contacto y va a poder cambiar su estado de conectado a desconectado y viceversa.

Si el contacto está conectado, se debe mostrar: Contacto En Línea

Si el contacto no está conectado, se debe mostrar: Contacto No Disponible

Renderizado de componentes en la solución:

El Componente A debe ser renderizado dentro del componenet App.js del proyecto.

El Componente B debe ser renderizado desde el componte A y recibir los props adecuadamente

Recordatorio: Haz uso de Proptypes adecuadamente

#### Links
 + [contact.class.js](https://github.com/afonttorres/contact/blob/main/src/models/contact.class.js)
 + [ContactComponent.jsx](https://github.com/afonttorres/contact/blob/main/src/components/pure/ContactComponent.jsx)  
 + [ContactList.jsx](https://github.com/afonttorres/contact/blob/main/src/components/container/ContactList.jsx)


### Ejercicios sesiones 4, 5 y 6

Partiendo del siguiente componente de clase que contempla varios métodos de ciclo de vida, convertidlo en un componente funcional que realice exactamente lo mismo:

#### Link
+ [Clock.jsx](https://github.com/afonttorres/contact/blob/main/src/components/pure/Clock.jsx)
