const Crew = require('./crew'),
 Plane = require('../plane/plane');

describe('Crew', () => {
    const plane = new Plane('XGP'),
          plane2 = new Plane('GX3');

    const gavin = new Crew('Gavin'),
          kent = new Crew('Kent'),
          hal = new Crew('Hal');
    
    plane.boardPassengers(gavin, kent);
    plane2.boardPassengers(hal);

    test('can crosscheck with other crew on the plane', () => {
        expect(gavin.crossCheck()).toEqual(true);
    });
})
