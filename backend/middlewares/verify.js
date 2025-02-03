const jwt = require("jsonwebtoken")
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  console.log(req.cookies)
  console.log(token)
  if (!token) return res.status(403).json({ message: "Access denied" });

  jwt.verify(token, process.env.Secret_Key, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.user = decoded;
    next();
  });
};
module.exports = verifyToken;
