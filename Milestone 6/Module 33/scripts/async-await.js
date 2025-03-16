// catching error
const handleUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
// handleUser();

// asynchronus task
const num1 = 10;
const num2 = 20;
const result = num1 + num2;

const handleUser2 = async () => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await response.json()
  // console.log(data);
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch {
    console.log(error);
  }
};
handleUser2();

console.log(result);
console.log("hello");
