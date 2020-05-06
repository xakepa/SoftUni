const { expect } = require('chai');
const rgbToHexColor = require('./rgbToHex');

describe('test colors from RGB to HEX', () => {
    it('non-integers should return undefined', () => {
        expect(rgbToHexColor(2.56, 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(5, 2.56, 0)).to.equal(undefined);
        expect(rgbToHexColor(5, 0, 25.6)).to.equal(undefined);
    });
    it('if less than 0 it should return undefined', () => {
        expect(rgbToHexColor(-5, 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(0, -5, 0)).to.equal(undefined);
        expect(rgbToHexColor(5, 0, -5)).to.equal(undefined);
    });
    it('if more than 255 it should return undefined', () => {
        expect(rgbToHexColor(256, 0, 0)).to.equal(undefined);
        expect(rgbToHexColor(5, 256, 0)).to.equal(undefined);
        expect(rgbToHexColor(5, 55, 256)).to.equal(undefined);
    });
    it('it should return #00000 white', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        expect(rgbToHexColor(0, 255, 255)).to.equal('#00FFFF')
    });
})