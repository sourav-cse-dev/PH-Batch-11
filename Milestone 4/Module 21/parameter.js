// parameter is like declaring a variable, it is only available inside of that function
// we can increase the power or performance of a function by giving parameter

//example without parameter
function vatKhao() {
  console.log("wash hand");
  console.log("bosho");
  console.log("khabar nao");
  console.log("khao");
}
vatKhao();

//square of a given number
// 3 --> 3 * 3 = 9
// 4 --> 4 * 4 = 16
// 11 --> 11 * 11 = 121

//example of 1 parameter in function
function square(number) {
  console.log(number);
  console.log("valu of the parameter:", number);
  const square = number * number;
  console.log("square of the given number is:", square);
}
square(4);
console.log("-----------------");
square(12);
console.log("-----------------");
square(405);

//example of 2 parameter in function
function add(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}
add(2, 3);

//example of multiple parameter in function
function addAll(a, b, c, d, e) {
  const total = a + b + c + d + e;
  console.log(a, b, c, d, e);

  console.log(total);
}
addAll(3, 4, 5, 6, 7);
addAll(3, 4, 5, 6);
