function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return false;
  }
  let passCount = 0;
  let failCount = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
      passCount++;
    } else {
      failCount++;
    }
  }
  if (passCount > failCount) {
    return true;
  } else {
    return false;
  }
}

console.log(willSuccess([60, 70, 80, 40, 30])); // ✅ true
console.log(willSuccess([48, 48, 92, 100])); // ❌ false
console.log(willSuccess([48, 48, 50, 50, 100])); // ✅ true
console.log(willSuccess([])); // ❌ false
console.log(willSuccess([90])); // ✅ true
console.log(willSuccess([90, 99, 87, 48, 34, 49])); // ❌ false
console.log(willSuccess("100 , 100")); // ❌ "Invalid"
console.log(willSuccess(90)); // ❌ "Invalid"
console.log(willSuccess([])); // ❌ "Invalid"
