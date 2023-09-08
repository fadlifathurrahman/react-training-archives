// import jwt
import jwt from "jsonwebtoken";
// middleware otentikasi
function authMiddleware(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const user = jwt.verify(token, process.env.SECRET_KEY);
      req.user = user;
      next();
    } catch {
      res.status(401);
      res.send("Wrong token.");
    }
  } else {
    res.status(401);
    res.send("Empty token.");
  }
}
export default authMiddleware;
