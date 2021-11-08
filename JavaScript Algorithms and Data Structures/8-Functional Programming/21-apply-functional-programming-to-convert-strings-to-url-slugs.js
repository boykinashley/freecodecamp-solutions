// For the challenge : "Apply Functional Programming to Convert Strings to URL Slugs"

/**
 * Solution
 * 
 * @param {*} title 
 * @returns 
 */
function urlSlug(title) {
  
  // Lowercase all the letters
  // The convert the sentence into array
  // Then delete all extra spaces caracters that contains this array
  // The convert the array into a sentence again
  return title.toLowerCase().split(" ").filter(word => word != "").join("-");
}

// Output Tests

console.log(urlSlug(" Winter Is  Coming"))