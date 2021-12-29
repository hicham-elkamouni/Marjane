const pool = require('../../config/database')

module.exports = {
    getPromos : callback => {
        pool.query(`SELECT * FROM promo WHERE now() BETWEEN de AND a`,
        [],
        (error, results, fields) => {
            if(error) {
                return callback(error); 
            }
            return callback(null, results);
        })
    },
}