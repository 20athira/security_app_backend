const mongoose = require("mongoose")

const userschema = new mongoose.Schema(
    {
        name: String,
        empid: String,
        mobile : String,
        address: String,
        email: String,
        password: String,
    }
)

module.exports =mongoose.model("Users",userschema)

