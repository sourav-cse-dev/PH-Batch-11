//Comparison

/**
 * Basic comparison
 * 1. Bigger: >
 * 2. Less: <
 * 3. Equal: ==
 * 4. Greater than or equal: >=
 * 5. Less than or equal: <=
 * 6. Not equal: !=
 *
 * Special comparison
 * 7. And: &&
 * 8. Or: ||
 * */

console.log(5 > 10);
console.log(10 > 5);
console.log(10 == 5);
console.log(10 == 10);
console.log(10 >= 10);
console.log(15 >= 10);
console.log(5 >= 10);
console.log(5 <= 10);
console.log(10 <= 10);

var peyaraPrice = 40;
var applePrice = 250;

console.log(peyaraPrice > applePrice);
console.log(applePrice > peyaraPrice);

console.log(10 == "10"); // only checks value
console.log(10 === "10"); // checks value and data type

console.log(10 != "10"); // not equal to , will return false since data type conversion takes place so 10 and ‘10’ are considered equal.
console.log(10 !== "10"); // strictly inequality operator, will return true since 10 is an integer and ‘10’ is a character and no data type conversion takes place.
