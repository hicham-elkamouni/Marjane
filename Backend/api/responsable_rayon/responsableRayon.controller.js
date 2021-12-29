const { getPromos, getRespRayonByEmail } = require('./responsableRayon.service')

const { compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
module.exports = {
    getPromos : (req, res) => {
        const d = new Date();
        const currentHour = d.getHours();
        if(( 8 < currentHour ) && ( currentHour < 12)) {

            getPromos((err, results) => {
              if(err){
                  console.log(err);
                  return;
              }
              return res.json({
                  succes :true,
                  data : results
              })
            })
        }else{
            return res.json({
                succes :false,
                data : "there's no promotions right now, get back later"
            })
        }
    },
    login : (req , res ) => {
        const body = req.body;
        getRespRayonByEmail(body.email , (err, results) => {
            if(err) {
                console.log(err);
            }
            if(!results){
                return res.json({ 
                    success: false,
                    data : "invalid email or password"
                })
            }
            const result = compareSync(body.password , results.password);
            if(result){
                results.password = undefined;
                const jsontoken = sign({ result : results }, "qwe1234", {
                    expiresIn:"1h"
                });
                return res.json({ 
                    success: true,
                    message : "login succes",
                    token : jsontoken
                })
            }else{
                return res.json({ 
                    success : false,
                    message : "invalid email or password",
                })
            }
        })
    }

}