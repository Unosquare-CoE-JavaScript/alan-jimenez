/**
 * RGB to Hex Conversion
 *
 * Create a method wich receives the rgb decimal values and return a hexadecimal representation of the value.
 * Valid decimal values are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
 *
 * Length size must be 6 characters and capital letters.
*/

function rgb(r, g, b) {
   let hexred = applyHexFormatRules(r)
   let hexgreen = applyHexFormatRules(g)
   let hexblue = applyHexFormatRules(b)

   return `${hexred}${hexgreen}${hexblue}`
}

function applyHexFormatRules(input) {
   let output = input
   // Input must be bigger than 0
   output = output < 0 ? 0 : output
   // Input must be lower than 255
   output = output > 255 ? 255 : output
   // Convert to HEX and uppercase
   output = output.toString(16).toUpperCase()
   // Must be 2 chars
   output = output.length == 1 ? `0${output}` : output
   return output
}

// Tests
rgb(0, 0, 0)       // ?
rgb(0, 0, -20)     // ?
rgb(300, 255, 255) // ?
rgb(173, 255, 47)  // ?
