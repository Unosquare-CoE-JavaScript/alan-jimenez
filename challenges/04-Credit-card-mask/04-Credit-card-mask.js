/**
 * Credit card mask
 *
 * Replace all but the last four characters with a #
*/

// return masked string
function maskify(cc) {
   // Extract the portion of string to mask
   let maskedstring = cc.substring(0, cc.length - 4)
   // Extract the last 4 chars
   let last4chars = cc.substring(cc.length - 4, cc.length)
   // Mask the first chars
   return maskedstring.replace(/[^#]/g, "#") + last4chars
}

// Tests
// Question: "What was the name of your first pet?"
// Should return:      ##ippy
maskify("Skippy") //?
// Should return:                                        ####################################man!
maskify("Nananananananananananananananana Batman!") //?
