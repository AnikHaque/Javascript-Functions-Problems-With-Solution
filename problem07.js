// Create a function that accepts an array and returns the last item in the array.

// Examples:
// getLastItem([1, 2, 3]) ➞ 3
// getLastItem(["cat", "dog", "duck"]) ➞ "duck"

// Solution : 
function getLastItem(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }
  return arr[arr.length - 1];
}

// Test cases
console.log(getLastItem([1, 2, 3]));                  // Output: 3
console.log(getLastItem(["cat", "dog", "duck"]));     // Output: "duck"
console.log(getLastItem([]));                         // Output: undefined

