// Numbers in JS

var orangePrice = 20; //integer
var applePrice = "30";
var chocolate = 0.5; //float

var abc = parseInt("26.5"); //converts string containing numbers into integer
var pqr = parseInt("jksabncvkjldsvc"); //returns NaN, cause there is no number in that string
var xyz = parseFloat("26.5"); //converts string containg numbers into float

console.log(typeof orangePrice);
console.log(typeof applePrice);
console.log(abc);
console.log(pqr);
console.log(xyz);

console.log(orangePrice + applePrice); //converts in string
console.log(orangePrice + parseInt(applePrice)); //converts in number

var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total.toFixed(2)); //converts in string with the given point number

var num = 50 / 0;
console.log(num); // +Infinity

var value = -50 / 0;
console.log(value); // -Infinity

let x = "10";
let n = Number(x);
console.log(num);

const a = isNaN(9);
console.log(a);

const b = isNaN(4 - "hello");
console.log(b);
