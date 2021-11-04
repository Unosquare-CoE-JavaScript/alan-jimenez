# Stop gninnipS My sdroW!
Invert words langer than 5 characters in a sentence.

## Code
```js
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
```

## Tests
```js
// Tests results
spinWords("Hey fellow warriors")
// returns "Hey wollef sroirraw"
spinWords("This is a test")
// returns "This is a test"
spinWords("This is another test")
// returns "This is rehtona test"
```
