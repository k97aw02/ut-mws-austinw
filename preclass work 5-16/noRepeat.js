/* Goal return first no repeating character
  TODO
  1. Loop the string
    1.1 Camparing the charater with the rest of the string (indexOf)
      1.1.a If the character exists -> we do nothing
      1.1.b If the character do not exist in the rest of the string -> return it
      */

/*
function getFirstCharNoRepeat (string){
        for(let i=0; i<string.length; i++) {
        let currentChar = string[i];
        if (
          string.slice(i+1).indexOf(currentChar) === -1 &&
          string.slice(0, i - 1).indexOf(currentChar)  === -1
        ){
          return currentChar;
      }
      }
}
*/

const map = {};
for (const char of string) {
  if (!(char in amp)) {
    map[char] = 1;
  } else {
    map[char]++;
  }
  }
for (const char in map) {
  if (map[char] === 1) {

  }
}

console.log("the quick brown fox jumps over the calm kitten quietly")