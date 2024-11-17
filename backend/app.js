const express=require('express')
const app=express()
const cors=require('cors')
app.use('/topcarousel', express.static('topcarousel'))
app.use('/resproj', express.static('resproj'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

require('./db/connection')
require('dotenv').config()
const PORT=process.env.PORT

const adminRouter=require('./routers/server')
app.use('/',adminRouter)

const userRouter=require('./routers/user')
app.use('/user',userRouter)

const carouselRouter=require('./routers/carouselImage')
app.use('/carousel',carouselRouter)

const resProj=require('./routers/resProj')
app.use('/resproj',resProj)

app.listen(PORT,()=>{
    console.log(`Application is listening to PORT ${PORT}`)
})