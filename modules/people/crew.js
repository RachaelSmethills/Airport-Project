const Person = require('./person')

class Crew extends Person {
    // static array for all created crew members to be pushed to
    static crew = [];

    constructor(name) {
        super(name); // calls the constructor of the extended class 
        this.plane = '';

        this.constructor.crew.push(this);
    }

    crossCheck() {
        // access the static crew list of all created members
        return Crew.crew
            .filter(x=> x.plane == this.plane) // filter members based on current members plane
            .every(x => { // for every crew member on the plane - confirm they are of type Crew.
                console.log(`${x.name} is on plane ${x.plane}`);
                return this instanceof Crew}
            );

    }
}

module.exports = Crew;
