const fsp = require('fs/promises'),
    path = require("path");

class Airport {
    static airports = [];

    constructor(name) {
        this.name = name;
        this.planes = [];
        this.constructor.airports.push(this); // All instances of an airport at stored in the airports array.
    }

    takeOff(plane) {
        const planeIndex = this.planes.indexOf(plane);
        if (planeIndex == -1) {
            throw new Error('Errr... pilot, you are not here');
        }
        this.planes.splice(planeIndex, 1);

        const destination = Airport.airports.find(x => x.name == plane.destination);
        destination.addPlanes(plane);
    }

    // Add plane(s) to the planes array - spread operator allows any number of undeclared variables to be passed
    // ** Much better than trying to handle two functions or evaluating the number of objects passed
    addPlanes(...planes) {
        planes.map(plane => { 
            plane.location = this.name;
            this.planes.push(plane);
        });
    }

    /// Read file data async - no need to wrap in a new promise as it supports it already 
    /// see: https://stackoverflow.com/questions/34628305/using-promises-with-fs-readfile-in-a-loop

    async getInfo() {
        const data = await fsp.readFile(path.resolve(__dirname, '../airports.json'));
        const airports = JSON.parse(String(data));
        const [airport] = Object
            .keys(airports)
            .filter(airportCode => airports[airportCode].iata === this.name)
            .map(airportCode => airports[airportCode]);

        return airport;
    }
}

module.exports = Airport;
