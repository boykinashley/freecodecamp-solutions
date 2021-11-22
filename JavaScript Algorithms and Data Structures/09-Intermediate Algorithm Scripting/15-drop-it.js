// Challenge for : Drop it

/**
 * Solution
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
function dropElements(arr, func) {

  //Check the idex where the first element is true
  // When find it, save the value into the "index" variable
  let index = null;
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])){
      index = i;
      break;
    }
  }

  // If there is nothing true (index is NULL) 
  // Then return an empty array
  // If something is true, slice the array
  // Start with the index with the true value
  return index !== null ? arr.slice(index) : [];

}

// Output Tests

console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));