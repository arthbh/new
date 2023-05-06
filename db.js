const mongoose=require("mongoose")

// const connection=mongoose.connect("mongodb://127.0.0.1:27017/eval11backend")
const connection=mongoose.connect("mongodb+srv://arthbhh:hhbhtra@cluster0.woyr0de.mongodb.net/eval11backend?retryWrites=true&w=majority")

module.exports={connection}