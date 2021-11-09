# Duplicate Encoder
Convert a string to a new string, replacing each unique character with a "(".
If the character appears twice or more, replace it with a ")".
Ignore capitalization.

## Code
```javascript
function replace(char, word) {
   const UNIQUE_CHAR = "("
   const REPEATED_CHAR = ")"

   let REGEX = new RegExp(`([${char}]).*\\1`, "gi")
   if (REGEX.test(word)) {
      return REPEATED_CHAR
   }
   return UNIQUE_CHAR
}

function duplicateEncode(word) {
   let finalstring = word.replace(/./gi, char => replace(char, word));

   return finalstring
}
```

## Tests
```javascript

// Should return:               (((
duplicateEncode("din")     //?

// Should return:               ()()()
duplicateEncode("recede")  //?

// Should return:               )())())
duplicateEncode("Success") //?

// Should return:               ))((
duplicateEncode("(( @")    //?
```
