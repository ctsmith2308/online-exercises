import { expect } from 'chai'
import longestPalindrome from './palindrome.js';

describe('Should run the tests for palindrome challenge', () =>{
    it('Should run the first test', () => { 
        let value =  longestPalindrome("abccccdd");
        let result = 7
        expect(value).to.eql(result)
    })
})