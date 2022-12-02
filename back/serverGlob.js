const express = require("express")
const app = express()
const cors = require('cors');

const connectDB = require("./config/connectDB")
const port = process.env.PORT

// connect to db
connectDB()

//middleware
app.use(cors())
app.use(express.json())
app.use("/uploads", express.static(__dirname + "/uploads")) //when we uploads image with get => works with his path

//Difine Routes
app.use('/', (require("./routes/visitorRoutes")))
app.use('/admin', (require("./routes/adminRoutes")))
app.use('/customer', (require("./routes/customerRoutes")))


app.use('/img', (require("./routes/upload")))





app.listen(port, () => {
    console.log("listened in port: " + port)
})