/**
 * Get the Middle Character
 *
 * Given a word, return the middle character of the word. If the word's length is odd, return
 * the middle character. If the word's length is even, return the middle 2 characters.
*/

function getMiddle(s) {
   let wordlength = s.length;
   let isOdd = wordlength % 2 // ?
   if (wordlength <= 2) {
      return s
   }
   let start = parseInt(wordlength / 2)
   start = isOdd ? start : start - 1
   let size = isOdd ? 1 : 2
   return s.substr(start, size)
}

// Tests
// Expected return:        es
getMiddle("test")    // ?

// Expected return:        t
getMiddle("testing") // ?

// Expected return:        dd
getMiddle("middle")  // ?

// Expected return:        A
getMiddle("A")       // ?
