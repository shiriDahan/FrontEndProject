const mongoose = require('mongoose')

let userSahema = new mongoose.Schema({
    
    fullName:{
        type:String , 
        require:true,
        minlength:3
    },
    userName:{
        type:String,
        require:true,
        minlength:3
        
    },
    password:{
        type:String,
        require:true,
        minlength:3
    }

})

const model = mongoose.model('User', userSahema)
module.exports = model