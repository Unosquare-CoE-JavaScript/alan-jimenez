# Accumulator function
Repeat each letter incrementally

## Code
```js
function accum(s) {
   let allLetters = s.split("")
   allLetters.forEach((key, curent_number) => {
      let list = Array(curent_number + 1).   fill(key.toLowerCase())
      list[0] = key.toUpperCase()
      allLetters[curent_number] = list.join("")
   });

   return allLetters.join("-")
}
```

## Tests
```js
accum("abcd")
// returns: A-Bb-Ccc-Dddd

accum("RqaEzty")
// returns: R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy

accum("cwAt")
// returns: C-Ww-Aaa-Tttt
```