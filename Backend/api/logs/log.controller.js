const { create, getLogs } = require("./log.service");

const { decode } = require("jsonwebtoken");

module.exports = {
  create: (req, res) => {
    const body = req;
    let role = body.role;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return true;
    });
    // }
  },
  getLogs: (req, res) => {
    const token = req.headers.authorization.split(" ")[1];

    // const array = token.split(".")


    // console.log(token);
    const decoded = decode(token);
    // console.log(decoded);
    const role = decoded.result.role;
    // console.log(admin);
    if (role ==  1) {
      getLogs((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        //create log
        const log = `${decoded.result.nom } a demandé la liste des logs`;
        let body = {
          comment: log,
        };
        create(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection error",
            });
          }
        });
        return res.json({
          success: 1,
          data: results,
        });
      });
    } else {
        //create log
      const log = `${decoded.result.nom} a demandé la liste des logs`;
      let body = {
        comment: log,
      };
      create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection error",
          });
        }
      });
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User",
      });
    }
  },
};