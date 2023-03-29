const express = require('express')
const cors = require('cors')
const mongoose=require('mongoose')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
const schema = mongoose.Schema
const UserSchema=new schema({
    email:{
        type: String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required:true
    }
})
const loginmodel=mongoose.model('User',UserSchema)



app.get('/',(req,res)=>{
    res.json({message:"HEllo from uc1"})
})
app.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try{
        const data =await loginmodel.findOne({email})
        if (!data) {
            throw Error('Email not registered')
        }
        if (data.password != password) {
            throw Error('incorrect password')
        }
        res.status(200).json(data.email)
    }
    catch(error){
        res.status(400).json({ error: error.message })
    }
})
router.post('/signup',async (req,res)=>{
    const {email,password}=req.body
    console.log(req.body)
    try {
        const user=await loginmodel.create({email,password})
        res.status(200).json(user)
    }catch(error){
        res.status(400).json({error:error.message})
    }
    res.json({message:'posted to /login'})
})
app.listen(5001,()=>console.log("uc1 running"))