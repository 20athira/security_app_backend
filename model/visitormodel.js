const mongoose=require("mongoose")

const visitorSchema=new mongoose.Schema(
    {
        name:String,
        purpose:String,
        phoneno:String,
        address:String,
        
    }
)

module.exports=mongoose.model("visitor",visitorSchema)