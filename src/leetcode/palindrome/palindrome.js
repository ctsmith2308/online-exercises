// Given a string which consists of lowercase or uppercase letters,
// find the length of the longest palindromes that can be built with those letters.

// Input:
// "abccccdd"

// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

const longestPalindrome = (string) => {
  let hashTable = {};
  let pairs = 0
  for(let i = 0; i < string.length; i ++) {
    if(!!hashTable[string[i]] === false){
      hashTable[string[i]] = 1
    } else {
      hashTable[string[i]] = 0
      pairs += 1
    }
  }

  for(key in hashTable) {
    if(hashTable[key] % 2 === 1) {
      return pairs * 2 + hashTable[key]
    }
  }
  return pairs * 2 + 1;
}

// longestPalindrome(string)

export default longestPalindrome
