const contactInfo = require('../models/contactInfoSchema.js')

//find all the contactInfo
exports.contactInfos = (req,res)=>{
    contactInfo.find(req.query).limit(req.query.limit)    // query by type or categorie or..... // &limit=2
    .then( (data)=>{res.send(data)})
    .catch((error)=>res.status(500).send(error))
}

//find ContactInfo by id
exports.useContactInfo = (req,res)=>{
    contactInfo.findById(req.params.id)    
    .then( (data)=>{res.send(data)})
    .catch((error)=>res.status(500).send(error))
}


//updateContactInfo
exports.updateContactInfo =  (req,res)=>{
    const contactInfoId = req.params.id
    contactInfo.findByIdAndUpdate(contactInfoId,{...req.body})
      .then((contactInfo)=>{
        if(!contactInfo){
            return res.status(404).send ({msg:'contactInfo not found'})
        }
        res.send({msg:'info update', contactInfo})
      })
      .catch((err) =>res.status(400).send({msg:"error updating"}))
}

//delete deleteContactInfo
exports.deleteContactInfo= (req,res)=>{
    contactInfo.findByIdAndDelete(req.params.id)
    .then((data)=>{
        if(!data){
            res.status(400).json({msg:"infoContact is not valid"})
        }
        else{
            res.status(200).json({msg:'infoContact deleted'})
        }
    }).catch((err)=>{res.status(400).send(err)})
}