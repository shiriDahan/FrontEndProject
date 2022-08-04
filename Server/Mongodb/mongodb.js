const mongoose = require ('mongoose')

mongoose.connect("mongodb://localhost:27017/finalProjecdb" , ()=>{
    console.log("conected to db sussecfuly")})
