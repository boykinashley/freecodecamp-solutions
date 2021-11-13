// Challenge for : Convert HTML Entities

/**
 * Solution
 * 
 * @param {*} str 
 * @returns 
 */
function convertHTML(str) {

  // Objects that hold
  // All the convert enities
  let entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    '\'': "&apos;"
  }

  return str.split("").map(letter => {

    // If the letter has part the entities object
    // Then return this entity
    // Else return the letter
    if(entities[letter]){
      return entities[letter];
    }
    return letter;
  }).join("");

}

// Output Tests

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Schindler's List"));