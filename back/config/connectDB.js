const mongoose =require('mongoose')
require('dotenv').config({path:'./config/.env'})
const MONGO_URI=process.env.MONGO_URI
const connectDB=()=>{
    mongoose.connect(MONGO_URI, (err)=>{
        if (err) throw err
        else console.log("Database is connected")
    })
}
module.exports= connectDB