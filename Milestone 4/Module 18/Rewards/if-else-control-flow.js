//if, else-if, else statement

var userRole = "admin";
//admin, user, editor

if (userRole === "admin") {
  console.log("Redirecting to admin dashboard...");
} else if (userRole === "editor") {
  console.log("Redirecting to editor dashboard...");
} else {
  console.log("Redirecting to homepage...");
}

//another example of if-else
var isLoggedIn = true;
if (isLoggedIn === true) {
  console.log("Welcome to homepage");
} else {
  console.log("Navigate to sign up page");
}

//another example of if, else if, else
var age = 18;
if (age < 18) {
  console.log("Minor");
} else if (age >= 18 && age < 65) {
  console.log("Adult");
} else {
  console.log("Senior");
}
