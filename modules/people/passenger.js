const Person = require('./person')

class Passenger extends Person { 
    callFlightAttendant() {
        console.log('Assistance please!');
    }
}
module.exports = Passenger;