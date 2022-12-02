const express = require('express')
const router = express.Router()

const { registerAuth } = require('../controllers/registerAuth.js')
const { login, signinUser } = require('../controllers/login.js')
const { selectPartners } = require('../controllers/select.js')

router.post('/addCustomer', registerAuth)
router.post('/signin', login)
router.post('/select', selectPartners)

router.get('/signinUser', signinUser)//role

module.exports = router

// const express = require('express')
// const router = express.Router()
// const customer = require('../models/customerSchema')

// router.post('/addCustomer',(req, res) =>{
//     const {userName, e_mail,passWord,fname,lname,gender,phoneNum,adress,date}=req.body
//     const newCustomer= new  customer({userName, e_mail,passWord,fname,lname,gender,phoneNum,adress,date})
//     newCustomer.save()
//     .then((customer)=>res.send(customer))
//     .catch((err)=>res.status(404).send({msg:"we cannot add new customer"}))
// })



