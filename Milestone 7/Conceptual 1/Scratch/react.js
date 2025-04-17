console.log(React);
console.log(ReactDOM);

const myReactElement = React.createElement(
  "div",
  {name: "Sourav"},
  "Hello React create element"
);
console.log(myReactElement.props.name);