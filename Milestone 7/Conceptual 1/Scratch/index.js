console.log("My JS");

const root = document.getElementById("myDiv");
let count = 0;
root.innerHTML = `Hello JS ${count}`;

function handleIncrement() {
  count++;
  root.innerHTML = `Hello JS ${count}`;
}
