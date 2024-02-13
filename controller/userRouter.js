const express =require("express")
//const signUpModels =require("../model/usermodel")
const bcrypt =require("bcryptjs")
const usermodel = require("../model/usermodel")
const { request } = require("http")


const router = express.Router()

hashPaswordGenerator =async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup", async(req,res)=>{
    let {data} = {"data":req.body}
      let password =data.password
        hashPaswordGenerator(password).then(
            (hashedPassword)=>{
                console.log(hashedPassword)
                data.password=hashedPassword
                console.log(data)
                
                 let user =new usermodel(data)
                let result =user.save()
                
                res.json({status:"success"})
            }
        )

// const hashedPassword =await hashPaswordGenerator(password)
// data.password =hashedPassword
// let user =new userModel(data)
// let result =await user.save()

// res.json({status:"success"})    
   
})
module.exports =router