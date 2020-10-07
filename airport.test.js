const Airport = require('./airport'),
    Plane = require('./plane'),
    Person = require('./person'),
    Bag = require('./bag');

describe('Airport', () => {
    const airpot = new Airport('Leeds Bradford Airport'),
        plane1 = new Plane('XL24'),
        plane2 = new Plane('BTR100'),
        frodo = new Person('Frodo'),
        frodosBag = new Bag(34);

    frodo.addBags(frodosBag);
    plane1.boardPassengers(frodo);
    airpot.addPlanes(plane1, plane2);

    test('has assigned name', () => {
        expect(airpot.name).toEqual('Leeds Bradford Airport')
    });

    test('has expected number of planes', () => {
        expect(airpot.planes.length).toEqual(2)
    });
})
