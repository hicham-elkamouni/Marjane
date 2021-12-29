const pool = require('../../config/database')

module.exports = {
    createPromos : (data, callback) => {
        pool.query(`INSERT INTO promo (pourcentage, fidelite,statut, de, a) values (? , ? , ? , ? , ?)`,
        [
            data.pourcentage,
            data.fidelite,
            data.statut,
            data.de,
            data.a
        ],
        (error, results, fields) => {
            if(error){
                return callback(error.message)
            }
            return callback(null, results);
        })
    },
    createRespRayon : (data, callback) => {
        pool.query(`INSERT INTO responsable_rayon (nom, prenom, email, password) values ( ? , ? , ? , ? )`,
        [
            data.nom,
            data.prenom,
            data.email,
            data.password
        ],
        (error, results, fields) => {
            if (error) {
                return callback(error.message);
            }
            console.log(results);
            return callback(null, results);
        }
        )
    },
    deletePromo : (data, callback) => {
        pool.query(`delete from promo where id=?`),
        [data.id],
        (error, results, fields) => {
            if(error){
                return callback(error);
            }
            return callback(null, results)
        }
    },
    getAllPromos : callback => {
        pool.query(`SELECT * FROM promo`,
        [],
        (error, results, fields) => {
            if(error) {
                return callback(error);
            }
            return callback(null, results)
        })
    },
    getAllRaspRayons : callback => {
        pool.query(`SELECT * FROM responsable_rayon`,
        [],
        (error, results, fields) => {
            if(error) {
                return callback(error);
            }
            return callback(null, results)
        })
    },
    getAdminCentreByEmail : (email , callback) => {
        pool.query(`select * from admin_centre where email = ?`,
        [email],
        (error, results, fields) => {
            if (error) {
                callback(error);
            }
            return callback(null, results[0])
        }
        )
    }
    
    
}