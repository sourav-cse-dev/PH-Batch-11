console.log(React);
console.log(ReactDOM);

//raw react
const myReactElement = React.createElement(
  "div",
  { name: "Sourav" },
  //   "Hello React create element"
  React.createElement(
    "p",
    { nestedName: "Chowdhury" },
    "Hello React create element"
  )
);
console.log(myReactElement);
console.log("props", myReactElement.props);
console.log(myReactElement.props.name);
console.log(myReactElement.props.children.props.nestedName);
ReactDOM.createRoot(document.getElementById("myDivRootShow")).render(
  myReactElement
);

//JSX element
const myJSXElement = (
  <div>
    <hr></hr>
    <p>Hello React create element from JSX</p>
  </div>
);
console.log(myJSXElement);
ReactDOM.createRoot(document.getElementById("myDivRootShowJSX")).render(
  myJSXElement
);

//react function & props
const MyFirstFunction = (props) => {
  console.log("props", props);
  return (
    <div>
      <hr></hr>
      <p>
        Hello React create element from JSX function, name:{" "}
        {props ? props.myName : "Guest"}
      </p>
      {/* {props ? props.children : "0"} */}
    </div>
  );
};
const Age = (props) => {
  return <p>I am {props ? props.age : "0"} years old</p>;
};
console.log(MyFirstFunction());
// ReactDOM.createRoot(document.getElementById("myDivRootShowJSXFunction")).render(
//   MyFirstFunction()
// );
ReactDOM.createRoot(document.getElementById("myDivRootShowJSXFunction")).render(
  <>
    <MyFirstFunction myName={"Labonno"}></MyFirstFunction>
    <Age age={25}></Age>
    <Age age={26}></Age>
    <Age age={27}></Age>
    <Age age={28}></Age>
  </>
);

// react useState
const Counter = () => {
  const [myCounter, setMyCounter] = React.useState(0);
  console.log(myCounter);
  console.log(setMyCounter);

  function handleAdd(params) {
    // const previousCount = document.getElementById("count").innerText;
    // const parseNumber = parseInt(previousCount);
    // document.getElementById("count").innerText = parseNumber + 1;
    // console.log(previousCount);
    // console.log(parseNumber);

    setMyCounter(myCounter + 1);
  }
  return (
    <div>
      <hr></hr>
      <p>
        {" "}
        Counter : <span id="count">{myCounter}</span>{" "}
      </p>
      {/* this will render the the counter component */}
      <button onClick={handleAdd}>Click to add</button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("counter")).render(
  <>
    <Counter></Counter>
    <Counter></Counter>
    <Counter></Counter>
  </>
);
