const { expect } = require('chai');
const pizzuniClass = require('./PizzUni');



let picuni;
beforeEach(() => {
    picuni = new pizzuniClass()
});

describe('check initialize constructor', () => {
    it('check initializations values', () => {
        expect(picuni.registeredUsers).to.deep.equal([]);
        expect(Object.keys(picuni.availableProducts).length).to.equal(2)
        expect(picuni.orders).to.deep.equal([]);

    })
    it('check length of the products', () => {
        expect(picuni.availableProducts.pizzas.length).to.equal(3);
        expect(picuni.availableProducts.drinks.length).to.equal(3);
    })
    it('check length of the obj', () => {
        expect(Object.keys(picuni).length).to.equal(3)
    })
})

describe('registerUser(email)', () => {
    it('throw error if email is already registred', () => {
        picuni.registerUser('plamen@mail.com');
        expect(() => picuni.registerUser('plamen@mail.com')).to.throw(Error, `This email address (plamen@mail.com) is already being used!`)
    });
    it('should register correctly', () => {
        const newUser = {
            email: 'plamen@mail.com',
            orderHistory: []
        }
        picuni.registerUser('plamen@mail.com')
        expect(picuni.registeredUsers[0]).to.deep.equal(newUser)
    })
})