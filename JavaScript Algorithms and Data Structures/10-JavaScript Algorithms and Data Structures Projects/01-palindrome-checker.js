// Challenge For: Palindrome Checker

/**
 * Solution
 * 
 * @param {*} str 
 * @returns 
 */
function palindrome(str) {

  // Parse the string
  // To eliminate all unwanted caracters
  let convString = str.toLowerCase().split(/[():\/\-,._\s]/).join("");

  // Reverse the paresed string
  let reverseString = convString.split("").reverse().join("");

  return convString === reverseString;

}

// Output Test

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("nope"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));