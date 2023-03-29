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
    res.json({message:"hello from uc2"})
})
app.listen(5002,()=>console.log("uc2 running"))