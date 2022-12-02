const bcrypt = require('bcryptjs')
const customer = require('../models/customerSchema.js')
const jwt = require('jsonwebtoken')
const Joi = require('joi')

require('dotenv').config({ path: '../config/.env' })


exports.registerAuth = async (req, res) => {
    //parti Joy
    const schema = Joi.object({
        // fname: Joi.string().alphanum().min(3).max(30).required(),
        fname: Joi.string(),
        lname: Joi.string(),
        e_mail: Joi.string().required(),
        passWord: Joi.string().required(),
        phoneNum: Joi.number().precision(8).required(),// 8 numbers
        adress: Joi.string()
    })
    schema.validate({});
    const { value, error } = schema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    console.log(value, error)

    //auth normal
    try {
        const { userName, e_mail, passWord, fname, lname, phoneNum, adress, date } = req.body
        const existCustomer = await customer.findOne({ e_mail: e_mail }) //if this mail exist or no in the database
        if (existCustomer) res.status(400).json({ msg: "you have an account" })
        //bcrypt
        const cryptpassword = await bcrypt.hash(passWord, 12)
        const newCustomer = new customer({ userName, e_mail, passWord: cryptpassword, fname, lname, phoneNum, adress, date })
        const user = await newCustomer.save()
        //token       
        const token = jwt.sign({ e_mail, id: customer._id }, process.env.KEY_TOKEN, { expiresIn: "1h" })
        res.status(200).json({ user, token })

    } catch (error) {
        res.status(500).json({ msg: `we cannot add new customer ${error}` })
    }
}


