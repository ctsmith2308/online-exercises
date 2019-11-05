import twoSums from './twoSums.js';
import { expect } from 'chai'

describe('Should run the tests for twoSums challenge', () =>{
    it('Should run the first test', () => { 
        let nums = [2,7,11,15]
        let target = 9
        expect(twoSums(nums,target)).to.eql([0,1])
    })
})