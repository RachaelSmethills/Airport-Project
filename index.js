const Airport = require('./modules/airport/airport'),
    Plane = require('./modules/plane/plane'),
    Passenger = require('./modules/people/passenger'),
    Bag = require('./modules/bag/bag');


const LBA = new Airport('LBA'),
    LAX = new Airport('LAX'),
    CDG = new Airport('CDG'),
    LHR = new Airport('LHR'),
    plane1 = new Plane('XL24'),
    plane2 = new Plane('BTR100'),
    plane3 = new Plane('Victory')
    frodo = new Passenger('Frodo'),
    greg = new Passenger('Greg'),
    frodosBag = new Bag(34);
    

frodo.addBags(frodosBag);
plane1.boardPassengers(frodo, greg);
LBA.addPlanes(plane1, plane2);

console.log(LBA.name);

LBA.planes.map(plane => {
    console.log(`Checking plane ${plane.name}`);
    plane.passengers.map(passenger => {
        console.log(`checking bags of ${passenger.name}`);
        passenger.bags.map(bag => {
            console.log(`this bag weighs ${bag.weight}`);
        })
    })

});

module.exports = LBA;
