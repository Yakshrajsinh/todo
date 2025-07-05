const express=require('express')
const app=express()
const cors =require("cors")
require('./connection/connection')
const auth=require('./routers/userRouter')
const path = require("path")
const listRouter=require('./routers/listRouter')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.get('/',(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"frontend","dist")))
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
})

app.use('/api/user',auth)
app.use('/api/list',listRouter)
app.listen(8000,()=>{
    console.log("server started at http://localhost:8000");
})