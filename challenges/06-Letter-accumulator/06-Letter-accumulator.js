/**
 * Accumulator function
 *
 * Repeat each letter incrementally
*/

function accum(s) {
   let allLetters = s.split("")
   allLetters.forEach((key, curent_number) => {
      let list = Array(curent_number + 1).fill(key.toLowerCase())
      list[0] = key.toUpperCase()
      allLetters[curent_number] = list.join("")
   });

   return allLetters.join("-")
}


// Tests
// Should return:      A-Bb-Ccc-Dddd
accum("abcd")    // ?
// Should return:      R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy
accum("RqaEzty") // ?
// Should return:      C-Ww-Aaa-Tttt
accum("cwAt")    // ?