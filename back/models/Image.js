 const mongoose =require('mongoose')

  const ImageSchema = mongoose.Schema({
    imageName: String,
    create_at:{
        type: Date, default : Date.now
    }
  })

  module.exports = mongoose.model("image",ImageSchema)