// For the challenge: Wherefore art thou

/**
 * Solution
 * Use filter to filter the collections
 * 
 * @param {*} collection 
 * @param {*} source 
 * @returns 
 */
function whatIsInAName(collection, source) {

  const arr = collection.filter(item => {

    // Loop through the source object keys
    // Then delete all the collection object
    // That doesn't have either one of the property
    // Or the one of the property value
    for (let i in source) {
      if(!item.hasOwnProperty(i) || item[i] != source[i] ) {
        return false
      }
    }
    return true;
  })

  return arr;
}

// Output tests

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));