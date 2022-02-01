const { verify , decode } = require("jsonwebtoken");

module.exports = {
  checkToken:(role)=> async (req, res, next) => {
    let token = req.get("authorization");
    console.log("inside middleware function");
    // const token = req?.headers?.authorization;
    console.log(token);
    // if (!bearer) {
    //   return res.status(200).json({ isLogged: false, error: "unauthorized" });
    // }
    // const token = bearer.slice(7)
    // const decoded = decode(token);
    // if(decoded.result.role == role){
    //   next();
    // }else{
    //   res.json({
    //     success: 0,
    //     message: "Invalid token",
    //   });
    // };


    // CHECK IF BEARER IS EMPTY

    // CHECK ROLE
    
    if (token) {
      // remove bearer from token
      token = token.slice(7);
      // console.log("token is :"+ token);
      verify(token, process.env.JWT_SECRET_4ALL, (err, decoded) => {
        if (err) {
          res.json({
            success: 0,
            message: "Invalid token",
          });
        } else {
          next();
        }
      });
    } else {
      res.json({
        success: 0,
        message: "Access denied! unauthorized user",
      });
    }
  },
};
