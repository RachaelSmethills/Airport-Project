
const airpot = require('./index');

describe('Can access bag weight from data', () => {

    airpot.planes.map(plane => {

        plane.passengers.map(passenger => {

            passenger.bags.map(bag => {
                test('has weight', () => {
                    expect(bag.weight).toBeGreaterThan(0)
                });
            })
        })

    });

})