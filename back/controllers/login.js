const customer = require('../models/customerSchema.js')
const  bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config({path:'../config/.env'})


exports.login = async (req,res)=>{
    try{
        const {e_mail,passWord}= req.body
        const existCustomer = await customer.findOne({e_mail:e_mail})
        if(!existCustomer)res.status(400).json({msg: "your e_mail inccorect"})

        const validatepassWord = await bcrypt.compare(passWord,existCustomer.passWord)
        if(!validatepassWord) res.status(400).json({msg:'wrong passWord'})

        const token = jwt.sign({e_mail,id:customer._id},process.env.KEY_TOKEN,{expiresIn:"1h"})
        const { isAdmin,...other} = existCustomer._doc   //dont send the isAdmin and token , else next line
        res.status(200).json({existCustomer,token}) //existCustomer,token //other

    }catch(error){
        res.status(500).json({msg:`we cannot login , error ${error}`})

    } 
}


//role
    exports.signinUser = (req,res)=>{
        if( req.body.customer){  
        res.send({loggedIn: true,customer: req.body.customer })
        }else {
            res.send({ loggedIn:false})
        }
    }