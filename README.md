# Ejercicios Open Bootcamp

En este proyecto se encuentran tanto los ejercicios como la teoría impartida
en el curso de React JS Intermedio de Open Bootcamp.

## Teoría

### Introducción a React JS

### Componentes y jerarquía

### Los Hooks de React
 + [Ejemplo1.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/Ejemplo1.jsx)
 + [Ejemplo2.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/Ejemplo2.jsx)
 + [Ejemplo3.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/Ejemplo3.jsx)
 + [Ejemplo4.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/Ejemplo4.jsx)
 + [LifeCycleExample.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/lifecycle/LifeCycleExample.jsx)
 + [AllCycles.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/lifecycle/AllCycles.jsx)
 + [DidMount.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/lifecycle/DidMount.jsx)
 + [DidUpdate.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/lifecycle/DidUpdate.jsx)
 + [WillUnmount.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/lifecycle/WillUnmount.jsx)

### Dando estilos a un proyecto ReactJS
 + [GreetingStyled.jsx](https://github.com/afonttorres/contact/blob/main/src/hooks/GreetingStyled.jsx)

 ### Manejo de eventos

## Ejercicios

### Ejercicios sesiones 1, 2 y 3
Para este primer reto de programación en React vamos a poner en practica lo aprendido hasta ahora para crear dos componentes.

Cada uno de estos componentes tendrá sus propias características.

Componente A: Este componente va a tener disponer un Contacto(crea una clase para ello), que va a contar con las siguientes características:

 + Nombre: que será un String.
 + Apellido: también un String.
 + Email: de nuevo un String.
 + onectado: será un booleano que nos indicará si la persona está conectada o no.

Componente B: Por otro lado, tenemos el componente B que va a recibir por props un contacto y va a poder cambiar su estado de conectado a desconectado y viceversa.

 + Si el contacto está conectado, se debe mostrar: Contacto En Línea
 + Si el contacto no está conectado, se debe mostrar: Contacto No Disponible

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

### Ejercicios sesiones 7, 8 y 9

En este ejercicio de React JS deberéis crear una lista, esta lista tendrá dentro distintos contactos y deberá cumplir con las siguientes funcionalidades:

+ Mostrar contacto.
+ Crear contacto.
+ Eliminar contacto.
+ Cambiar el estado del contacto entre Conectado y Desconectado.

#### Links
 + [contact.class.js](https://github.com/afonttorres/contact/blob/main/src/models/contact.class.js)
 + [ContactComponent.jsx](https://github.com/afonttorres/contact/blob/main/src/components/pure/ContactComponent.jsx)  
 + [ContactList.jsx](https://github.com/afonttorres/contact/blob/main/src/components/container/ContactList.jsx)
 + [ContactForm.jsx](https://github.com/afonttorres/contact/blob/main/src/components/pure/forms/ContactForm.jsx)
 + [ContactStatus.jsx](https://github.com/afonttorres/contact/blob/main/src/components/pure/ContactStatus.jsx)
 + [contact.scss](https://github.com/afonttorres/contact/blob/main/src/styles/contact.scss)

### Ejercicios sesiones 10, 11 y 12

En este ejercicio tendréis que crear un componente el cual contenga un elemento, puede ser un rectángulo, cuadrado.

Las dimensiones del elemento serán de ancho 255px y de alto 255px y su color inicial tiene que ser negro.

Dentro del componente crearéis varios métodos de captura del ratón que harán lo siguiente para que el color del elemento cambie:

 + Un método para que cuando el ratón entre en el contenedor, se dará un valor aleatorio (color RGB entre 0 y 255) para cambiar el color del componente.
 + Un método para que cuando salga el ratón del componente se detenga por completo el cambio de color.

 + Por último, un método en el que cuando se pulsa dos veces en el componente, se tiene que detener el cambio de color.

#### Links
 + [ColorChanger.jsx](https://github.com/afonttorres/contact/blob/main/src/components/pure/ColorChanger.jsx)