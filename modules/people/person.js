class Person {

    bags = []

    constructor(name) {
        this.name = name;
    }

    addBags(...bags) {
        bags.map(x => this.bags.push(x));
    }
}

module.exports = Person;
