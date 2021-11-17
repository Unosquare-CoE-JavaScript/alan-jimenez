# Where my anagrams at?
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters.

## Code
```javascript
function anagrams(word, words) {
   let foundAnagrams = []

   if (Array.isArray(words)) {
      foundAnagrams = words.filter(currentWord => compareCharCount(word, currentWord) ? currentWord : undefined)
      return foundAnagrams
   } else {
      if (compareCharCount(word, words)) {
         foundAnagrams.push(words)
      }
   }

   return foundAnagrams
}

function compareCharCount(original, target) {
   let charsOriginal = countChars(original)
   let charsTarget = countChars(target)

   // If the length is different exit
   if (Object.keys(charsOriginal).join("").length !== Object.keys(charsTarget).join("").length) {
      return false
   }
   for (const char in charsOriginal) {
      if (charsOriginal.hasOwnProperty(char)) {
         if (charsOriginal[char] !== charsTarget[char]) {
            return false
         }
      } else {
         return false
      }
   }

   return true //?
}

/**
 * Count how many times a char appears in the word
 */
function countChars(word) {
   let KEYS = word.split("")

   let keyList = {}
   KEYS.forEach(k => {
      let count = (keyList.hasOwnProperty(k) ? keyList[k] : 0) + 1
      keyList[k] = count
   });

   return keyList
}
```

## Tests
```javascript

// Should return [ 'baab' ]
anagrams('abba', 'baab') //?

// Should return [ 'bbaa' ]
anagrams('abba', 'bbaa') //?

// Should return []
anagrams('abba', 'abbba') //?

// Should return []
anagrams('abba', 'abca') //?

// Should return [ 'aabb', 'bbaa' ]
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'], ['aabb', 'bbaa']) //?

// Should return ['carer', 'racer'])
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) //?
```
