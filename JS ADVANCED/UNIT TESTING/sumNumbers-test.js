const { expect } = require('chai');
const sum = require('./sumNumbers');

describe('Sub tests', () => {
    it('Sub sum computes [1,1] => 2', () => {
        expect(sum([1, 1])).to.equal(2)
    });
    it('Sub sum computes [1,1,5] => 7', () => {
        expect(sum([1, 1, 5])).to.equal(7)
    });
    it('Sub sum computes [1,1,5,3] => 7', () => {
        expect(sum([1, 1, 5, 3])).to.equal(10)
    });
})