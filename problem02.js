// Write a function that returns the string "something" joined with a space " " and the given argument a.
// Examples:
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// solution : 
function giveMeSomething(a) {
  return "something " + a;
}

// Test cases
console.log(giveMeSomething("is better than nothing")); // Output: "something is better than nothing"
console.log(giveMeSomething("Bob Jane")); // Output: "something Bob Jane"

