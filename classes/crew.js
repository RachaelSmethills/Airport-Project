const Person = require('./person')

class Crew extends Person {
    static crew = [];

    constructor(name) {
        super(name);
        this.plane = '';

        this.constructor.crew.push(this);
    }

    crossCheck() {
        return Crew.crew
            .filter(x=> x.plane == this.plane)
            .every(x => {
                console.log(`${x.name} is on plane ${x.plane}`);
                return this instanceof Crew}
            );

    }
}

module.exports = Crew;