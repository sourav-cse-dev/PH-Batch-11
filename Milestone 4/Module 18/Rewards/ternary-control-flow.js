// ternary logical operator, truthy & falsy value

let age = 18;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

age >= 18 ? console.log("Adult") : console.log("Minor");

let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// nested ternary

let score = 85;
let finalResult = score >= 50 ? (score >= 80 ? "A+" : "Passed") : "Failed";
console.log(finalResult);

//falsy values
// 0, "", null, undefined, NaN, false
//example of falsy values
let email = "";
if (email) {
  console.log("Submitted");
} else {
  console.log("Enter email");
}

// truthy values
// if any variable holds any valid value that variable returns truthy value

//comparison operator: && , ||

let emailId = "abc@gmail.com";
let password = 1234;

if (emailId && password) {
  console.log("Logged in!");
} else {
  console.log("Provide email & password!");
}

// logical not: !

let isUserLoggedIn = false;
if (!isUserLoggedIn) {
  console.log("Redirecct to sign up page");
} else {
  console.log("Log in");
}
