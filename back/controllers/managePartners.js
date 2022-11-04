const   partner  =require ('../models/partnersSchema.js')


//         list of partners
// add new partner
exports.newPartner= async (req, res) =>{
    const { categorie,title,nameManger,e_mail,phoneNum,desc ,address,logo,photos,videos,links,rating,comments} =req.body

    const existPartner = await partner.findOne({title:title})
    if(existPartner)res.status(400).json({msg: "have an account"})

    const newPartner = new  partner({ categorie,title,nameManger,e_mail,phoneNum,desc ,address,logo,photos,videos,links,rating,comments})
    newPartner.save()
    .then((partner)=>res.send(partner))
    .catch((err)=>res.status(404).send({msg:`we cannot add partner ${err}`}))
}

//find all the partners
exports.partnersList = (req,res)=>{
    partner.find()    
    .then( (data)=>{res.send(data)})
    .catch((error)=>res.status(500).send(error))
}

//find partner by id
exports.partnerById = (req,res)=>{
    partner.findById(req.params.id)    
    .then( (data)=>{res.send(data)})
    .catch((error)=>res.status(500).send(error))
}


//updatePartner
exports.updatePartner =  (req,res)=>{
    const partnerId = req.params.id
    partner.findByIdAndUpdate(partnerId,{...req.body})
      .then((partner)=>{
        if(!partner){
            return res.status(404).send ({msg:'Partner not found'})
        }
        res.send({msg:'Partner update', partner})
      })
      .catch((err) =>res.status(400).send({msg:"error updating"}))
}

//delete Partner
exports.deletePartner= (req,res)=>{
    partner.findByIdAndDelete(req.params.id)
    .then((data)=>{
        if(!data){
            res.status(400).json({msg:"Partner is not valid"})
        }
        else{
            res.status(200).json({msg:'Partner deleted'})
        }
    }).catch((err)=>{res.status(400).send(err)})
}


