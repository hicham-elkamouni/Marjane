const {
    createAdminCentre,
    getAdminCentres,
    getAdminCentreById,
    updateAdminCentre,
    deleteAdminCentre,
    getAdminCentreByEmail
  } = require("./adminGenerale.service");

  const sendMail = require("../../mail/mailer")
  
  const { genSaltSync, hashSync, compareSync } = require("bcrypt");
  const { sign } = require("jsonwebtoken")
  
  module.exports = {
    createAdminCentre: (req, res) => {
      const body = req.body;
      const salt = genSaltSync(10);
      const clearPassword = body.password
      body.password = hashSync(body.password, salt);
      createAdminCentre(body, (err, results) => {
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
    getAdminCentres : (req, res) => {
      getAdminCentres((err, results) => {
        if(err){
            console.log(err);
            return;
        }
        return res.json({
            succes :true,
            data : results
        })
      })
  },
    getAdminCentreById: (req, res) => {
      const id = req.params.id;
      console.log(req.params)
      getAdminCentreById(id, (err, results)=>{
                  if (err){
                      console.log(err);
                      return;
                  }
                  if(!results){
                      return res.json({
                          succes : false,
                          message: "Record not found"
                      });
                  }
                  return res.json({
                      succes : true,
                      data: results
                  })
              })
    },
    updateAdminCentre: (req, res) => {
      const body = req.body;
      const salt = genSaltSync(10)
      body.password = hashSync(body.password, salt)
      updateAdminCentre(body, (err, results) => {
          if(err){
              console.log(err);
              return;
          }
          if(!results){
              return res.json({
                  succes : false,
                  message: "failed to update user"
              })
          }
          return res.json({
              success : true,
              message : "updated successfully"
          });
      })
    },
    deleteAdminCentre: (req, res) => {
      // const data = req.body;
      const id = req.params.id;
      // console.log(data)
      deleteAdminCentre(id, (err, results)=> {
          if(err){
              console.log(err);
              return;
          }
          if(!results){
              return res.json({
                  success : false,
                  message: "Record Not Found"
              })
          }
          return res.json({
              success : true,
              message: "Record deleted successfully"
          });
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
  