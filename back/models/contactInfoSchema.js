const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactInfoSchema = new Schema({
    name: { required: true, type: String },
    e_mail: String,
    phoneNum: { required: true, type: Number },
    desc: String,
    date: { default: Date.now, type: Date }
})


module.exports = mongoose.model("contactInfo", contactInfoSchema)
