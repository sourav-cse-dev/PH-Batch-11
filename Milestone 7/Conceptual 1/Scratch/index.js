console.log("My JS");

const root = document.getElementById("myDiv");
let count = 0;
root.innerHTML = `Hello JS ${count}`;

const myCustomElement = document.createElement("div");
console.log(myCustomElement);

function handleIncrement() {
  count++;
  root.innerHTML = `Hello JS ${count}`;
}
