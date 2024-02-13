const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRouter=require("./controller/userRouter")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://akshaykj:akshaykj@cluster0.3vob5wn.mongodb.net/securityDb?retryWrites=true&w=majority",{
    useNewUrlParser :true
})

app.use("/security",userRouter)
//app.use("/post",postRouter)

app.listen("3001",()=>{
    console.log("Server running........")
})  