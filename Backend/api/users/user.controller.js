const {
  create,
  getUsers,
  getUserByUserId,
  updateUser,
  deleteUser,
  getUserByUserEmail
} = require("./user.service");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken")
// const res = require("express/lib/response");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
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
  getUsers : (req, res) => {
    getUsers((err, results) => {
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
  getUserByUserId: (req, res) => {
    const id = req.params.id;
    console.log(req.params)
    getUserByUserId(id, (err, results)=>{
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
  updateUsers: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10)
    body.password = hashSync(body.password, salt)
    updateUser(body, (err, results) => {
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
  deleteUser: (req, res) => {
    const data = req.body;
    deleteUser(data, (err, results)=> {
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
    getUserByUserEmail(body.email, (err, results) => {
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
        const jsontoken = sign({result:results},"qwe1234",{
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
