const { expect } = require('chai');
const sum = require('./subSum');

describe('Sub sum lab task', () => {
    it('Sub sum computes [1,1] => 2', () => {
        expect(sum([1, 1])).to.equal(2)
    });
    it('Sub sum computes [1,1, 1] => 2', () => {
        expect(sum([1, 1, 1], 1)).to.equal(2)
    });
})