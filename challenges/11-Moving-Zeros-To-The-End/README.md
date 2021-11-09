# Moving Zeros To The End
Take and array and move all the zeros to the end, preserving the order of the other elements.

## Code
```javascript
var moveZeros = function (arr) {
   let orderedArr = []
   let zeros = []
   arr.map((n) => {
      if (n === 0) {
         zeros.push(n)
      } else {
         orderedArr.push(n)
      }
   })
   orderedArr.push(...zeros)
   return orderedArr //?
}
```

## Tests
```javascript
// returns[false,1,1,2,1,3,"a",0,0]
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) //?
```
