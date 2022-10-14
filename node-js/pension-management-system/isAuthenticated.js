const jwt = require("jsonwebtoken");

module.exports = async function isAuthenticated(req, res, next) {
  const authHeader = req.headers["authorization"];
  if(!authHeader) {
    return res.json({
      sucess: 401,
      message: "Unauthorized Access",
    });
  } else {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "secret", (err, user) => {
      if (err) {
        return res.json({
          sucess: 401,
          message: "Unauthorized Access",
        });
      } else {
        req.user = user;
        next();
      }
    });
  }
  
};