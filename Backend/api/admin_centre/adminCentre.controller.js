const { createPromos, createRespRayon, deletePromo, getAllPromos, getAllRaspRayons , getAdminCentreByEmail } = require("./adminCentre.service");

const sendMail = require("../../mail/mailer")

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken")


module.exports = {
    createRespRayon: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        const clearPassword = body.password
        body.password = hashSync(body.password, salt);
        createRespRayon(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error",
            });
        }
        let subj = "this is your login details"
        let msg = `
        email : ${body.email}
        password : ${clearPassword}
        `
        sendMail.mail(body.email, subj, msg)
        
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
        // const token = req.headers.authorization.split(" ")[1];
        // const decoded = decode(token);
        getAllRaspRayons((err, results) => {
            if(err){
                console.log(err);
                returrn;
            }
            // const log = `${decoded.result.nom} a demandé la liste des responsables`;
            // body.comment = log;
            // createlog.create(body, (err,results)=>{
            //     if (err){
            //         console.log(err);
            //         return res.status(500).json({
            //             success: 0,
            //             message: "database connection error"
            //         })
            //     }
            // })
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
