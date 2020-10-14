const Airport = require('./modules/airport/airport'),
    Plane = require('./modules/plane/plane'),
    Passenger = require('./modules/people/passenger'),
    Bag = require('./modules/bag/bag');
const DatabaseLoader = require('./modules/database/load');
const airports = require('./airports.json');

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

const dbLoader = new DatabaseLoader();

new Promise((res, rej) => { 
    dbLoader.db.run(`
        CREATE TABLE IF NOT EXISTS airports(
            id INTEGER PRIMARY KEY,
            icao TEXT NULL,
            iata TEXT NULL,
            name TEXT NOT NULL,
            city TEXT NULL,
            state TEXT NULL,
            country TEXT NULL,
            elevation INTEGER NULL,
            lat DECIMAL NULL,
            lon DECIMAL NULL,
            tz TEXT NULL
        );`, (error) => {
            console.log('Execution complete', error);
            res();
    });
}).then(() =>{
    console.log('Running insert');
    const recordKeys = Object.keys(airports);
    dbLoader.load('airports', recordKeys.map(x => airports[x]), () => console.log('All records added'))
});

module.exports = LBA;
