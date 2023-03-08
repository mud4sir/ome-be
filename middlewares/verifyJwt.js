const jwt = require('jsonwebtoken');

const verifyJwt = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).send({ message: 'Authorization token not found' });
  } else {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(401).send({ message: 'Invalid token' });
      } else {
        req.user = { email: decoded.email };
        next();
      }
    });
  }
};

module.exports = verifyJwt;
