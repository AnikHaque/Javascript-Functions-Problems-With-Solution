// Create a function that takes an array of numbers and returns the smallest number in the set.

// Examples:
// findSmallestNum([34, 15, 88, 2]) ➞ 2
// findSmallestNum([34, -345, -1, 100]) ➞ -345

// Solution : 
function findSmallestNum(arr) {
  return Math.min(...arr);
}

// Test cases
console.log(findSmallestNum([34, 15, 88, 2]));      // Output: 2
console.log(findSmallestNum([34, -345, -1, 100])); // Output: -345

