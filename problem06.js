//  Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

// Examples:
// divisible(1) ➞ false
// divisible(1000) ➞ true

// Solution : 
function divisible(num) {
  return num % 100 === 0;
}

// Test cases
console.log(divisible(1));    // Output: false
console.log(divisible(1000)); // Output: true

