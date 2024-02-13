const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRouter=require("./controller/userRouter")
const visitorRouter=require("./controller/visitorRouter")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://AthiraRam:athira235@cluster0.orujzdx.mongodb.net/securitydb?retryWrites=true&w=majority",{
    useNewUrlParser :true
})

app.use("/api/security",userRouter)
app.use("/api/visitor",visitorRouter)

app.listen("3001",()=>{
    console.log("Server running........")
})  