const { expect } = require('chai');
const StringBuilder = require('./StringBuilder');

describe('StringBuilder', () => {
    it('Can be instantiated with a passed without anything', () => {
        expect(new StringBuilder()).to.be.a('object');
    });
    it('Can be instantiated with a passed in string argument', () => {
        const expected = new StringBuilder('test');
        expect(expected._stringArray).to.have.lengthOf(4)
    });
    it('append(string)', () => {
        const expected = new StringBuilder('test');
        expected.append('test')
        expect(expected._stringArray).to.have.lengthOf(8)
    });
    it('append(string) - if appends in the end of str', () => {
        const expected = new StringBuilder('Te');
        expected.append('test');
        expect(expected._stringArray[0]).to.be.equal('T');
        expect(() => expected.append(1000, 1)).to.throw('Argument must be string');
    });
    it('perpend(string)', () => {
        const expected = new StringBuilder('test');
        expect(() => expected.prepend(1000, 1)).to.throw('Argument must be string');
    });
    it('remove(startIndex, length)', () => {
        const expected = new StringBuilder('test');
        expected.remove(1, 1)
        expect(expected._stringArray[1]).to.equal('s');
    });
    it('insertAt(string, index)', () => {
        const expected = new StringBuilder('test');
        expect(() => expected.insertAt(1000, 1)).to.throw('Argument must be string');
    });
    it('toString()', () => {
        const expected = new StringBuilder('test');
        expect(expected.toString()).to.equal('test');
    });
    it('diff type test', () => {
        expect(() => new StringBuilder(665)).to.throw('Argument must be string');
    });
    it('diff type test', () => {
        expect(() => new StringBuilder({ t: true })).to.throw('Argument must be string');
    });
})