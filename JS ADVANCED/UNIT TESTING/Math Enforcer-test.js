const { expect } = require('chai');
const mathEnforcer = require('./Math Enforcer');

describe('test functionality', () => {
    it('"10" as string => undefined', () => {
        expect(mathEnforcer.addFive('10')).to.equal(undefined);
        expect(mathEnforcer.addFive('noname')).to.equal(undefined);
    })
    it('10 as num => 15', () => {
        expect(mathEnforcer.addFive(10)).to.equal(15);
        expect(mathEnforcer.addFive(-2)).to.equal(3);
        expect(mathEnforcer.addFive(0)).to.equal(5);
        expect(mathEnforcer.addFive(0.5)).to.equal(5.5);
    });
    it('string should return undefined', () => {
        expect(mathEnforcer.subtractTen('Michael')).to.equal(undefined);
        expect(mathEnforcer.subtractTen('Pitka')).to.equal(undefined);
    });
    it('10 subtract 10 => 0', () => {
        expect(mathEnforcer.subtractTen(10)).to.equal(0);
        expect(mathEnforcer.subtractTen(100.1)).to.equal(90.1);
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    });
    it('if one parameter NaN (string) => undefined', () => {
        expect(mathEnforcer.sum('Pe6o', 10)).to.equal(undefined);
        expect(mathEnforcer.sum(10, 'Pesho')).to.equal(undefined);
        expect(mathEnforcer.sum('Pe6o', 'Don4o')).to.equal(undefined);
    });
    it('if both param are valid return sum 10,10 => 20', () => {
        expect(mathEnforcer.sum(10, 10)).to.equal(20);
        expect(mathEnforcer.sum(10, 5.55)).to.equal(15.55);
        expect(mathEnforcer.sum(10.5, 5.5)).to.equal(16);
    });
})