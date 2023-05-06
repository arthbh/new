const express=require("express");
const { userRouter } = require("./routes/user.routes");
const { connection } = require("./db");
const { bookRouter } = require("./routes/book.routes");
const { orderRouter } = require("./routes/order.routes");
const { auth } = require("./middleware/auth.middleware");
const cors=require("cors")
const app=express();
app.use(express.json())
app.use(cors())
app.use("/",userRouter)
app.use(auth)
app.use("/books",bookRouter)
app.use("/orders",orderRouter)

app.get("/",(req,res)=>{
    res.send("HOME PAGe")
})

app.listen(8000, async ()=> {
    try {
        await connection
        console.log("connected to db");
    } catch (error) {
        console.log("error");
    }
    console.log("HEy")
})