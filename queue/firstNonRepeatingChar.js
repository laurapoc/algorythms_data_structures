// JavaScript Program for a Queue based approach
// to find first non-repeating character

// example from google

const MAX_CHAR = 105;

// function to find first non repeating
// character of stream
function firstNonRepeating(str) {
  // count array of size 105(assuming
  // only lower case characters are present)
  const charCount = new Array(MAX_CHAR).fill(0);
  const q = [];
  let uniqLetter;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    q.push(char);
    // find number of a char by ISO char code:
    charCount[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    while (q.length > 0) {
      if (charCount[q[0].charCodeAt(0) - "a".charCodeAt(0)] > 1) {
        q.shift();
      } else {
        uniqLetter = q[0] + " ";
        break;
      }
    }
    if (q.length == 0) {
      uniqLetter = -1 + " ";
    }
  }

  for (const letter of str.split("")) {
    if (letter == uniqLetter) {
      console.log(true);
    }
  }
  return uniqLetter;
}

let str = "aabc";
console.log(firstNonRepeating(str));
console.log(firstNonRepeating("loveleetcode"));
console.log(firstNonRepeating("leetcode"));
