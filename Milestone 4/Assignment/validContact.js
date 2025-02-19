function validContact(contact) {
  if (contact.length !== 11) {
    return false;
  }
  if (!contact.startsWith("01")) {
    return false;
  }
  if (contact.includes(" ")) {
    return false;
  }
  if (typeof contact !== "string") {
    return "Invalid";
  }
  return true;
}

console.log(validContact("01819234567")); // ✅ true
console.log(validContact("0181923 4567")); // ❌ false
console.log(validContact("018192345679")); // ❌ false
console.log(validContact(["01987654321"])); // ❌ "Invalid"
console.log(validContact("01345678900")); // ✅ true
console.log(validContact("02145678900")); // ❌ false
console.log(validContact(true)); // ❌ "Invalid"
