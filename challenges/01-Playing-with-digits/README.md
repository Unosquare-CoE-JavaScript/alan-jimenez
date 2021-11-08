#  Playing with digits
Given a positive integer **n** written as **abcd** (where every number is a letter in that order) and positive integer **p**, find the positive integer **k** (if exists) as the **sum of the digits** of **n** taken to the **successive powers** of **p** is equal to **k * n**. In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

## Code
```js
function digPow(n, p) {
   // Use absolute values
   n = Math.abs(n)
   p = Math.abs(p)

   let numbers = n.toString().split("") //?
   let sum = 0
   let nextP = p

   for (let index = 0; index < numbers.length; index++) {
      nextP = p + index
      const currentNumber = numbers[index];
      let powResult = Math.pow(currentNumber, nextP)
      sum = sum + powResult
   }

   let k = parseInt(sum / n)
   return k === 0 ? -1 : k
}
```

## Tests
```js
digPow(89, 1) // 1
digPow(92, 1) // -1
digPow(695, 2) // 2
digPow(46288, 3) // 51
```
