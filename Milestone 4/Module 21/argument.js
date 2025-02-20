// parameter: when we declare function we declare one or two variables as input, we call them parameters
// argument: when we call a function with the values of parameters , then we call it arguments

function doubleIt(number) {
  const doubled = number * 2;
  console.log(number, doubled);
}
console.log("I will call the function");
doubleIt(15); //passing direct values as argument
console.log("-----------------");
doubleIt(88);
console.log("-----------------");
doubleIt(873);

// passing values through variables
const nums = 55;
doubleIt(nums);
const money = 112;
doubleIt(money);

//passing multiple variables
function difference(num1, num2) {
  const diff = num1 - num2;
  console.log(num1, num2, "diff is", diff);
}
const fatherAge = 40;
const myAge = 10;
difference(fatherAge, myAge);
