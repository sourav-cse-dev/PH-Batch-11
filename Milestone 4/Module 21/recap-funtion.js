// function()
// funtion (parameters)
// function (arguments)
// return

function add(price1, price2) {
  const total = price1 + price2;
  return total;
}
const bill = add(5, 10);
console.log(bill);

// example for direct return
function add2(price1, price2) {
  return price1 + price2;
}
console.log(add2(99, 90));

function doMath(num1, num2) {
  const sum = num1 + num2;
  const diff = num1 - num2;
  const multiply = num1 * num2;
  const division = num1 / num2;

  return sum, diff, multiply, division;
}
console.log(doMath(2, 3));
