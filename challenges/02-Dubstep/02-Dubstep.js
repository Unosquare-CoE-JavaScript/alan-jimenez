
/**
 * Dubstep
 *
 * Given a remixed song name with the letter **WUB** instead of white spaces, replace the **WUB**
 * letters and add the white spaces to get the original name of the song.
*/

function songDecoder(song) {
   const _WUB_ = new RegExp(/(WUB){1,}/g)
   return song.replace(_WUB_, " ").trim()
}

// Tests
// Expected value:            A B C
songDecoder("AWUBBWUBC") //?

// Expected value:                        A B C
songDecoder("AWUBWUBWUBBWUBWUBWUBC") //?

// Expected value:                                                     WE ARE THE CHAMPIONS MY FRIEND"
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") // ?
