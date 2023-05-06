const express=require("express");
const { OrderModel } = require("../model/order.model");

const orderRouter=express.Router();



orderRouter.post("/",async(req,res)=> {
    const payload = req.body
    try{
        const user=new OrderModel(payload)
        await user.save()
        res.status(201).send({"msg":"order added"})
    } catch (error){
        res.status(400).send({"msg":error.message})
        
    }
})

orderRouter.get("/",async(req,res)=> {
    try{
        const order=await OrderModel.find()
        res.status(200).send(order)
    } catch (error){
        res.status(400).send({"msg":error.message})
        
    }
})

module.exports={orderRouter}