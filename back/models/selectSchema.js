const mongoose = require('mongoose')
const Schema =mongoose.Schema


const selectSchema= new Schema (
    {_id : { required: true ,type:String} ,
        date: {type:Date,required: true},
        him: {required: true,type:String},
        her: {required: true,type:String},
        select:{
            categories1 : [ 
               { type: Object ,properties: {categorie:{ required: true ,type:String}}},
               { type: Object ,properties: {title:{ required: true ,type:String}}}
        ],
         categories2 : [ 
            { type: Object ,properties: {categorie:{ required: true ,type:String}}},
            { type: Object ,properties: {title:{ required: true ,type:String}}}
     ],
     categories3 : [ 
        { type: Object ,properties: {categorie:{ required: true ,type:String}}},
        { type: Object ,properties: {title:{ required: true ,type:String}}}
 ]
          },
        desc : String} 
)

module.exports =mongoose.model("selectPartners",selectSchema)


