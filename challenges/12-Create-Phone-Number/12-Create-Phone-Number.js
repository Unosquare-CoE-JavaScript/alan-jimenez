/**
 * Create Phone Number
 *
 * Write a function that accepts an array of 10 integers (between 0 and 9),
 * that returns a string of those numbers in the form of a phone number.
 */
function createPhoneNumber(numbers) {
   let output = numbers.join("")
   let code = output.substring(0, 3)
   let area = output.substring(3, 6)
   let last = output.substring(6)
   const PHONE_FORMAT = `(${code}) ${area}-${last}`
   return PHONE_FORMAT //?
}

// Tests
// Should return: (123) 456-7890
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) //?

// Should return: (111) 111-1111
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) //?

// Should return: (123) 456-7890
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) //?
