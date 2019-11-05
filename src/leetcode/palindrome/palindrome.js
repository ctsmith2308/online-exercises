// Given a string which consists of lowercase or uppercase letters,
// find the length of the longest palindromes that can be built with those letters.

// Input:
// "abccccdd"

// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.


const longestPalindrome = (s) => {
  let hashTable = {};
  let pairs = 0
  for(let i = 0; i < s.length; i ++) {
    if(!!hashTable[s[i]] === false){
      hashTable[s[i]] = 1
    } else {
      hashTable[s[i]] = 0
      pairs += 1
    }
  }
  for(let key in hashTable) {
    if(hashTable[key] % 2 === 1) {
      return pairs * 2 + hashTable[key]
    }
  }
  return pairs * 2;
}

let s = "abccccdd";
//  console.log(longestPalindrome(s))
export default longestPalindrome
