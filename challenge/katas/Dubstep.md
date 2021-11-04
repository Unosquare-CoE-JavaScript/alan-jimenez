# Dubstep
Given a remixed song name with the letter **WUB** instead of white spaces, replace the **WUB** letters and add the white spaces to get the original name of the song.

## Code
```js
function songDecoder(song) {
   const _WUB_ = new RegExp(/(WUB){1,}/g)
   return song.replace(_WUB_, " ").trim()
}
```

## Tests
```js
// Tests results
songDecoder("AWUBBWUBC") // A B C
songDecoder("AWUBWUBWUBBWUBWUBWUBC") // A B C
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") // WE ARE THE CHAMPIONS MY FRIEND
```
