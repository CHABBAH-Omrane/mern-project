const mongoose = require('mongoose')
const Schema = mongoose.Schema

const partnersSchema = new Schema({
    categories: { required: true, type: String },
    title: { required: true, type: String },
    nameManger: String,
    e_mail: String,
    phoneNum: Number,
    // phoneNum: {
    //     num1:{required: true,type:Number},
    //     num2:Number},
    desc: String,
    address: String,
    // address:{required: true,type:String},
    // maps :{
    //     lat:Number,
    //     long:Number}},
    logo: String,
    // logo: {type : String, required : true},
    photos: String,
    videos: String,
    // links:{
    //     webSite:String,
    //     facebook:String,
    //     instagram: String,
    //     youtube:String
    // },

    facebook: String,
    instagram: String,

    rating: {
        type: Number,
        min: 0,
        max: 5, default: 4.5
    },  //,default:4.5 fasa5ha
    comments: [{ body: String, date: Date }],
    date: { default: Date.now, type: Date }
})


module.exports = mongoose.model("partner", partnersSchema)