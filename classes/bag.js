class Bag {
    constructor(weight) {
        if (!Number.isInteger(weight) || weight < 0) {
            throw new Error('bag needs weight')
        }

        this.weight = weight;
    }
}

module.exports = Bag;