const express=require("express");
const { BookModel } = require("../model/book.model");
const jwt=require("jsonwebtoken")

const bookRouter=express.Router();



bookRouter.get("/",async(req,res)=> {
    const query = req.query
    console.log(query)
    try{
        const book=await BookModel.find(query)
        res.status(200).send(book)
    } catch (error){
        res.status(400).send({"msg":error.message})
        
    }
})
bookRouter.get("/:id",async(req,res)=> {
    try {
        const {id} = req.params;
        const book = await BookModel.findById(id);
        res.status(200).send({Book:book})
    } catch (error) {
        res.send(error.message)
    }
})

bookRouter.post("/",async(req,res)=> {
    const payload = req.body
    try{
        const user=new BookModel(payload)
        await user.save()
        res.status(201).send({"msg":"Books added"})
    } catch (error){
        res.status(400).send({"msg":error.message})
        
    }
})

bookRouter.patch("/:id",async(req,res)=> {
    // const token=req.headers.authorization.split(" ")[1]
    // const decoded=jwt.verify(token,"abcd");
    // const req_id=decoded.userID //
    // const book=BookModel.findOne({_id:id})
    // const ID_in=book.userID
    const {id} = req.params
    const payload = req.body

    try{
        // if(req_id==ID_in){
            await BookModel.findByIdAndUpdate({_id:id},payload)
            res.status(204).send({"msg":"Books has been updated"})

        // }else {
        //     res.status(400).send({"msg":error.message})

        // }
    } catch (error){
        res.status(400).send({"msg":error.message})
        
    }
})

bookRouter.delete("/:id",async(req,res)=> {
    // const token=req.headers.authorization.split(" ")[1]
    // const decoded=jwt.verify(token,"abcd");
    // const req_id=decoded.userID //
    // const book=BookModel.findOne({_id:id})
    // const ID_in=book.userID
    const {id} = req.params

    try{
        // if(req_id==ID_in){
            await BookModel.findByIdAndDelete({_id:id})
            res.status(202).send({"msg":"Book has been deleted"})

        // }else {
        //     res.status(400).send({"msg":error.message})

        // }
    } catch (error){
        res.status(400).send({"msg":error.message})
        
    }
})

module.exports={bookRouter}