function calculateVAT(price) {
  if (typeof price !== "number") {
    return "Invalid";
  }
  if (price <= 0) {
    return "Invalid";
  }
  const vatRate = 7.5;
  let vatAmount = (price * vatRate) / 100;
  return vatAmount;
}

console.log(calculateVAT(1500)); // Output: 112.5
console.log(calculateVAT(200)); // Output: 15
console.log(calculateVAT(999)); // Output: 74.925
console.log(calculateVAT(-500)); // Output: "Invalid"
console.log(calculateVAT("101")); // Output: "Invalid"
console.log(calculateVAT("foo")); // Output: "Invalid"
console.log(calculateVAT(0)); // Output: "Invalid"
console.log(calculateVAT(1)); // Output: "Invalid"
