import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class LifeCycleExample extends Component {
 
    constructor(props){
        super(props)
        console.log("Cuando se instancia el componente");
    }

    componentWillMount(){
        console.log("Will mount: Antes del montaje del componente")
    }
    componentDidMount(){
        console.log("Did mount: Justo al acabar el montaje del componente antes de pintarlo")
    }
    componentWillReceiveProps(nextProps){
        console.log("Will receive props: Si va a recibir nuestros props")
    }
    shouldComponentUpdate(nextProps, nextState){
        /*Sirve para controlar si el componente debe o no actualizarse*/
    }
    componentWillUpdate(nextProps, nextState){
        console.log("Will update: Justo antes de actualizarse")
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Did update: Justo después de actualizarse")
    }
    componentWillUnmount(){
        console.log("Will unmount: Justo antes de desaparecer")
    }


  render() {
    return (
      <div>LifeCycleExample</div>
    )
  }
}

