const express = require('express')
const router = express.Router()
const multer = require("multer")//upload image and video 

const { customers, useCustomer, updateCustomer, deleteCustomer } = require('../controllers/manageCustomer.js')
const { contactInfos, useContactInfo, updateContactInfo, deleteContactInfo } = require('../controllers/manageContactInfo.js')
const { newPartner, partnersList, partnerById, updatePartner, deletePartner, partnerByCategories } = require('../controllers/managePartners')

// multer 
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "../../front/public/uploads")
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

// const multipleUpload = upload.fields([{name: "logo" }, {name:"photos", maxCount:5 },{name: "videos" }])
// we need to add multiple on the input with photos
const multipleUpload = upload.single("logo") //one file




//                            manage customer
//find customer 
router.get('/customers', customers)
router.get('/useCustomer/:id', useCustomer)
//  de updateCustomer
router.put('/updateCustomer/:id', updateCustomer)
//delete customer
router.delete('/deleteCustomer/:id', deleteCustomer)

//                           manage contactInfo


//find contactInfo
router.get('/contactsInfos', contactInfos)
//find contactInfo by id 
router.get('/contactInfo/:id', useContactInfo)
// de updateContactInfo
router.put('/updateContactInfo/:id', updateContactInfo)
//delete contactInfo
router.delete('/deleteContactInfo/:id', deleteContactInfo)



//                          PartnersList

//add new partner
router.post('/addNewPartner', multipleUpload, newPartner)
//find partners
router.get('/partnersList', partnersList)
//find partner by id 
router.get('/partner/:id', partnerById)
// updatepartner
router.put('/updatePartner/:id', multipleUpload, updatePartner)
//delete partner
router.delete('/deletePartner/:id', deletePartner)

//  find partner by categorie
router.get('/partner/categories/:id', partnerByCategories)



module.exports = router

