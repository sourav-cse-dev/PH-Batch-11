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
      <p>
        Hello React create element from JSX function, name:{" "}
        {props ? props.myName : "Guest"}
      </p>
      {props ? props.children : "0"}
    </div>
  );
};
const Age = (props) => {
    return <p>I am {props ? props.age : "0"} years old</p>;
}
console.log(MyFirstFunction());
// ReactDOM.createRoot(document.getElementById("myDivRootShowJSXFunction")).render(
//   MyFirstFunction()
// );
ReactDOM.createRoot(document.getElementById("myDivRootShowJSXFunction")).render(
  <MyFirstFunction myName={"Labonno"}>
    <Age age={25}></Age>
  </MyFirstFunction>
  
);

//another react function & props
