import logo from './logo.svg';
import './App.css';
import ContactList from './components/container/ContactList';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import ComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './hooks/GreetingStyled';
import { FunctionalClock } from './components/pure/Clock';
import ColorChanger from './components/pure/ColorChanger';
import LoginFormik from './components/pure/forms/LoginFormik';

function App() {
  return (
    <div className="App">
      {/* <ContactList /> */}
      {/* <Ejemplo1 /> */}
      {/* <Ejemplo2 /> */}
      {/* <ComponenteConContexto /> */}
      {/* <Ejemplo4 name="Agnès">
          <noscript>Este elemento se trata como props.children</noscript>
          <p>patata</p>
        </Ejemplo4> */}
      {/* <GreetingStyled name={"Agnès"}/> */}
      {/* <FunctionalClock /> */}
      {/* <ColorChanger /> */}
      <LoginFormik />
    </div>
  );
}

export default App;
