const { expect } = require('chai');
const BookStore = require('./Book Store');


let store;
beforeEach(() => {
    store = new BookStore('softuni');
})

describe('constructor tests', () => {
    it('should initialize property correctly', () => {
        expect(store.name).to.equal('softuni');
        expect(store.books).to.deep.equal([]);
        expect(store.workers).to.deep.equal([]);
    });
});

describe('stockBooks() tests', () => {
    it('should push correctly', () => {

        store.stockBooks(['IT-Steven King', 'VIS 2-Georgi Stoev']);
        expect(store.books.length).to.equal(2);

    });
});

describe('hire() tests', () => {
    it('should throw error', () => {
        store.hire('Plamen', 'student');

        expect(() => store.hire('Plamen', 'student'))
            .to.throw(Error, 'This person is our employee')
    });

    it('should hire a person', () => {
        const worker = {
            name: 'Plamen',
            position: 'student',
            booksSold: 0
        };

        const outputMsg = store.hire('Plamen', 'student');
        expect(store.workers.length).to.equal(1);
        expect(outputMsg).to.equal('Plamen started work at softuni as student');
        expect(store.workers[0]).to.deep.equal(worker);
    });
});

describe('fire() tests', () => {
    it('should throw error', () => {
        expect(() => store.fire('Stanislav')).to.throw(Error, 'Stanislav doesn\'t work here');
    });
    it('should fire a person', () => {
        store.hire('Martin Chaov', 'amateur');
        expect(store.workers.length).to.equal(1);
        expect(store.fire('Martin Chaov')).to.equal('Martin Chaov is fired');
        expect(store.workers.length).to.equal(0);
    });
});

describe('sellBook', () => {
    it('it should throw error if book doesn\'t exist', () => {
        expect(() => store.sellBook('IT', 'Doncho')).to.throw(Error, 'This book is out of stock');
    });
    it('shoud throw error if worker doesn\'t exist', () => {
        store.stockBooks(['IT-Steven King']);
        expect(() => store.sellBook('IT', 'Doncho')).to.throw(Error, 'Doncho is not working here');
    });
    it('should sell books correctly', () => {
        store.stockBooks(['IT-Steven King']);
        store.hire('Doncho', 'inner');
        store.sellBook('IT', 'Doncho');
        expect(store.books.length).to.equal(0);
        expect(store.workers[0].booksSold).to.equal(1)
    });
});

describe('printWorkers()', () => {
    it('print Workers', () => {
        store.hire('Martin Chaov', 'chistach');
        store.hire('Nakov', 'SEO');
        expect(store.printWorkers()).to.equal('Name:Martin Chaov Position:chistach BooksSold:0\nName:Nakov Position:SEO BooksSold:0')
    });
});