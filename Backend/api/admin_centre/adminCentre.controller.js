const { createPromos, createRespRayon, deletePromo, getAllPromos, getAllRaspRayons , getAdminCentreByEmail } = require("./adminCentre.service");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken")

module.exports = {
    createRespRayon: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        createRespRayon(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
              success: false,
              message: "Database connection error",
            });
        }
        return res.status(200).json({
            success: true,
            data: results,
        });
    });
    },
    createPromo: (req, res) => {
    const body = req.body;

        createPromos(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: ",
                });
            }
            return res.status(200).json({
                success: true,
                data: results,
            });
        });
    },
    deletePromo : (req , res ) => {
          const data = req.body;
          deletePromo(data,(err, results) => {
              if(err) {
                  console.log(err);
                  return;
              }
              if(!results) {
                  return res.json({
                      success : false,
                      message : "Record Not Found"
                  })
              }
              return res.json({
                  succes : true,
                  message : "Promo deleted successfully"
              })
          }) 
    },
    getAllPromos : (req, res) => {
        getAllPromos((err, results) => {
            if(err){
                console.log(err);
                returrn;
            }
            return res.json({
                success: true,
                data: results
            })
        })
    },
    getAllRespRayons : (req, res) => {
        getAllRaspRayons((err, results) => {
            if(err){
                console.log(err);
                returrn;
            }
            return res.json({
                success: true,
                data: results
            })
        })
    },
    login: (req, res) => {
        const body = req.body;
        getAdminCentreByEmail(body.email, (err, results) => {
          if(err){
            console.log(err);
          }
          if(!results){
            return res.json({
              success : false,
              data : "Invalid email or password"
            })
          }
          const result = compareSync(body.password, results.password);
          console.log("this is result " + result);
          if(result){
            results.password = undefined;
            const jsontoken = sign({ result : results },"qwe1234",{
              expiresIn:"1h"
            });
            return res.json({
              success : true,
              message : "login success",
              token: jsontoken
            });
          }else{
              return res.json({
                success : false,
                message : "invalid email or password"
              })
          }      
        })
      }

};
