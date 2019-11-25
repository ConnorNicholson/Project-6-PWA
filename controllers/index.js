const User = require('../models/user')
const signToken = require('../auth').signToken

module.exports = {
    // List all users
    index: (req, res) => {
        User.find({}, (err, users) => {
            res.json(users)
        })
    },

    // Get one user
    show: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            res.json(user)
        })
    },

    // Create a new user
    create: (req, res) => {
        User.create(req.body, (err, user) => {
            if (err) return res.json({ success: false, code: err.code })
            // Once user is created, generate a JWT and return to client
            const token = signToken(user)
            res.json({ success: true, message: "User created. Token attached", token })
        })
    },

    // Update an existing user
    update: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            Object.assign(user, req.body)
            user.save((err, updatedUser) => {
                res.json({ success: true, message: "User updated", user })
            })
        })
    },

    // Delete an existing user
    destroy: (req, res) => {
        User.findByIdAndRemove(req.params.id, (err, user) => {
            res.json({ success: true, message: "User deleted", user })
        })
    },

    // The login route
    authenticate: (req, res) => {
        // Check if the user exists
        User.findOne({ email: req.body.email }, (err, user) => {
            // If there's no user or the password is invalid:
            if (!user || !user.validPassword(req.body.password)) {
                // Deny access
                return res.json({ success: false, message: "Invalid credentials" })
            }

            const token = signToken(user)
            res.json({ success: true, message: "Token attached", token })
        })
    }
}