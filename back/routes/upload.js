const express = require('express')
const router = express.Router()
const multer = require("multer")        //upload image and video 
const Image = require('../models/Image')

// multer 
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads")
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({ storage: storage })




router.post('/', upload.single('avatar'), (req, res) => {                                                  //upload.array multipe image  //upload.fields 
    let path = req.protocol + "://" + req.hostname + ":" + 5000 + "/uploads/" + req.file.filename
    let newImage = new Image({ imageName: path })                                                          //imageName :some name in the schema
    console.log(newImage)
    newImage
        .save()
        .then((img) => res.status(201).send(img))
        .catch((err) => {
            console.error(err.message);
            res.status(500).send("server error")
        })
})



module.exports = router