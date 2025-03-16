// fecth is a global object
// fetch makes a promise, we get that promise on first .then
// res.json() -> convert json promise, act like JSON.stringify()
// in second .then -> convert json promise to object, act like JSON.parse()
// promise can be resolved or rejected
// api ulr have to be given in string format

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((r) => r.json())
  .then((d) => {
    console.log(d);
  });

const handleLoadData = () => {
  console.log("Hello");
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((r) => r.json())
    .then((d) => {
      console.log(d);
    });
};
