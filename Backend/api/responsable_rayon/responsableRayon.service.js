const pool = require('../../config/database')

module.exports = {
    getPromos = callback => {
        pool.query(`GET * from promo`,[],
        (error, results, fields) => {
            if(error) {
                return callback(error)
            }
            return callback(null, results)
        })
    }
}