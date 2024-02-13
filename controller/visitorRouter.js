const express=require("express")
const router=express.Router()
const visitormodel = require("../model/visitormodel")


router.post("/add",async(req,res)=>{
    let data = req.body
    let visitor=new visitormodel(data)
    let result=await visitor.save()
    res.json({

       status:"success"
      })
})

    
router.get("/view",async(req,res)=>{
    let data1=await visitormodel.find()
    res.json(data1)
    })


module.exports=router

