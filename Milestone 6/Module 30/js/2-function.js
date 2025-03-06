// num1, num2 are parameters
function sum(num1, num2) {
  console.log(num1);
  console.log(num2);
  const result = num1 + num2;
  console.log(result);
}

// 10, 20 are arguments
sum(10);
console.log(sum.length);

// Default parameter
// To avoid undefined or NaN we can set default value to a parameter called default parameter
// If we don't pass any value to a parameter then it will take the default value
// If we pass a value to a parameter then it will take the passed value
function add(a = 0, b = 0) {
  console.log(a);
  console.log(b);
  const result = a + b;
  console.log(result);
}
add(10, 20);
