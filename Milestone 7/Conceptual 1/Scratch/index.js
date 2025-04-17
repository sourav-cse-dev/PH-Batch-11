console.log("My JS");

const root = document.getElementById("myDiv");
let count = 0;
root.innerHTML = `Counter: ${count}`;

const myCustomElement = document.createElement("div");
console.log(myCustomElement);

function handleDecrement() {
  count--;
  root.innerHTML = `Counter: ${count}`;
}
function handleIncrement() {
  count++;
  root.innerHTML = `Counter: ${count}`;
}
