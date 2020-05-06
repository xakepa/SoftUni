let SkiResort = require('./solution');
const { expect } = require('chai');


let resort
beforeEach(() => {
    resort = new SkiResort('Borovec');
})

describe('SkiResort constructor tests', () => {
    it('should initialize property correctly', () => {
        expect(resort.name).to.equal('Borovec');
        expect(resort.voters).to.equal(0);
        expect(resort.hotels).to.deep.equal([]);
    });
});

describe('bestHotel() getter', () => {
    it('should return No votes yet', () => {
        expect(resort.bestHotel).to.equal('No votes yet');
    });
    it('should return correct output', () => {
        resort.build('Ski', 10)
        resort.leave('Ski', 3, 2);
        expect(resort.bestHotel).to.equal('Best hotel is Ski with grade 6. Available beds: 13')
    });
});

describe('build()', () => {
    it('should return error if name is empty or beds < 1', () => {
        expect(() => resort.build('', 5)).to.throw(Error, 'Invalid input');
        expect(() => resort.build('MountainView', 0)).to.throw(Error, 'Invalid input');
        expect(() => resort.build('MountainView', -6)).to.throw(Error, 'Invalid input');
    });
    it('should return proper message', () => {
        expect(resort.build('Ski', 10)).to.equal('Successfully built new hotel - Ski')
    });
    it('should create hotel successful', () => {
        resort.build('Ski', 10)
        const testObj = {
            name: 'Ski',
            beds: 10,
            points: 0
        }
        expect(resort.hotels[0]).to.deep.equal(testObj)
    });
});

describe('book(name, beds)', () => {
    it('should book successful and remove avail. beds', () => {
        resort.build('Ski', 10);
        resort.book('Ski', 3);
        expect(resort.hotels[0].beds).to.equal(7);
        expect(resort.book('Ski', 1)).to.equal('Successfully booked');
    });
    it('should throw error if no avail beds', () => {
        resort.build('Ski', 10)
        expect(() => resort.book('Ski', 15)).to.throw(Error, 'There is no free space');
    });
    it('should throw error if no such hotel', () => {
        expect(() => resort.book('London', 2)).to.throw(Error, 'There is no such hotel');
    });
    it('should return error if name is empty or beds < 1', () => {
        expect(() => resort.book('', 5)).to.throw(Error, 'Invalid input');
        expect(() => resort.book('MountainView', 0)).to.throw(Error, 'Invalid input');
        expect(() => resort.book('MountainView', -6)).to.throw(Error, 'Invalid input');
    });
});

describe('leave(name, beds, points)', () => {
    it('should leave proper message and add beds', () => {
        resort.build('Ski', 10);
        expect(resort.leave('Ski', 3, 2)).to.equal('3 people left Ski hotel');
        expect(resort.hotels[0].beds).to.equal(13);
        expect(resort.hotels[0].points).to.equal(6);
    });

    it('should throw error if hotel doesnt exist', () => {
        expect(() => resort.leave('WinterSports', 6)).to.throw(Error, 'There is no such hotel');
    });
});

describe('averageGrade()', () => {
    it('should return no votes yet', () => {
        expect(resort.averageGrade()).to.equal('No votes yet');
    });
    it('should return 2.00', () => {
        resort.build('Ski', 10);
        resort.leave('Ski', 3, 2);
        expect(resort.averageGrade()).to.equal('Average grade: 2.00');
    });
});