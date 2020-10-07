class Plane {

    constructor(name, destination = '') {
        this.name = name;
        this.passengers = [];
        this.destination = destination;
        this.location = '';
    }

    boardPassengers(...passengers) {
        passengers.map(x => this.passengers.push(x));
    }
}

module.exports = Plane;
