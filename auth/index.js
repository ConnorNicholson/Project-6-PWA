const jwt = require('jsonwebtoken')
const User = require('../models/user')

// Note this is the super secret key for signing the JWT
// This should be acquired via .env or a microservice
const JWT_SECRET = process.env.JWT_SECRET

// Function for creating tokens
function signToken(user) {
    // toObject() returns a basic js object comprised of data from db. Delete password before creating jwt
    const userData = user.toObject()
    delete userData.password
    return jwt.sign(userData, JWT_SECRET)
}

// Function for verifying tokens
function verifyToken(req, res, next) {
    // Grab token from either headers, req.body, or query string
    const token = req.get('token') || req.body.token || req.query.token
    // If no token is present, deny access
    if (!token) return res.json({ success: false, message: "No token provided" })
    // Otherwise, try to verify token
    jwt.verify(token, JWT_SECRET, (err, decodedData) => {
        // If there is a problem with token verification, deny access
        if (err) return res.json({ success: false, message: "Invalid token" })
        // Otherwise, search for user by id that was embedded in token
        User.findById(decodedData._id, (err, user) => {
            // If no user, deny access
            if (!user) return res.json({ success: false, message: "Invalid token" })
            // Otherwise, add user to req object
            req.user = user
            // Go on to process the route:
            next()
        })
    })
}

module.exports = {
    signToken,
    verifyToken
}