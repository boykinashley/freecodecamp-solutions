// For the challenge: sorted union

/**
 * Solution
 * 
 * @param {*} arr 
 * @returns 
 */
function uniteUnique(arr) {

  // Use reduce to loop through all the arguments arrays
  return [...arguments].reduce((arrs, item) => {

    // For all number in each array
    // Check if the current number is already pushed
    // Into the accumulated array (arrs)
    item.forEach(item => {
      if(!arrs.includes(item)){
        arrs.push(item);
      }
    })
    return arrs;
  }, []);

}

// Output Tests

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))