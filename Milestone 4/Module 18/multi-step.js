//Multilevel if, else-if, else

const price = 4000;
if (price >= 5000) {
  const discount = (price * 10) / 100;
  const payAmount = price - discount;
  console.log(discount);
  console.log(payAmount);
} else if (price > 2500) {
  const discount = (price * 5) / 100;
  const payAmount = price - discount;
  console.log(discount);
  console.log(payAmount);
} else {
  console.log(price);
}

const age = 40;
const amount = 500;
if (age <= 12) {
  console.log("You can eat for free");
} else if (age >= 60) {
  const discount = (amount * 50) / 100;
  const payAmount = amount - discount;
  console.log(payAmount);
} else if (age >= 50) {
  const discount = (amount * 40) / 100;
  const payAmount = amount - discount;
  console.log(payAmount);
} else if (age >= 40) {
  const discount = (amount * 10) / 100;
  const payAmount = amount - discount;
  console.log(payAmount);
} else {
  console.log(amount);
}
