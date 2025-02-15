//Element can be removed using pop() method from last index
const friends = ["Balam", "Kalam", "Salam", "Gelam", "Pailam"];
friends.push("Khailam");
console.log(friends);

// we can pop a single value in a array
friends.pop(); // removes the last element from the array
const out1 = friends.pop(); // can hold the removed element by declaring another variable
const out2 = friends.pop();
console.log(friends);
console.log(out1, out2);
