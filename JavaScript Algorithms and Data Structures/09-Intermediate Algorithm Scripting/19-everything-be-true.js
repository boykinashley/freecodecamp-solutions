// Challenge for: Everything be true

/**
 * Solution
 * 
 * @param {*} collection 
 * @param {*} pre 
 * @returns 
 */
function truthCheck(collection, pre) {

  // Loop throgh the collection
  // Check if all objects has the property "pre"
  // And if the value of property "pre" is true
  return collection.every((item) => {
    return item.hasOwnProperty(pre) && item[pre];
  });
  
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));