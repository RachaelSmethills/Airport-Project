class Plane {

    passengers = [];
    destination = '';

    constructor(name) {
        this.name = name;
    }

    boardPassengers(...passengers) {
        passengers.map(x => this.passengers.push(x));
    }
}

module.exports = Plane;
