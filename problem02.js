// Write a function that returns the string "something" joined with a space " " and the given argument a.
// Examples:
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// solution : 
function getLastItem(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr[arr.length - 1];
  } else {
    // Return some default value or handle the case when the array is empty or not an array
    return undefined;
  }
}
