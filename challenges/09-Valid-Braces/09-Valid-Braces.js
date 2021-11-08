/**
 * Valid braces
 * 
 * Take a string of braces, determine if the order of the braces is valid, and return `true` or `false` according to the validity.
 * Only comptemplates non-empty strings and parenteses, brackets, and curly braces. `()[]{}` .
*/

function validBraces(braces) {
   const OPENING_BRACES = ["(", "{", "["]
   const CLOSING_BRACES = [")", "}", "]"]

   let allchars = braces.split("")
   let lastopened = []

   allchars.forEach(char => {
      let isopening = OPENING_BRACES.indexOf(char)
      let isclosing = CLOSING_BRACES.indexOf(char)

      if (isopening > -1) {
         lastopened.unshift(char)
      }
      if (isclosing > -1) {
         if (lastopened[0] == OPENING_BRACES[isclosing]) {
            lastopened.shift(char)
         }
      }
   });

   return lastopened.length == 0 ? true : false
}


// Tests
// Expected result:            true
validBraces("()")         //?

// Expected result:            true
validBraces("[]")         //?

// Expected result:            true
validBraces("{}")         //?

// Expected result:            true
validBraces("(){}[]")     //?

// Expected result:            true
validBraces("([{}])")     //?

// Expected result:            false
validBraces("(}")         //?

// Expected result:            false
validBraces("[(])")       //?

// Expected result:            true
validBraces("({})[({})]") //?

// Expected result:            true
validBraces("(})")        //?


