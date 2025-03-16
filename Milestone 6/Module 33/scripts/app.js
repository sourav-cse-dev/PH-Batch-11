const person = {
  name: "hena",
  age: 10,
  friends: ["hero alam", "karim"],
  status: true,
};

// JSON = JavaScript Object Notation
//Converting object to json string
const newPerson = JSON.stringify(person);

//Converting JSON string to Object
const newPerson2 = JSON.parse(newPerson);

console.log(person);
console.log(newPerson);
console.log(newPerson2);
console.log(typeof person);
console.log(typeof newPerson);
console.log(typeof newPerson2);
