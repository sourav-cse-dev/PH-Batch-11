const age = 12;
// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("Ghumai thako");
// }

// Ternary
// ? :
// condition ? true : false

//Simple ternary
age >= 18 ? console.log("Vote dio") : console.log("Basay jao");

let price = 500;
const isLeader = true;

// if (isLeader === true) {
//   price = 0;
// } else {
//   price = price + 100;
// }
// console.log(price);

price = isLeader === true ? 0 : price + 100;
console.log(price);
