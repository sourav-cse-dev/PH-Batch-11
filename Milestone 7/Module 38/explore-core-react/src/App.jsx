import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Pet />
      <Person />
      <Sports />
      <Person />
      <Person />
      <Sports />
    </>
  );
}

function Person() {
  const name = "Jolil"
  const age = 20;
  return <p>I am a person, name: {name} , age: {age}</p>;
}

function Pet(){
  return(
    <>
      <p>Cat</p>
    </>
  )
}

function Sports(){
  return(
    <>
      <h3>Cricket</h3>
      <ul>
        <li>Kola</li>
        <li>Komola</li>
        <li>Apel</li>
      </ul>
      <p>Playing and loosing</p>
    </>
  )
}

export default App;
