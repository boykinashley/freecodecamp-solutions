// For the challenge: Pig Latin
// Use one of these two solutions

/**
 * Solution
 * 
 * @param {*} str 
 * @param {*} before 
 * @param {*} after 
 * @returns 
 */
function myReplace(str, before, after) {
  // Check if First Letter of the before string is Upper Case or lower case
  after = /[A-Z]/.test(before.charAt(0)) ? 
        after.charAt(0).toUpperCase() + after.slice(1) : 
        after.toLowerCase();
  
  // Replace before by after
  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))