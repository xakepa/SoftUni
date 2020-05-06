const { expect } = require('chai');
const { assert } = require('chai');
const isSymmetric = require('./Check for Symmetry');

describe('symmetry tests', () => {
    it('symmetric, it should return true', () => {
        expect(isSymmetric([1, 5, 1])).to.equal(true)
    });
    it('symmetric, it should return true', () => {
        expect(isSymmetric([1])).to.equal(true)
    });
    it('symmetric, it should return true', () => {
        expect(isSymmetric(['Plamen', true, 'Plamen'])).to.equal(true)
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5, 'hi', { a: 5 }, 8, { a: 5 }, 'hi', 5])).to.be.equal(true);
    });
    it('non-array, it should return false', () => {
        expect(isSymmetric()).to.equal(false)
    });
})