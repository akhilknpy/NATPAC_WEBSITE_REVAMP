const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["admin","user"]
    },
    CreatedDate:{
        type:Date,
        default:Date.now
    },
    lastPasswordChangeDate:{
        type:Date,
        default:Date.now
    }
})
const userData=mongoose.model('userdb',userSchema)
module.exports=userData