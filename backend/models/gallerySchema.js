const mongoose=require('mongoose');

const gallerySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    nameMal:{
        type:String,
        required:true
    },
    imageData:{
        type:Buffer,
        required:true
    },
    imageDescriptionEng:{
        type:String
    },
    imageDescriptionMal:{
        type:String,
    },
    uploadDate:{
        type:Date,
        default:Date.now
    }
});
const galleryData=mongoose.model('gallerydb',gallerySchema)
module.exports=galleryData