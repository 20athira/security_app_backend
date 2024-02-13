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

router.post("/signin",async(req,res)=>{
    let input=req.body
    let email =req.body.email
    let data =await usermodel.findOne({"email":email})
    if(!data){
        return res.json({status:"Invalid user"})
    }
    console.log(data)
    let dbPassword =data.password
    let inputPassword=req.body.password
    console.log(dbPassword)
    console.log(inputPassword)
    const match =await bcrypt.compare(inputPassword,dbPassword)
    if(!match){
        return res.json({status:"Invalid Password"})
    }
    res.json({status : "Signed IN ","userdata":data})
})


router.get("/view",async (req,res)=>{
    let result= await usermodel.find()
    res.json(result)

})

module.exports =router