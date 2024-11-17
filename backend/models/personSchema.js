const mongoose=require('mongoose')

const personSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    nameMal:{
        type:String,
        required:true
    },
    designation:{
        type:String
    },
    designationMal:{
        type:String
    },
    description:{
        type:String,
    },
    descriptionMal:{
        type:String
    }
})
const personData=mongoose.model('persondb',personSchema)
module.exports=personData