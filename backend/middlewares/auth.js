const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req, res, next) => {

    let token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({
            message: "Bearer don't have an access token."
        })
    }

    try {
        let decoded = jwt.verify(token, process.env.SECRET)
        req.user = decoded.user
        next();
    } catch (error) {
        res.status(401).json({
            message: "Invalid Token"
        })
    }

}