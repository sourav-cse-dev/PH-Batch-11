// Conditional statement

const age1 = 12;
if (age1 > 10) {
  console.log("You can enter");
} else {
  console.log("You can't enter");
}

const age2 = 15;
if (age2 >= 18) {
  console.log("You can enjoy all rides");
} else if (age2 >= 13) {
  console.log("You can enjoy some rides");
} else {
  console.log("You can go to very few rides");
}

const age3 = 17;
const withAdult = true;
if (age3 >= 15) {
  console.log("You can enter");
  if (withAdult) {
    console.log("You ca go to haunted house");
  } else {
    console.log("You can't go to haunted house");
  }
} else {
  console.log("You can't enter");
}
