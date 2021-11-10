/**
 * Find the missing letter
 *
 * Takes an array of consecutive (increasing) letters and returns the missing letter in the array.
 * - You will always get an valid array
 * - Array will be always exactly one letter be missing
 * - The length of the array will always be at least 2.
 * - The array will always contain letters in only one case.
 */
function findMissingLetter(array) {
   let missingchar = ""
   array.forEach((char, pos) => {
      let curChar = char.charCodeAt()

      if (pos < array.length - 1) {
         let nextChar = array[pos + 1].charCodeAt()
         curChar == (nextChar - 1) //?
         if (curChar == (nextChar - 1) === false) {
            missingchar = String.fromCharCode(nextChar - 1)
         }
      }
   });
   return missingchar
}

// Expected value: e
findMissingLetter(['a', 'b', 'c', 'd', 'f']) //?

// Expected value: P
findMissingLetter(['O', 'Q', 'R', 'S'])//?
