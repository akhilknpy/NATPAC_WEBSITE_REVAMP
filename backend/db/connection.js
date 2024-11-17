const mongoose=require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB_URI).then(()=>{
    console.log('DB connection established')
}).catch(()=>{
    console.log('Db connection failed')
})