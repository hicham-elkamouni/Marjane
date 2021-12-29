const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO logs(comments) VALUES (?)`,
      [data.comment],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getLogs: (callBack) => {
    try {
      pool.query(
          `SELECT * FROM logs`, (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      });
    } catch (error) {
      return callBack(error);
    }
  },
};