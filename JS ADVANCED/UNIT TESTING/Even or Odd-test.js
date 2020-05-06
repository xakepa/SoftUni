const { expect } = require('chai');
const isOddOrEven = require('./Even or Odd');

describe('Test even odd functionality', () => {
    it('1 => undefined', () => {
        expect(isOddOrEven(1)).to.equal(undefined);
    });
    it('Plamen (length 6) => even', () => {
        expect(isOddOrEven('Plamen')).to.equal('even');
    });
    it('Mihaela (length 7) => odd', () => {
        expect(isOddOrEven('Mihaela')).to.equal('odd');
    });
})