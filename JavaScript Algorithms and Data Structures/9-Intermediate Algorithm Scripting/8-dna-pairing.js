// For the challenge: DNA Pairing
// Use one of these two solutions

/**
 * Solution
 * 
 * @param {*} str 
 * @returns 
 */
function pairElement(str) {
  // Put the possible pair in an object
  let pairs = {
    'G': 'C',
    'C': 'G',
    'A': 'T',
    'T': 'A'
  };

  let result = [];

  // Loop throug every letters
  // And put it with its related pair into and array
  for(let i = 0; i < str.length; i++) {
    result.push([str[i], pairs[str[i]]])
  }

  return result;
}

// Output Tests

console.log(pairElement("GCG"));