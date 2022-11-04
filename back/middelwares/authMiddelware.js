const jwt = require('jsonwebtoken')
require('dotenv').config({path:'../config/.env'})



exports.authMiddelwares = async(req,res,next)=>{
    try {
        const token =req.header("auth-token")
        if(!token) res.status(401).json({msg:"you are not authorized you should reconnected"})

        const verifyToken =jwt.verify(token,process.env.KEY_TOKEN)
        if(!verifyToken) res.status(401).json({msg:"wrong token"})
        next()
    } catch (error) {
        res.status(500).json({  msg:`something went wrong${error}`})
    }
}

//this on the route selector
//import authMiddelwares from this file
//ajouter authMiddelwares entre path et post selector on route
//5outh token men database w 7ottou f header f postman / esmou auth-token
//sinon fasa5 el expiresIn men registerAuth ou modifier
