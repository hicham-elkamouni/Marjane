const pool = require('../../config/database')

module.exports = {
    createAdminCentre : (data, callback) => {
        pool.query(
            `INSERT INTO admin_centre(nom, prenom, email, password, status) 
            VALUES (?, ?, ?, ?, ?)`,
            [
                data.nom, 
                data.prenom,
                data.email,
                data.password,
                data.status
            ],
            (error, results, fields) => {
                if(error) {
                    return callback(error.message);
                }
                console.log(results);
                return callback(null, results)
            }
        )
    },
    getAdminCentres : callback => {
        pool.query(`SELECT * FROM admin_centre`,
        [],
        (error, results, fields) => {
            if(error) {
                return callback(error); 
            }
            return callback(null, results);
        })
    },
    getAdminCentreById : (id, callback) => {
        pool.query(`SELECT * FROM admin_centre where id= ?`,
        [id],
        (error, results, fields) => {
            if(error) {
                return callback(error); 
            }
            return callback(null, results[0]);
        })
    },
    updateAdminCentre : (data, callback) => {
        pool.query(`update admin_centre set nom=? , prenom=? , email=? , password=? where id=?`,
        [
            data.nom,
            data.prenom,
            data.email,
            data.password,
            data.id
        ],
        (error, results, fields) => {
            if(error) {
                callback(error); 
            }
            return callback(null, results);  
            }
        )
    },
    deleteAdminCentre : (id, callback) => {
        pool.query(`delete from admin_centre where id=${id}`, 
        [id],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results)
        }
        )
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
};