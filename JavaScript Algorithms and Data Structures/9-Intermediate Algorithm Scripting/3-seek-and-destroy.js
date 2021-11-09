// For the challenge : Seek and Destroy

/**
 * Solution
 * 
 * @param {*} arr 
 * @returns 
 */
function destroyer(arr) {

  // Get the other arguments
  // That are not in the array "arr" argument
  // Put them in an array
  let removeEls = [...arguments].filter((item, i) => i != 0)

  // Get all the elements
  // That are not in the array of removeEls
  return arr.filter(item => {
    return !removeEls.includes(item);
  });

}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));