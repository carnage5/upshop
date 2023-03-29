const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.get('/',(req,res)=>{
    res.json({message:"Hello from uc3"})
})
app.listen(5003,()=>console.log("uc3 running"))