// For the challenge: Pig Latin
// Use one of these two solutions

/**
 * Solution 1
 * 
 * @param {*} str 
 * @returns 
 */
function translatePigLatin(str) {

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let indexOfFirstVowel = -1;

  // Loop through each letter in the string
  // Check if the one of these letters is a vowel in the vowels array
  // If so, save the index of this vowel & stop looping (break)
  for(let i = 0; i < str.length; i++) {

    if(vowels.includes(str[i])) {
      indexOfFirstVowel = i;
      break;
    }

  }

  // If the word starts with a vowel (index 0)
  // The the suffix is way
  // In all other 
  let suffix = indexOfFirstVowel == 0 ? "way" : "ay";

  // If there is no vowels in the string
  // Just add the suffix (ay)
  if(indexOfFirstVowel == -1) {
    return str + suffix;
  }

  // If there is vowels
  // Take the substring started with the vowel
  // Plus the beginning
  // Plus the suffix
  return str.slice(indexOfFirstVowel) + str.slice(0, indexOfFirstVowel) + suffix;
}

/**
 * Solution 2
 * 
 * @param {*} str 
 * @returns 
 */
function translatePigLatin(str) {

  // Search the index of first vowel
  // By using the search method
  // And the regex
  let indexOfFirstVowel = str.search(/[aeiou]/i);

  // If the word starts with a vowel (index 0)
  // The the suffix is way
  // In all other 
  let suffix = indexOfFirstVowel == 0 ? "way" : "ay";

  // If there is no vowels in the string
  // Just add the suffix (ay)
  if(indexOfFirstVowel == -1) {
    return str + suffix;
  }

  // If there is vowels
  // Take the substring started with the vowel
  // Plus the beginning
  // Plus the suffix
  return str.slice(indexOfFirstVowel) + str.slice(0, indexOfFirstVowel) + suffix;
}

// Output solutions

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"))