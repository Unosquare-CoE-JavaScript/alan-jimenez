/**
 * Exes and Ohs
 *
 * Check whether a string has the same amount of x's and o's by returning a boolean. It must be case insensitive.
*/

function XO(str) {
   let oCount = str.match(/o/gi) || []
   let xCount = str.match(/x/gi) || []

   return oCount.length === xCount.length
}

// Tests
XO("ooxx")    // ?
XO("xooxx")   // ?
XO("ooxXm")   // ?
XO("zpzpzpp") // ?
XO("zzoo")    // ?
