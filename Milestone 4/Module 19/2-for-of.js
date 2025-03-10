// for-of loop
//The JavaScript for-of statement loops through the values of an iterable(An object that has iterable properties) object.

const numbers = [12, 98, 45, 63, 21, 72];
console.log(numbers);

for (let number of numbers) {
  console.log(number);
}

const fruits = ["Orange", "Apple", "Banana", "Grapes"];
console.log(fruits);

for (let fruit of fruits) {
  console.log(fruit);
}
