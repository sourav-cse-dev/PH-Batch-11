import "./App.css";
import Person from "./components/Person";
import Products from "./components/Products";
import New from "./components/New";

function App() {
  return (
    <>
      {/* <div>Hello, </div>
      <Person name={"Sourav"} age={32}></Person>
      <Person name={"Chowdhury"} age={33}></Person>
      <Person name={"Labonno"} age={29}></Person> */}

      <Products></Products>
      <New></New>
    </>
  );
}

export default App;
