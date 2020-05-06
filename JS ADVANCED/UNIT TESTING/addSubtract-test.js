const { expect } = require('chai');
const createCalculator = require('./addSubtract');

let calc;
beforeEach(() => {
    calc = createCalculator();
})

describe('test calc functions', () => {
    it('add 1 => 1', () => {
        expect(calc.add(1)).to.equal(undefined);
        expect(calc.get()).to.equal(1)
    });
    it('subtract => -1', () => {
        expect(calc.subtract(1)).to.equal(undefined);
        expect(calc.get()).to.equal(-1);
    });
    it('get 0 => 0', () => {
        expect(calc.get()).to.equal(0);
    });
    it('add str "1" => 1', () => {
        expect(calc.add('1')).to.equal(undefined);
        expect(calc.get()).to.equal(1)
    });
})