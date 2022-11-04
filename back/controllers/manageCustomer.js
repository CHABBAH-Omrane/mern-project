const customer = require('../models/customerSchema.js')
const contactInfo = require('../models/contactInfoSchema.js')



//         list of customers
//find all the customers
exports.customers = (req,res)=>{
    customer.find()    
    .then( (data)=>{res.send(data)})
    .catch((error)=>res.status(500).send(error))
}

//find customer by id
exports.useCustomer = (req,res)=>{
    customer.findById(req.params.id)    
    .then( (data)=>{res.send(data)})
    .catch((error)=>res.status(500).send(error))
}


//updateCustomer
exports.updateCustomer =  (req,res)=>{
    const customerId = req.params.id
     customer.findByIdAndUpdate(customerId,{...req.body})
      .then((customer)=>{
        if(!customer){
            return res.status(404).send ({msg:'Customer not found'})
        }
        res.send({msg:'customer update', customer})
      })
      .catch((err) =>res.status(400).send({msg:"error updating"}))
}

//delete customer
exports.deleteCustomer= (req,res)=>{
    customer.findByIdAndDelete(req.params.id)
    .then((data)=>{
        if(!data){
            res.status(400).json({msg:"customer is not valid"})
        }
        else{
            res.status(200).json({msg:'customer deleted'})
        }
    }).catch((err)=>{res.status(400).send(err)})
}


// //              list of contacstInfo
// //find all the contactList
// exports.contactInfos = (req,res)=>{
//     contactInfo.find()    
//     .then( (data)=>{res.send(data)})
//     .catch((error)=>res.status(500).send(error))
// }
