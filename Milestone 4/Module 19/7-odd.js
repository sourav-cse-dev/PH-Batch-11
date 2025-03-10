// sum of odd numbers between 1 to 10 using while loop

let num = 1;
let oddSum = 0;

while (num <= 10) {
  console.log("num", num);
  if (num % 2 != 0) {
    console.log("Odd number", num);
    oddSum = oddSum + num;
    console.log("Odd sum", oddSum);
  }
  num++;
}

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

//odd numbers
for (let i = 1; i <= 10; i += 2) {
  console.log("odd", i);
}
