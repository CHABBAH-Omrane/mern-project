const mongoose = require('mongoose')
const Schema = mongoose.Schema


const customerSchema = new Schema({
    // userName: {required: true,type:String},
    fname: { required: true, type: String },
    lname: { required: true, type: String },
    e_mail: { required: true, type: String },
    passWord: { required: true, type: String },
    gender: String,
    reviews: String,
    phoneNum: { required: true, type: Number },
    adress: String,
    date: { default: Date.now, type: Date },
    isAdmin: { type: Boolean, default: false }
})

module.exports = mongoose.model("customer", customerSchema)


// const mongoose = require('mongoose')
// const Schema =mongoose.Schema
// const customerSchema= new Schema ({
//     userName: {required: true,type:String},
//     e_mail: {required: true,type:String},
//     passWord: {required: true,type:String},
//     fname: {required: true,type:String},
//     lname: {required: true,type:String},
//     gender: String,
//     phoneNum: {
//         num1:{required: true,type:Number},
//         num2:Number},
//     adress : String ,
//     date: {default: Date.now,type:Date}
// })

// module.exports =mongoose.model("customer",customerSchema)