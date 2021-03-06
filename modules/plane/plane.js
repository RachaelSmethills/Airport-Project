const passenger = require('../people/passenger'),
      crew = require('../people/crew');
      
class Plane {

    constructor(name, destination = '') {
        this.name = name;
        this.passengers = [];
        this.destination = destination;
        this.location = '';
        this.crew = [];
    }

    boardPassengers(...passengers) {
        passengers.map(x => { 
            if (x instanceof passenger) {
                this.passengers.push(x)
            }
            if (x instanceof crew) {
                x.plane = this.name; // set the crew members plane to this one once boarded
                this.crew.push(x)
            }
           
        });
    }
}

module.exports = Plane;
