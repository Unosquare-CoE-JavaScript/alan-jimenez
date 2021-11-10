/**
 * Persistent Bugger
 *
 * Take a positive number and return its multiplicative persistence (the number of times you must multiply
 * the digits until you reach a single digit).
 */
function persistence(num) {
   let persistence = 0
   let numbers = num.toString().split("")

   while (numbers.length > 1) {
      let result = numbers[0]
      for (let index = 1; index < numbers.length; index++) {
         const number = numbers[index];
         console.log(result, "*", number);
         result = result * number // ?
      }
      numbers = result.toString().split("")
      persistence += 1
   }

   return persistence
}

// Expected result: 3
persistence(39) //?

// Expected result: 0
persistence(4) //?

// Expected result: 2
persistence(25) //?

// Expected result: 4
persistence(999) //?
