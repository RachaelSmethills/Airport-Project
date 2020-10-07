class Airport {
    static airports = [];

    constructor(name) {
        this.name = name;
        this.planes = [];
        this.constructor.airports.push(this);
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

    addPlanes(...planes) {
        planes.map(plane => { 
            plane.location = this.name;
            this.planes.push(plane);
        });
    }
}

module.exports = Airport;
