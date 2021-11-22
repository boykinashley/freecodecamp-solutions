// Challenge for : Binary Agent

/**
 * Solution
 * 
 * @param {*} str 
 * @returns 
 */
function binaryAgent(str) {

  // Split the string into array
  // Then convert each code into string
  // Then cionvert the array back to string
  return str.split(" ").map(code => {
    return String.fromCharCode(parseInt(code, 2))
  }).join("");

}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));