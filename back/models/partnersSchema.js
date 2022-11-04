const mongoose = require('mongoose')
const Schema =mongoose.Schema

const partnersSchema= new Schema ({
    categorie : {required: true,type:String},
    title:{required: true,type:String},
    nameManger: String,
    e_mail: String,
    phoneNum: {
        num1:{required: true,type:Number},
        num2:Number},
    desc : String ,
    address : {
        address:{required: true,type:String},
        maps :{
            lat:Number,
            long:Number}},
    logo: {type : String, required : true},
    photos:{type : String, required : true},
    videos:{type : String, required : true},
    links:{
        webSite:String,
        facebook:String,
        instagram: String,
        youtube:String
    },
    rating:{type:Number,
         min:0,
         max:5,default:4.5 },  //,default:4.5 fasa5ha
    comments: [{body:String, date: Date}],
    date: {default: Date.now,type:Date}
})  


module.exports =mongoose.model("partner",partnersSchema)