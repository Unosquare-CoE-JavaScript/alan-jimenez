# Credit card mask
Replace all but the last four characters with a #

## Code
```js
// return masked string
function maskify(cc) {
   // Extract the portion of string to mask
   let maskedstring = cc.substring(0, cc.length -4)//?
   // Extract the last 4 chars
   let last4chars = cc.substring(cc.length - 4, cc.length)//?
   // Mask the first chars
   return maskedstring.replace(/[^#]/g,"#") + last4chars // ?
}
```

## Tests
```js
// "What was the name of your first pet?"
maskify("Skippy")
// returns ##ippy
maskify("Nananananananananananananananana Batman!")
// returns ####################################man!
```
