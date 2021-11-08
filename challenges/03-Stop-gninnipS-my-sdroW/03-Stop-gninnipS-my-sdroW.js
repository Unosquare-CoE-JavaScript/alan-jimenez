/**
 * Stop gninnipS My sdroW!
 *
 * Invert words langer than 5 characters in a sentence.
*/

function spinWords(string) {
   let allwords = string.split(" ")
   let newWords = []

   allwords.map(word => newWords.push(invertWord(word)));
   return newWords.join(" ")
}

function invertWord(originalWord) {
   if (originalWord.length >= 5) {
      let invertedWord = ""
      originalWord.split("").map(char => {
         invertedWord = char + invertedWord
      })
      return invertedWord
   }
   return originalWord
}


// Tests
// Should return:                      Hey wollef sroirraw
spinWords("Hey fellow warriors")  //?

// Should return:                      This is a test
spinWords("This is a test")       //?

// Should return:                      This is rehtona test
spinWords("This is another test") //?