const Person = require('../classes/person'),
    Bag = require('../classes/bag');

describe('Person', () => {
    const rachael = new Person('Rachael');

    test('has assigned name', () => {
        expect(rachael.name).toEqual('Rachael')
    });

    test('has expected number of bags', () => {
        const bag1 = new Bag(12),
            bag2 = new Bag(1);

        rachael.addBags(bag1, bag2);
        expect(rachael.bags.length).toEqual(2)
    });
})
