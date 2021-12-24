const { verify } = require("jsonwebtoken");

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // remove bearer from token
      token = token.slice(7);
      // console.log("token is :"+ token);
      verify(token, "qwe1234", (err, decoded) => {
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
