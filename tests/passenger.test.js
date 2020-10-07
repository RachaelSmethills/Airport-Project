
const Passenger = require('../classes/passenger');

describe('Passenger', () => {
    const rachael = new Passenger('Rachael');
    rachael.callFlightAttendant();

    test('has assigned name', () => {
        expect(rachael.name).toEqual('Rachael')
    });
})
