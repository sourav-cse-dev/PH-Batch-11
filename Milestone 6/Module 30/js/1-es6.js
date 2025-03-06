console.log(name);
var name = "Sourav Chowdhury"; //declaration এর আগের লাইনে print করলেও এটা প্রিন্ট হচ্ছে যেটা হওয়া উচিত না। এখানে hoisting এর ব্যাপার ঘটে।

const countryName = "Bangladesh";
//When const is used, the value of the variable cannot be changed.
//countryName = "India"; //TypeError: Assignment to constant variable.
console.log(countryName);

let age = 10;
//When let is used, the value of the variable can be changed.
age = 20;
console.log(age);

const friends = ["Sourav", "Rahul", "Raj"];
friends.push("Rohit"); // variable এর মান চেইঞ্জ হচ্ছে না, array এর ভিতরের element চেইঞ্জ হচ্ছে।
console.log(friends);
//friends = []; //can't do that, it will change the value of the array.

for (let i = 0; i < friends.length; i++) {
  const element = friends[i];
  console.log(element);
}

const person = {
  name: "Sourav",
  age: 25,
};
person.name = "Rahul"; // object এর ভিতরের property চেইঞ্জ হচ্ছে, person এ মান চেইঞ্জ হচ্ছে না।
person.age = 30;
console.log(person);
