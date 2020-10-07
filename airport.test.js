const airpot = require('.');
const { airports } = require('./airport');
const Airport = require('./airport'),
    Plane = require('./plane'),
    Person = require('./person'),
    Bag = require('./bag');

describe('Airport', () => {

    const airport = new Airport('Leeds Bradford Airport'),
        airport2 = new Airport('Norway');
    const plane1 = new Plane('XL24', airport2.name),
        plane2 = new Plane('BTR100', airport2.name),
        frodo = new Person('Frodo'),
        frodosBag = new Bag(34);

    frodo.addBags(frodosBag);
    plane1.boardPassengers(frodo);
    airport.addPlanes(plane1, plane2);

    airport.planes.map(plane => {
        test('has assigned location', () => {
            expect(plane.location).toEqual(airport.name);
        });
    });

    test('has assigned name', () => {
        expect(airport.name).toEqual('Leeds Bradford Airport')
    });

    test('has expected number of planes', () => {
        expect(airport.planes.length).toEqual(2)
    });

    test('has expected number of planes', () => {
        expect(airport.planes.length).toEqual(2)
    });

    test('registers all airports', () => {
        const airports = [
            LAX = new Airport('LAX'),
            CDG = new Airport('CDG'),
            LHR = new Airport('LHR')
        ];

        airports.map(airport => {
            expect(Airport.airports.indexOf(airport) > -1).toEqual(true)
        });
    });

    describe('TakeOff', () => { 
        test('will error if plane is not at airport', () => {
            const plane = new Plane('Random Lost Pilot')
            expect(() => airport.takeOff(plane)).toThrow(Error);
        });

        test('removed plane from planes', () => {
            airport.takeOff(plane1);
            expect(airport.planes.indexOf(plane1) == -1).toEqual(true);
        });

        test('adds plane to destination', () => {
            airport.takeOff(plane2);
            expect(airport2.planes.indexOf(plane2) != -1).toEqual(true);
        });
    })
})
