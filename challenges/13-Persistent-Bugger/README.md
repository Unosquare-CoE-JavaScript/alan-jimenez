# Persistent Bugger
Write a function, persistence, that takes in a positive parameter num and returns
its multiplicative persistence, which is the number of times you must multiply
the digits in num until you reach a single digit.


## Code
```javascript
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
```

## Tests
```javascript
// Expected result: 3
persistence(39) //?

// Expected result: 0
persistence(4) //?

// Expected result: 2
persistence(25) //?

// Expected result: 4
persistence(999) //?
```
