const pool = require('../../config/database')

module.exports = {
    create : (data, callback) => {
        pool.query(
            `INSERT INTO admin_centre(nom, prenom, email, password) 
            VALUES (?, ?, ?, ?)`,
            [
                data.nom, 
                data.prenom,
                data.email,
                data.password
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
    getUsers : callback => {
        pool.query(`SELECT * FROM admin_centre`,
        [],
        (error, results, fields) => {
            if(error) {
                return callback(error); 
            }
            return callback(null, results);
        })
    },
    getUserByUserId : (id, callback) => {
        pool.query(`SELECT * FROM admin_centre where id= ?`,
        [id],
        (error, results, fields) => {
            if(error) {
                return callback(error); 
            }
            return callback(null, results[0]);
        })
    },
    updateUser : (data, callback) => {
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
    deleteUser : (data, callback) => {
        pool.query(`delete from admin_centre where id=?`, 
        [data.id],
        (error, results, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results)
        }
        )
    },
    getUserByUserEmail : (email , callback) => {
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