// Challenge For: Arguments Optional

/**
 * Solution
 * 
 * @returns 
 */
function addTogether() {

  // Destructure the arguments object
  // Put the vlaues into variables : a, b
  const [a, b] = arguments;

  if(isNaN(a)) return undefined;
  if(typeof(b) === 'number') return a + b;
  if(typeof b === 'string') return undefined;

  return function(){
    // Destructure the argument passed to the callback function
    // Put the vlaue into variable : b
    const [b] = arguments;
    if(typeof(b) !== 'number') return undefined
    return a + b;
  };

}

// Output Test

console.log(addTogether(2,3));
console.log(addTogether(2));
console.log(addTogether(5)(7));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]))