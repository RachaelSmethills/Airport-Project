const Airport = require('./airport'),
    Plane = require('./plane'),
    Person = require('./person'),
    Bag = require('./bag');


const airpot = new Airport('Leeds Bradford Airport'),
    plane1 = new Plane('XL24'),
    plane2 = new Plane('BTR100'),
    frodo = new Person('Frodo'),
    greg = new Person('Greg'),
    frodosBag = new Bag(34);

frodo.addBags(frodosBag);
plane1.boardPassengers(frodo, greg);
airpot.addPlanes(plane1, plane2);

console.log(airpot.name);

airpot.planes.map(plane => {
    console.log(`Checking plane ${plane.name}`);
    plane.passengers.map(passenger => {
        console.log(`checking bags of ${passenger.name}`);
        passenger.bags.map(bag => {
            console.log(`this bag weighs ${bag.weight}`);
        })
    })

});

module.exports = airpot;