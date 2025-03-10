// sum of even numbers from 1 to 10 using while loop
let num = 1;
let evenSum = 0;
while (num <= 10) {
  console.log("num", num);
  if (num % 2 == 0) {
    console.log("Even number", num);
    evenSum = evenSum + num;
    console.log("Even sum", evenSum);
  }
  num++;
}

//even numbers
for (let i = 2; i <= 10; i += 2) {
  console.log("even", i);
}
