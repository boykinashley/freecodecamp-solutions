// For the challenge : Sum All Numbers in a Range
// Use one of these two solutions

/**
 * Solution 1
 * Use a for Loop in this solution
 * 
 * @param {*} arr 
 * @returns 
 */
function sumAll(arr) {

  // Sort the array to put the smaller number
  // in the first index of the array
  arr.sort((a, b) => a < b ? -1 : 1);

  // Deconstructing the array
  // To put the numbers into variables : a & b
  const [a, b] = arr;

  // Iterate from a to b
  // And sum up all the numbers between them
  let sum = 0;
  for(let i = a; i <= b; i++) {
    sum +=i;
  }

  return sum;

}

/**
 * Solution 2
 * Use a for recursion in this solution
 * 
 * @param {*} arr 
 * @returns 
 */
 function sumAll(arr) {

  // Sort the array to put the smaller number
  // in the first index of the array
  arr.sort((a, b) => a < b ? -1 : 1);

  // Deconstructing the array
  // To put the numbers into variables : a & b
  const [a, b] = arr;

  // Use recursion
  // To sum from a to b
  // by iterate the variable a
  // each time this function called itself
  if(a == b) return a;
  return a + sumAll([a + 1, b])
}

// Output Test

console.log(sumAll([4, 1]));