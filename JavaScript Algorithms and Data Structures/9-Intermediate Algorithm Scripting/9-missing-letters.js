// For the challenge: Missing letters
// Use one of these two solutions

/**
 * Solution
 * 
 * @param {*} str 
 * @returns 
 */
function fearNotLetter(str) {
  // Put all the possible letters in an array
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // Get the index of the first letter of the string
  // Inside the letters array
  let indexOfFirstLetter = letters.indexOf(str[0]);

  // Loop through the string
  // Compare each letter to the respective letter in the letters Array
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== letters[indexOfFirstLetter + i]) {
      return letters[indexOfFirstLetter + i];
    }
  }

  return undefined;
}

// Output Tests

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"));