const jwt=require("jsonwebtoken")

const auth = (req,res,next)=> {
    const token=req.headers.authorization
    if(token){
        const decoded = jwt.verify(token,"abcd")
        if(decoded){
            console.log(decoded)
            req.body.userID=decoded.userID
            next()
        }else {
            res.status(400).send({"msg":"Please login"})
        }
    }else {
        res.status(400).send({"msg":"Please login"})

    }
}
module.exports={auth}