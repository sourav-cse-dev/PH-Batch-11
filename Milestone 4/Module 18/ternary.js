//Shorthand for if-else, ternary operator

//Simple ternary
// Ternary ==> Three parts
// 1st part ? 2nd part : 3rd part
// condition ? do something when true : do something when false
const age = 12;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("Ghumai thako");
}
// ternary implementation for previous example
age >= 18 ? console.log("Vote dio") : console.log("Basay jao");

// anothe example
let price = 500;
const isLeader = true;
if (isLeader === true) {
  price = 0;
} else {
  price = price + 100;
}
console.log(price);

// ternary implementation for previous example
let price1 = 500;
price1 = isLeader === true ? 0 : price1 + 100;
console.log(price1);

// Complex ternary
let price2 = 2000;
if (isLeader === true) {
  if (price2 > 1000) {
    price2 = price2 / 2;
  } else {
    price2 = 0;
  }
} else {
  price2 = price2 + 100;
}
console.log(price2);

// ternary implementation for previous example

// price = isLeader === true ? 0 : price + 100;
// price> 1000 ? price / 2 : 0
let price3 = 2000;
price3 = isLeader === true ? (price3 > 1000 ? price3 / 2 : 0) : price3 + 100;
console.log(price3);
