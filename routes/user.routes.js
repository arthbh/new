const express=require("express");
const { UserModel } = require("../model/user.model");
const userRouter=express.Router();
const jwt=require("jsonwebtoken")

userRouter.post("/register",async(req,res)=> {
    const payload = req.body
    try{
        const user=new UserModel(payload)
        await user.save()
        res.status(201).send({"msg":"Registered"})
    } catch (error){
        res.status(400).send({"msg":error.message})
        
    }
})

userRouter.post("/login",async (req,res)=> {
    const {email,password}=req.body;
    try {
        const user=await UserModel.find({email,password})
        user.length>0?res.status(201).send({"msg":"Login done!","token":jwt.sign({"userID":user._id},"abcd")})
        :res.status(400).send({"msg":"Login failed"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

module.exports={userRouter}
