const Plane = require('./plane'),
    Person = require('./person');

describe('Plane', () => {
    const plane = new Plane('XGP');

    test('has assigned name', () => {
        expect(plane.name).toEqual('XGP')
    });

    test('has expected number of passengers', () => {
        const passenger1 = new Person('Gary'),
            passenger2 = new Person('Princess Conswaila');

        plane.boardPassengers(passenger1, passenger2);
        expect(plane.passengers.length).toEqual(2)
    });
})
