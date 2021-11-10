# Write Number in Expaded Form

Given a number, return it as a string in Expanded Form.

Example:

12 -> Should return '10 + 2'

42 -> Should return '40 + 2'

70304 -> Should return '70000 + 300 + 4'


## Code
```javascript
function expandedForm(num) {
   let expanded = []
   let numbers = num.toString().split("")
   numbers.map((number, pos) => {
      if (number != 0) {
         let zeroright = numbers.length - (pos + 1)
         let thenumber = Array(zeroright).fill("0")
         expanded.push(number + thenumber.join(""))
      }
   })

   return expanded.join(" + ")
}
```

## Tests
```javascript
expandedForm(12) //?

// Should return '40 + 2'
expandedForm(42) //?

// Should return '70000 + 300 + 4'
expandedForm(70304) //?
```
