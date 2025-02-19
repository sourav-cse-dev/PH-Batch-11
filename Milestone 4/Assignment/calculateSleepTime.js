function calculateSleepTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }
  for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number") {
      return "Invalid";
    }
  }
  let totalSeconds = 0;
  for (let i = 0; i < times.length; i++) {
    totalSeconds += times[i];
  }
  let hour = Math.floor(totalSeconds / 3600);
  let remainingAfterHours = totalSeconds % 3600;
  let minute = Math.floor(remainingAfterHours / 60);
  let second = remainingAfterHours % 60;
  return { hour: hour, minute: minute, second: second };
}

console.log(calculateSleepTime([1000, 499, 519, 300]));
// ✅ { hour: 0, minute: 38, second: 38 }

console.log(calculateSleepTime([1000, 2000, 725]));
// ✅ { hour: 1, minute: 2, second: 5 }

console.log(calculateSleepTime([100, 3800]));
// ✅ { hour: 1, minute: 5, second: 0 }

console.log(calculateSleepTime([]));
// ✅ { hour: 0, minute: 0, second: 0 }

console.log(calculateSleepTime([5600]));
// ✅ { hour: 1, minute: 33, second: 20 }

console.log(calculateSleepTime([100, 3800, "90"]));
// ❌ "Invalid"

console.log(calculateSleepTime("Hello"));
// ❌ "Invalid"
