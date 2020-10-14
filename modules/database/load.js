const sqlite3 = require('sqlite3');

class DatabaseLoader {
    constructor() {
        this.db = new sqlite3.Database('./db.sqlite');
    }

    // Adds data to requested table
    load(table, dataArray, callback) {
        if (!dataArray || !table || !callback) {
            throw new Error('Missing param');
        }

        if (dataArray.length == 0) {
            return callback();
        }

        const data = dataArray.pop();
        
        const dataKeys = Object.keys(data), // Get all keys of provided object
            dataValues = Object.values(data); // get all values of provided object
        
        const fields = `(${dataKeys.map(x => x).join(', ')})`, // e.g. (name, city, location)... Joins keys into string of values
            placeHolders = `(${dataValues.map(x => '?').join(', ')})`; // e.g. (?, ?, ?, ?) Provides a paramater placeholder per value

        const insertQuery = `INSERT INTO ${table} ${fields} VALUES ${placeHolders};`; // Final insert query

        this.db.run(insertQuery, dataValues, (error) => { // Executes the query with provided paramaters
            if (error) throw new Error(error);
            this.load(table, dataArray, callback);
        });
    }
}

module.exports = DatabaseLoader;