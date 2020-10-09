const Passenger = require('../people/passenger');
const Plane = require('./plane');

describe('Plane', () => {
    const plane = new Plane('XGP');

    test('has assigned name', () => {
        expect(plane.name).toEqual('XGP')
    });

    test('has expected number of passengers', () => {
        const passenger1 = new Passenger('Gary'),
            passenger2 = new Passenger('Princess Conswaila');

        plane.boardPassengers(passenger1, passenger2);
        expect(plane.passengers.length).toEqual(2)
    });
})
