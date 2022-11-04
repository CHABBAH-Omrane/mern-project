const express =require("express")
const app= express()
app.use(express.json())
const connectDB =require("./config/connectDB")
const port= process.env.PORT
connectDB()

app.use('/', (require("./routes/visitorRoutes")))
app.use('/admin', (require("./routes/adminRoutes")))
app.use('/customer', (require("./routes/customerRoutes")))






app.listen(port,()=>{
    console.log("listened in port: " + port)
})