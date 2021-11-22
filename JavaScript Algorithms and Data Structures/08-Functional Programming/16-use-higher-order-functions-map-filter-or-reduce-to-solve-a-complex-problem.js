// Use one of these two solutions
// For the challenge : "Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem"


/**
 * Solution 1
 * I use the "filter" method to implement this solution
 * 
 * @param {*} arr 
 * @returns {Object}
 */
const squareList = arr => {

  // Use filter to filter all the positive integers
  // The map (modified) the filtered array
  // To put the square of each item
  return arr.filter(n => Number.isInteger(n) && n > 0)
            .map(n => n * n);

};

/**
 * Solution 2
 * I use the "reduce" method to implement this solution
 * 
 * @param {*} arr 
 * @returns {Object}
 */
 
const squareList = arr => {
  
  // Use reduce to loop through the array
  // Then check all the positive Integer in the array
  // Push the square of these integers into "myArray"
  return arr.reduce((myArray, n) => {
    if(Number.isInteger(n) && n > 0) {
      myArray.push(n * n)
    }
    return myArray;
  }, []);

};


// Output Tests

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);