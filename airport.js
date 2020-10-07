class Airport {

    planes = [];

    constructor(name) {
        this.name = name;
    }

    landPlane(plane) {
        console.log('LAND ME - .. Later')
    }

    addPlanes(...planes) {
        planes.map(plane => this.planes.push(plane));
    }
}

module.exports = Airport;
