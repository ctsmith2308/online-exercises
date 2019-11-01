import longestPalindrome from './palindrome.js';

describe('Should run the tests for palindrome challenge', () =>{
    it('Should run the first test', () => { 
        let string =  "abccccdd";
        let result = 7;
        expect(longestPalindrome(string)).to.equal(result);
    })
})