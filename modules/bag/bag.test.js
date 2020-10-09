const Bag = require('./bag');

describe('Bag', () => {

    test('has assigned weight', () => {
        const myBag = new Bag(2);
        expect(myBag.weight).toEqual(2)
    });

    test('errors if no weight is provided', () => {
        expect(() => new Bag()).toThrow(Error);
    });
})
