const jwt = require('jsonwebtoken');

const verifyJwt = (req, res, next) => {
    const token =
        req.headers.authorization && req.headers.authorization.split(' ');
    if (!Array.isArray(token)) {
        res.status(401).send({
            status: 'failed',
            message: 'Authorization token not found',
        });
    } else {
        jwt.verify(token[1], process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                res.status(401).send({
                    status: 'failed',
                    message: 'Invalid token',
                });
            } else {
                req.user = { email: decoded.email };
                next();
            }
        });
    }
};

module.exports = verifyJwt;
