const express = require('express')
const router = express.Router()
const contactInfo = require('../models/contactInfoSchema')

router.post('/newContactInfo', (req, res) => {
    const { name, e_mail, phoneNum, desc, date } = req.body
    const newContactInfo = new contactInfo({ name, e_mail, phoneNum, desc, date })
    newContactInfo.save()
        .then((contactInfo) => res.send(contactInfo))
        .catch((err) => res.status(404).send({ msg: "we cannot add contactInfo" }))
})



module.exports = router