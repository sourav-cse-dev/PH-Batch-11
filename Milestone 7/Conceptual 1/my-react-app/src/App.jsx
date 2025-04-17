import "./App.css";
import Person from "./components/Person";

function App() {
  return (
    <>
      <div>Hello, </div>
      <Person name={"Sourav"} age={32}></Person>
      <Person name={"Chowdhury"} age={33}></Person>
      <Person name={"Labonno"} age={29}></Person>
    </>
  );
}

export default App;
