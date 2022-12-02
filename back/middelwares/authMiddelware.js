const jwt = require('jsonwebtoken')
require('dotenv').config({ path: '../config/.env' })



exports.authMiddelwares = async (req, res, next) => {
    try {
        const token = req.header("auth-token")
        if (!token) res.status(401).json({ msg: "you are not authorized you should reconnected" })

        const verifyToken = jwt.verify(token, process.env.KEY_TOKEN)
        if (!verifyToken) res.status(401).json({ msg: "wrong token" })
        next()
    } catch (error) {
        res.status(500).json({ msg: `something went wrong${error}` })
    }
}

//this on the route selector
//import authMiddelwares from this file
//add authMiddelwares between path and post selector on route
//take token men database to  header in postman / his name auth-token
//else el expiresIn men registerAuth or modifier
