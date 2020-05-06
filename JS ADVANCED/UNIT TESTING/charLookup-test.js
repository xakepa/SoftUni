const { expect } = require('chai');
const lookupChar = require('./charLookup');

describe('find char test', () => {
    it('it should return undefined if char !== string or non-integers', () => {
        expect(lookupChar(22, 0)).to.equal(undefined);
        expect(lookupChar('22', 1.2)).to.equal(undefined);
        expect(lookupChar({}, 5.2)).to.equal(undefined);
    });
    it('it should return Incorrect index if index out of range or negative', () => {
        expect(lookupChar('Rosica', 10)).to.equal('Incorrect index');
        expect(lookupChar('Rosica', -10)).to.equal('Incorrect index');
        expect(lookupChar('', 2)).to.equal('Incorrect index');
    });
    it('it should return P', () => {
        expect(lookupChar('Plamen', 0)).to.equal('P');
        expect(lookupChar('Rosi', 3)).to.equal('i');
    });
})